// CabaCraft Phase 4 — FTB Teams faction + world-government office bridge.
//
// REQUIRES the "FTB XMod Compat" mod (ftb-xmod-compat-fabric, MC 1.20.1, v2.1.3+)
// — the official addon that adds KubeJS<->FTB Teams events. Without it the
// FTBTeamsEvents block is inert and only /cabaoffice + manual scoreboard works.
// FTB XMod Compat exposes FTBTeamsEvents.playerJoinedParty / .playerLeftParty
// with e.currentTeam / e.player. Party OWNER is NOT in that binding, so owner
// resolution goes straight to the FTB Teams Java API (the ftb-teams mod itself,
// already installed) via Java.loadClass — guarded so a missing/renamed API
// degrades gracefully instead of erroring.
//
// Model (locked design):
//  - 3 SET-IN-STONE factions: desert=1, island=2, knight=3.
//  - A faction is an FTB Teams *party*. The party OWNER binds the party to one
//    faction once via /cabafaction claim <name>. Binding is stored per-team in
//    server persistent data; one faction per party; one party per faction.
//  - Only the party OWNER receives the regalia (locked "leader-only crafting"):
//    we set scoreboard `cabacraft_faction` = faction# for the owner ONLY.
//    Origins regalia recipes carry condition apoli:scoreboard == that #.
//  - Offices (chancellor/treasurer/judge): op assigns with /cabaoffice; each
//    capped at exactly 1 holder via `cabacraft_office_<x>` (0/1).

const FACTIONS = { desert: 1, island: 2, knight: 3 }
const OFFICES = ['chancellor', 'treasurer', 'judge']

// ---- persistent store: { teamId(string): faction#(int) } -------------------
function bindings(server) {
  let d = server.persistentData
  if (!d.contains('cabaFactionBindings')) d.put('cabaFactionBindings', {})
  return d.get('cabaFactionBindings')
}
function factionOfTeam(server, teamId) {
  let b = bindings(server)
  return b.contains('' + teamId) ? b.getInt('' + teamId) : 0
}
function setTeamFaction(server, teamId, facNum) {
  let b = bindings(server); b.putInt('' + teamId, facNum)
  server.persistentData.put('cabaFactionBindings', b)
}
function clearTeamFaction(server, teamId) {
  let b = bindings(server); b.remove('' + teamId)
  server.persistentData.put('cabaFactionBindings', b)
}
function factionTaken(server, facNum) {
  let b = bindings(server)
  return b.getAllKeys().toArray().some(k => b.getInt(k) === facNum)
}

// ---- resolve a player's FTB party + owner via the FTB Teams Java API -------
// Uses the ftb-teams mod's own API (always present in this pack). Heavily
// guarded: any class/method drift just yields null/false, never a hard error.
let FTBAPI = null
try { FTBAPI = Java.loadClass('dev.ftb.mods.ftbteams.api.FTBTeamsAPI') } catch (e) {
  try { FTBAPI = Java.loadClass('dev.ftb.mods.ftbteams.FTBTeamsAPI') } catch (x) { FTBAPI = null }
}
function ftbManager() {
  try { return FTBAPI.api ? FTBAPI.api().getManager() : FTBAPI.getManager() } catch (e) { return null }
}
function teamOf(player) {
  try {
    let m = ftbManager(); if (!m) return null
    let opt = m.getTeamForPlayer ? m.getTeamForPlayer(player) : m.getPlayerTeam(player.uuid)
    if (opt && opt.isPresent) return opt.isPresent() ? opt.get() : null
    return opt || null
  } catch (e) { return null }
}
function isOwner(player, team) {
  try {
    if (!team) return false
    if (team.getOwner) return ('' + team.getOwner()) === ('' + player.uuid)
    if (team.owner) return ('' + team.owner) === ('' + player.uuid)
  } catch (e) {}
  return false
}
function teamId(team) {
  try { return '' + (team.getTeamId ? team.getTeamId() : (team.getId ? team.getId() : team.id)) }
  catch (e) { return null }
}

// ---- recompute one player's faction score ----------------------------------
function refreshFaction(player) {
  let server = player.server
  let team = teamOf(player)
  let fac = 0
  if (team) {
    let tid = teamId(team)
    let bound = tid ? factionOfTeam(server, tid) : 0
    if (bound > 0 && isOwner(player, team)) fac = bound // OWNER ONLY
  }
  player.server.runCommandSilent(
    `scoreboard players set ${player.username} cabacraft_faction ${fac}`)
}

// ---- events: keep faction score live --------------------------------------
PlayerEvents.loggedIn(e => { e.server.scheduleInTicks(20, () => refreshFaction(e.player)) })

