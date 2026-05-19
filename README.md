# CabaCraft — Quick Reference

CabaCraft is a Minecraft **1.20.1 Fabric** modpack (Fabric Loader 0.19.2, ~255 mods) maintained as a CurseForge instance. Two systems run on top of vanilla:

- **Custom traders** — handcrafted invulnerable villagers spawned from `trader_commands/*.txt`; gate mod content behind dimensional-rune currency.
- **Origins / Classes / Factions** — race + class + faction system delivered by the OpenLoader-loaded datapack at `config/openloader/data/cabacraft_origins/`.

For full architecture and conventions, see [CLAUDE.md](CLAUDE.md). This file is the operational quick-reference: in-game commands and the apply-method table.

---

## In-game commands

### Preview datapack (texture grid + trader lineup)

```
/function cabacraft:all_textures
/function cabacraft:current_traders
/function cabacraft:cleanup_textures
/function cabacraft:cleanup_traders
/function cabacraft:cleanup
```

Two spawn (every profession × biome grid; current trader lineup) + three cleanup (textures-only / traders-only / both). Stand on flat empty ground; bulk-preview villagers are silent/no-AI. After editing a `trader_commands/*.txt` file: `python3 config/openloader/data/cabacraft_preview/regenerate.py` then `/reload`.

### Origins/Classes — Faction & Office (after Phase 4)

```
/cabafaction claim <desert|island|knight>   # FTB party OWNER binds party to a faction
/cabafaction release                        # owner only
/cabafaction info                           # any member

/cabaoffice set <chancellor|treasurer|judge> <player>   # op level 3, caps at 1 holder
/cabaoffice clear <office>
```

Requires the **FTB XMod Compat** mod (`ftb-xmod-compat-fabric` 2.1.3+ for Fabric 1.20.1, on CurseForge) for live faction-score sync via FTB Teams events; without it the commands still work and the score also resyncs on login + every ~10 s.

### Manual scoreboard testing (no addon needed)

```
/scoreboard players set <player> cabacraft_faction 3         # 1=desert 2=island 3=knight, 0=none
/scoreboard players set <player> cabacraft_office_judge 1    # also _chancellor / _treasurer
```

Origins regalia recipes are gated by these scoreboards via `apoli:scoreboard` conditions — flipping the score immediately unlocks/locks the recipe.

---

## Apply method (when does a change take effect?)

| What you changed | How to apply |
|---|---|
| `kubejs/server_scripts/*` (recipes, tags, server events, faction bridge) | `/reload` |
| `kubejs/client_scripts/*` (lang, JEI, most tooltips) | **F3+T** |
| `kubejs/client_scripts/rune_tooltips.js` & `ItemEvents.tooltip` scripts | **Full client restart** (F3+T doesn't reload these reliably) |
| `kubejs/startup_scripts/*` | Full client restart |
| `config/openloader/data/cabacraft_origins/*` (datapack) | `/reload` |
| `config/openloader/resources/*.zip` (lang resource pack) | **Full client restart** (resource packs need a clean load) |
| `config/**` (mod configs, Item Obliterator, discount toggles, armor stats) | Full client restart (server restart if dedicated) |
| `trader_commands/*.txt` | Re-summon the villager (existing entities keep old NBT) |

**Rule of thumb:** `kubejs/server_scripts/*` + datapack functions → `/reload`. Anything client-side (lang, tooltips, configs) → **full client restart**. Trader NBT → always re-summon.
