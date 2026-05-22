// /cabacodex - bulletproof give for the CabaCraft Guide Book.
// Clears any legacy book NBT a player might be holding (cabacraft:cabacraft_guide,
// cabacraft:guide, or patchouli:cabacraft_codex from previous attempts), revokes
// the give-on-join advancement so it can refire if needed, and gives a fresh book
// with the now-correct external Patchouli book id: patchouli:cabacraft_guide_book.

ServerEvents.commandRegistry(e => {
  const C = e.commands;
  e.register(C.literal('cabacodex').executes(ctx => {
    const p = ctx.source.player; if (!p) return 0;
    const u = p.username, s = p.server;
    s.runCommandSilent(`clear ${u} patchouli:guide_book{patchouli:book:"cabacraft:cabacraft_guide"}`);
    s.runCommandSilent(`clear ${u} patchouli:guide_book{patchouli:book:"cabacraft:guide"}`);
    s.runCommandSilent(`clear ${u} patchouli:guide_book{patchouli:book:"patchouli:cabacraft_codex"}`);
    s.runCommandSilent(`clear ${u} patchouli:guide_book{patchouli:book:"patchouli:cabacraft_guide_book"}`);
    s.runCommandSilent(`advancement revoke ${u} only cabacraft:get_codex`);
    s.runCommandSilent(`give ${u} patchouli:guide_book{patchouli:book:"patchouli:cabacraft_guide_book"}`);
    p.tell('§b[Guide Book] §rFresh book given. Right-click to open.');
    return 1;
  }));
});