try {
  // kubejs-ftbteams events (names per the addon). All guarded.
  FTBTeamsEvents.playerJoinedParty(e => { try { refreshFaction(e.player) } catch (x) {} })
  FTBTeamsEvents.playerLeftParty(e => { try { e.player && refreshFaction(e.player) } catch (x) {} })
} catch (e) {
  console.warn('[CabaCraft] FTB XMod Compat not detected — install ftb-xmod-compat-fabric ' +
               '(MC 1.20.1) for live faction sync. /cabafaction still works; ' +
               'faction score also refreshes on login + every ~10s.')
}

// periodic safety re-sync (covers ownership transfer / disband)
let tick = 0
PlayerEvents.tick(e => {
  if (!e.player.server) return
  if ((tick = (tick + 1) % 200) !== 0) return // ~10s per player
  refreshFaction(e.player)
})

// ---- commands --------------------------------------------------------------
ServerEvents.commandRegistry(e => {
  const { commands: C, arguments: A } = e

  // /cabafaction claim <desert|island|knight>   (party OWNER only)
  // /cabafaction release                        (party OWNER only)
  // /cabafaction info
  e.register(C.literal('cabafaction')
    .then(C.literal('claim').then(C.argument('faction', A.STRING.create(e))
      .executes(ctx => {
        let p = ctx.source.player
        if (!p) return 0
        let name = A.STRING.getResult(ctx, 'faction').toLowerCase()
        if (!(name in FACTIONS)) { p.tell('§cUnknown faction. Use desert | island | knight.'); return 0 }
        let team = teamOf(p)
        if (!team) { p.tell('§cYou must be in an FTB Teams party first.'); return 0 }
        if (!isOwner(p, team)) { p.tell('§cOnly the party OWNER can claim a faction.'); return 0 }
        let server = p.server, tid = teamId(team), fac = FACTIONS[name]
        let cur = factionOfTeam(server, tid)
        if (cur === fac) { p.tell('§eYour party is already the ' + name + ' faction.'); return 1 }
        if (cur > 0) { p.tell('§cYour party already holds another faction. /cabafaction release first.'); return 0 }
        if (factionTaken(server, fac)) { p.tell('§cThe ' + name + ' faction is already held by another party.'); return 0 }
        setTeamFaction(server, tid, fac)
        refreshFaction(p)
        server.tell('§6[Factions] §r' + p.username + "'s party is now the §b" + name + '§r faction.')
        return 1
      })))
    .then(C.literal('release').executes(ctx => {
        let p = ctx.source.player; if (!p) return 0
        let team = teamOf(p)
        if (!team || !isOwner(p, team)) { p.tell('§cOnly the party OWNER can release the faction.'); return 0 }
        clearTeamFaction(p.server, teamId(team))
        refreshFaction(p)
        p.tell('§eFaction released.')
        return 1
      }))
    .then(C.literal('info').executes(ctx => {
        let p = ctx.source.player; if (!p) return 0
        let team = teamOf(p)
        let f = team ? factionOfTeam(p.server, teamId(team)) : 0
        let nm = Object.keys(FACTIONS).find(k => FACTIONS[k] === f) || 'none'
        p.tell('§6Faction: §b' + nm + (team && isOwner(p, team) ? ' §7(you are the leader — regalia unlocked)' : ' §7(member — leader-only crafting)'))
        return 1
      })))

  // /cabaoffice set <chancellor|treasurer|judge> <player>   (op level 3)
  // /cabaoffice clear <office>
  e.register(C.literal('cabaoffice').requires(s => s.hasPermission(3))
    .then(C.literal('set')
      .then(C.argument('office', A.STRING.create(e))
        .then(C.argument('target', A.PLAYER.create(e)).executes(ctx => {
          let off = A.STRING.getResult(ctx, 'office').toLowerCase()
          if (OFFICES.indexOf(off) < 0) { ctx.source.player && ctx.source.player.tell('§cUnknown office.'); return 0 }
          let tgt = A.PLAYER.getResult(ctx, 'target')
          let s = ctx.source.server
          // cap = 1: clear everyone, then set the target
          s.runCommandSilent(`scoreboard players set @a cabacraft_office_${off} 0`)
          s.runCommandSilent(`scoreboard players set ${tgt.username} cabacraft_office_${off} 1`)
          s.tell('§6[Office] §r' + tgt.username + ' is now the §e' + off + '§r.')
          return 1
        }))))
    .then(C.literal('clear').then(C.argument('office', A.STRING.create(e)).executes(ctx => {
        let off = A.STRING.getResult(ctx, 'office').toLowerCase()
        if (OFFICES.indexOf(off) < 0) return 0
        ctx.source.server.runCommandSilent(`scoreboard players set @a cabacraft_office_${off} 0`)
        ctx.source.server.tell('§6[Office] §r' + off + ' vacated.')
        return 1
      }))))
})
