# Origins / Classes Build — Handoff

Design phase. **No implementation yet** except the Tortle shell item. Work conversationally / question-driven; the user redlines proposals.

## Where the detail lives
- **Locked race designs (all 10):** Claude memory `project_origins_race_designs.md` — authoritative, full per-race kits.
- Framework/decisions: memory `project_origins_classes.md`, `project_class_crafting_framework.md`, `project_origins_power_philosophy.md`, `project_turtle_shell.md`, `feedback_origins_planning_style.md`. (All indexed in `MEMORY.md`.)

## DESIGN COMPLETE (2026-05-18)
Races (10), factions/world-gov, and the full class partition are all LOCKED. See memory `project_origins_class_partition.md` (classes), `project_origins_factions.md` (factions), `project_origins_race_designs.md` (races). Only open item: the deferred dark fantasy cluster (parked, non-blocking). Phase is now IMPLEMENTATION.

## Status (historical — superseded by the above)
- **Races: ALL 10 DESIGN-LOCKED** (Tortle, Ribbit, Locathah, Elf[base+High/Wood/Sea], Aarakocra, Tiefling, Dragonborn, Half-orc, Dwarf, Human). Not built.
- **Classes: big-picture split proposed, NOT agreed.** 6 primary (Engineer, Mage, Monk, Warrior, Ranger, Rogue) + secondaries (Gunsmith, Artisan, Jeweler, Banker). Classes can have subclasses (Engineer: Aviator/Machinist; Warrior cultural subclasses; Mage Arcanist/Cleric; Ranger Archer/Fisher; Rogue Assassin/Reaper). Monk has no mod domain — unresolved.
- **Faction track: DESIGN-LOCKED** (see memory `project_origins_factions.md`). Small MP server, leader-only. 3 factions (Desert=nomad+Centurion, Island=ronin+Wanderer, Knight=fantasy old_knight/silver_knight/dragonslayer/spark_of_dawn/fog_guard) — full clusters pulled from traders, leader-craft-only. Central gov = elected **Chancellor** (hero set+crown) + appointed **Treasurer** (gilded_hunt; sole cog minter, fixed money supply, banker trader unchanged) + **Judge** (crucible_knight; regalia-only, apprehension-tools idea parked). Faction=FTB Teams party; world-gov=separate scoreboard tag (dual membership OK). Leftover champion/horror fantasy_armor sets stay parked.

## Core mechanics (locked)
- Datapack at `config/openloader/data/cabacraft_origins/` (global OpenLoader load, like cabacraft_preview). Override `origins:origin` & `origins-classes:class` layers with `replace:true`.
- Race traits = passive/simple/thematic, NOT active (one exception: Dragonborn fire-breath). Pehkui supports independent width/height (proven via MO dwarf/troll mcfunctions).
- Class identity = crafting. Every trader-sold recipe-removed item (the `// TRADER:` blocks in `kubejs/server_scripts/remove_recipes.js.js` + `trader_commands/INDEX.md`) must become craftable by some class/subclass, with **deliberately harder recipes** than original. `origins:recipe` powers, IN ADDITION to traders.
- Tortle shell built: `kubejs:turtle_shell` (chest armor) + `kubejs/startup_scripts/turtle_shell.js` + assets under `kubejs/assets/kubejs/`. Donor `turtlearmor-1.20.6-5.1-forge.jar` at instance root (texture donor only, never in mods/).

## Next steps
1. Resolve faction track Qs + fold faction layer into the class split as a parallel column.
2. Agree the big-picture class/subclass/secondary partition (esp. Monk, cultural armor, death-knight cluster, TBD parked sets).
3. Then per-class deep design (question-driven), then implementation of races + classes together.

## Working style (important)
Use AskUserQuestion batched per subject, lore-grounded, recommended option first labeled "(Recommended)". One race/class at a time. Big-picture splits as prose to redline, not quizzed. Design fully before implementing. End every message with the three bulk preview commands.
