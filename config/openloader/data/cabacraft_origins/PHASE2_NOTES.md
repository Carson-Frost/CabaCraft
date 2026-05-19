# Phase 2 race powers — implementation notes / approximations

Built with verified Apoli/Origins schemas + the proven MO Pehkui-callback size pattern.
Solid: sizes, attributes, fire/fall invulnerability, effect immunities, night vision,
nether spawn, water breathing, swim speed, jump, dragonborn breath, half-orc relentless,
tiefling rebuke/water-vuln, equipped-wings-gated flight.

APPROXIMATIONS to refine later (functional, not final):
- Tortle shell_guard: reduces projectile/explosion damage while logic-agnostic of facing
  (no clean 'attacked from behind' condition in Apoli); shell-equipped gating still TODO.
- Tortle/Sea-Elf hold_breath: finite via Air-NBT + caba_dive counter (tortle_breath fn).
- Locathah tail: mermod trinket is config/permanent, not an Apoli power — wire via mermod.
- Elf phantom_ward / High-Elf magic_ward: use origins:name 'mob'/'magic' damage tags;
  validate the exact damage source names in-game.
- Half-orc poor_magic, Elf shrug_off, Human hardy: origins:simple placeholders
  (need spell_power attribute id / custom logic).
- Dwarf barehand_stone uses strong_arms_break_speed; tune values in-game.
