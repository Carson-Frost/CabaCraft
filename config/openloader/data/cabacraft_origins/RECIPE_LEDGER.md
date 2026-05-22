# Class Recipe Ledger

Phase 3 of the Origins build: every class-catalogue item becomes an `origins:recipe` power on its class origin — craftable **only** by that class. Each recipe is hand-tuned to be **harder** than the item's normal/original recipe while staying true to the source mod's identity. This doc is the review trail: one line per item, CHANGED (what got harder + why) or UNCHANGED (why not).

## Hardening framework (the defensible rubric)

Every recipe obeys these, so each decision is justifiable against a fixed standard:

1. **Class-gated.** Each item = one `origins:recipe` power, id `cabacraft:<class>/<item>`, on that class's origin JSON. Only that class sees/crafts it.
2. **Strictly harder than baseline**, via at least one of:
   - **More steps** — a class-crafted intermediate sub-component the final item then consumes (depth, not just cost).
   - **Higher tier** — bump the material tier in step with the item's role/price band (iron→diamond, +netherite scrap for elite, etc.).
   - **More / rarer mats** — greater quantity or a thematic rare ingredient.
3. **True to the mod.** Ingredients read as the source mod's fantasy: aircraft = iron/copper/redstone/mechanisms; arcane = lapis/amethyst/echo shard/glowstone; holy = gold/glowstone/totem; firearms = flint/gunpowder/copper/iron; aquatic = prismarine/heart of the sea; nature/cosmetic = the mod's own plant/cloth mats. No generic one-size recipe.
4. **Interlocks honored.** Engineer: Mechanical = hub; Aeronautical & Electrical *top tiers* require a Mechanical-made part; Aeronautical *powered* top tier also requires an Electrical part; basics self-bootstrap. Combat classes are self-contained (no smith/engineer dependency). (Locked in the class-partition design.)
5. **No invented content.** Ingredients are only vanilla or already-installed mod items; results are the real mod item IDs. Nothing references items that don't exist.
6. **Recipe shape.** `minecraft:crafting_shaped` unless the item is naturally shapeless; result count 1 unless the mod's own recipe yields more.
7. **UNCHANGED is allowed but must be justified** — used only when an item genuinely has no meaningful recipe to harden or hardening would break the mod's intent.

Apply method (when testing): `origins:recipe` lives in the datapack → `/reload` picks it up; the recipe is only offered to players whose current class origin grants the power.

---

## Ledger

Legend: **C** = changed (harder), **U** = unchanged (justified). Format: `item_id` — verdict — one-line note.

<!-- Filled class-by-class in locked order. -->

### Aeronautical Engineer  (`cabacraft:eng_aeronautical`)
_26 items — all 20 Immersive Aircraft components + 6 Immersive Machinery items. Interlock: top tier needs a Mechanical drill; powered top also needs an Electrical motor._

- `immersive_aircraft:propeller` — **C** — 6 iron + copper-block hub (was 5 loose iron) — sturdier forged blade.
- `immersive_aircraft:enhanced_propeller` — **C** — 7 copper + a propeller + copper block (was 4 copper + propeller) — fully copper-clad.
- `immersive_aircraft:industrial_gears` — **C** — doubled iron/copper around the lever core (was 3 iron/3 copper) — heavier gear train.
- `immersive_aircraft:sturdy_pipes` — **C** — full 4-iron/5-copper lattice (was 2 iron/3 copper) — pressure-rated.
- `immersive_aircraft:improved_landing_gear` — **C** — coal BLOCK shock-core + netherite-scrap feet (was loose coal) — survives hard landings.
- `immersive_aircraft:sail` — **C** — wool reinforcement column added to the carpet+string sail — tear-resistant canvas.
- `immersive_aircraft:hull` — **C** — iron-block keel spine added between the plank/iron rows — load-bearing frame.
- `immersive_aircraft:hull_reinforcement` — **C** — TOP-TIER — 2 hulls + iron blocks + a Mechanical-Engineer mechanical drill (interlock).
- `immersive_aircraft:boiler` — **C** — blast-furnace firebox added under the copper shell (was hollow + furnace) — higher pressure.
- `immersive_aircraft:steel_boiler` — **C** — TOP-TIER — iron jacket + boiler + blast furnace + Mechanical drill (interlock).
- `immersive_aircraft:engine` — **C** — 4 pistons + iron base (was 2 pistons + cobble) around the boiler — real powerplant.
- `immersive_aircraft:eco_engine` — **C** — TOP-TIER — gold + slime BLOCKS + engine + Mechanical drill base (interlock).
- `immersive_aircraft:nether_engine` — **C** — POWERED TOP — blaze/netherite + engine + 2 Electrical motors + Mechanical drill (full interlock).
- `immersive_aircraft:gyroscope` — **C** — 4 comparators + 4 compasses around a gold core (was 1+2 flat) — precision instrument.
- `immersive_aircraft:gyroscope_hud` — **C** — gold ingots (was nuggets) + dual redstone lamps + sea-lantern backlight — bright HUD.
- `immersive_aircraft:gyroscope_dials` — **C** — iron+redstone instrument base row added under the clocks/gyro — calibrated dials.
- `immersive_aircraft:rotary_cannon` — **C** — POWERED TOP — iron frame + dispenser + gears + Electrical motors + Mechanical drill (full interlock).
- `immersive_aircraft:bomb_bay` — **C** — extra TNT cradle + iron-block floor (was 5 iron + 1 TNT) — armored ordnance bay.
- `immersive_aircraft:heavy_crossbow` — **C** — iron-spine stock + extra log brace (was crossbow+hook+1 log) — vehicle-mount weapon.
- `immersive_aircraft:telescope` — **C** — 4-copper barrel housing (was 1 copper) — long-range optic.
- `immersive_machinery:iron_drill` — **C** — industrial-gears head + iron-block + copper bushing (was plain iron+iron block) — driven bit.
- `immersive_machinery:diamond_drill` — **C** — replaces smithing upgrade with a full diamond-shell + gears over an iron drill — stays in-domain & harder.
- `immersive_machinery:netherite_drill` — **C** — TOP-TIER — netherite shell over the diamond drill + a Mechanical drill core (interlock; was smithing).
- `immersive_machinery:copperfin` — **C** — copper BLOCKS + tinted-glass hull + enhanced propeller (was loose copper/glass/propeller) — pressure sub.
- `immersive_machinery:tunnel_digger` — **C** — TOP-TIER — copper-block frame + drill + engine + gears + Mechanical drill (interlock; was iron blocks).
- `immersive_machinery:bamboo_bee` — **C** — built from in-domain Aero parts (hull+eco engine+enhanced props+gears+bamboo) instead of the Tinkerer redstone_mechanism — keeps Aero self-contained, much harder.

### Mechanical Engineer  (`cabacraft:eng_mechanical`)
_22 items — the 9 curated core tools + 13 major mid-tier machines. Self-contained hub (no other discipline needed); Create base mats (andesite alloy/casings/cogwheels/precision mechanism) stay OPEN; trains/rail stay craftable by all._


- `create:wrench` — **C** — precision-mechanism core + brass cheeks (was gold plates + cogwheel) — engineer's wrench.
- `create:goggles` — **C** — brass headband row added (was glass + gold only) — reinforced goggles.
- `create:schematic_table` — **C** — precision-mechanism drafting core added (was slabs + smooth stone) — engineer's table.
- `create:belt_connector` — **C** — shaft spindle core added (was 6 dried kelp) — tensioned belt.
- `create:empty_blaze_burner` — **C** — andesite-cased firebox base added (was open iron + netherrack) — sturdier burner.
- `create:mechanical_saw` — **C** — precision core + brass casing (was iron + andesite casing) — upgraded saw.
- `create:deployer` — **C** — brass casing + precision mechanism (was andesite casing + brass hand) — finer deployer.
- `create:mechanical_arm` — **C** — dual precision mechanisms + brass casings (was 1 precision + brass casing) — articulated arm.
- `create:mechanical_drill` — **C** — iron-block bit + brass casing (was iron ingot + andesite casing) — heavy drill; this is the Aero/IM interlock part.
- `create:mechanical_press` — **C** — brass casing (was andesite casing) — stronger press; this is the Electrical-tier interlock hub part.
- `create:mechanical_mixer` — **C** — brass casing + precision whisk core (was andesite casing + whisk).
- `create:millstone` — **C** — brass casing (was andesite casing) — heavier millstone.
- `create:crushing_wheel` — **C** — compact in-grid recipe with a precision core (replaces the 5×5 mechanical-crafting; harder per unit).
- `create:mechanical_piston` — **C** — brass casing (was andesite casing) — stronger piston.
- `create:encased_fan` — **C** — brass casing (was andesite casing) — encased fan.
- `create:gearbox` — **C** — brass casing core (was andesite casing).
- `create:clutch` — **C** — brass casing + redstone block (was andesite casing + shaft + redstone dust).
- `create:gearshift` — **C** — brass casing + redstone block (was andesite casing + cogwheel + redstone dust).
- `create:water_wheel` — **C** — andesite-alloy reinforced rim (was plain planks + shaft).
- `create:hand_crank` — **C** — extra andesite-alloy bracing (was planks + 1 alloy).
- `create:basin` — **C** — brass-reinforced floor (was open andesite alloy).
- `create:depot` — **C** — added brass casing (was alloy + andesite casing).

### Electrical Engineer  (`cabacraft:eng_electrical`)
_21 items — the FE power economy: generation, storage, transmission. Top tier (modular accumulator / tesla coil / portable energy interface) requires a Mechanical-Engineer press (hub interlock). Electrum ingots/sheets/rods stay OPEN as base alloy._


- `createaddition:copper_spool` — **C** — 8-copper winding on a shaft core (was a single rolling-mill pass) — in-grid spool.
- `createaddition:gold_spool` — **C** — 8-gold winding on a shaft core — in-grid spool.
- `createaddition:electrum_spool` — **C** — 8-electrum winding on a shaft core — in-grid spool.
- `createaddition:copper_wire` — **C** — drawn from 3 copper ingots (in-grid, harder than the rolling pass).
- `createaddition:gold_wire` — **C** — drawn from 3 gold ingots (in-grid).
- `createaddition:iron_wire` — **C** — drawn from 3 iron ingots (in-grid).
- `createaddition:electrum_wire` — **C** — drawn from 3 electrum ingots (in-grid).
- `createaddition:barbed_wire` — **C** — woven from 5 iron wires (was cheaper) — defensive barbed wire.
- `createaddition:connector` — **C** — brass-cased FE connector with spool + electron tube core.
- `createaddition:large_connector` — **C** — gold-spool, brass-cased high-throughput connector.
- `createaddition:small_light_connector` — **C** — glowstone + spool + brass casing — lighting connector.
- `createaddition:redstone_relay` — **C** — redstone-block switching + iron-plate base (was stone) — robust relay.
- `createaddition:capacitor` — **C** — brass-clad capacitor, redstone-block core (replaces the variant recipe; uniform & harder).
- `createaddition:accumulator` — **C** — iron-plate cased bank around a capacitor — accumulator.
- `createaddition:modular_accumulator` — **C** — TOP-TIER — accumulator bank + brass + a Mechanical-Engineer press (hub interlock).
- `createaddition:electric_motor` — **C** — in-grid shaped (replaces 5×4 mechanical-crafting) + capacitor core — the Aero/IM electrical interlock anchor.
- `createaddition:alternator` — **C** — in-grid shaped (replaces 5×4 mechanical-crafting) + capacitor core — generator.
- `createaddition:tesla_coil` — **C** — TOP-TIER — spools + capacitors + a Mechanical press base (hub interlock); in-grid (was mechanical-crafting).
- `createaddition:portable_energy_interface` — **C** — TOP-TIER — + a Mechanical press (hub interlock; was brass casing + chute + spool).
- `createaddition:rolling_mill` — **C** — brass casing (was andesite casing) — sturdier rolling mill.
- `createaddition:digital_adapter` — **C** — + a connector & electron tube (was wired modem + brass plate + torch) — keeps it in the FE domain.

### Mage  (`cabacraft:mage`)
_27 items — full Wizards novice/arcane/fire/frost wand·staff·robe lines + 3 spell books. Self-contained (combat class, no smith/engineer dependency). Exclusivity: all 24 base items already recipe-removed (WIZARD block, lines 327-350) and the 3 books (LIBRARIAN block, lines 14-16) — the class recipe is the sole source; no remove_recipes change needed. Netherite/crystal/ruby/smaragdant variants intentionally remain vanilla-smithing upgrades from these bases (sell-foundations principle)._

- `wizards:wand_novice` — **C** — coal-BLOCK focus + gold collar on a two-stick haft (was 1 coal + 1 stick) — apprentice's wand.
- `wizards:wand_arcane` — **C** — ender-pearl crown + 3 amethyst + gold ferrules (was 1 amethyst+1 gold) — arcane focus.
- `wizards:wand_fire` — **C** — blaze-rod core + 2 blaze powder + gold (was 1 gunpowder+1 gold) — flame focus.
- `wizards:wand_frost` — **C** — iron-block head + prismarine-crystal core (was 1 snowball+1 iron) — frost focus.
- `wizards:staff_wizard` — **C** — quartz-BLOCK resonators down the shaft (was 1 quartz + 2 sticks) — wizard staff.
- `wizards:staff_arcane` — **C** — ender-pearl tip + 4 amethyst lattice + gold-block butt (was loose pearl/amethyst/gold) — arcane staff.
- `wizards:staff_fire` — **C** — blaze rod+powder tip + nether-brick spine + gold-block butt (was nether brick/blaze powder) — fire staff.
- `wizards:staff_frost` — **C** — prismarine crystal+shard tip + iron-block spine (was snowball/iron ingot) — frost staff.
- `wizards:wizard_robe_head` — **C** — Wizard: gilded hood + lapis_block core (was loose reagent + wool) — woven cowl.
- `wizards:wizard_robe_chest` — **C** — Wizard: lapis_block mantle + gilded hem (was loose reagent + wool) — enchanted robe.
- `wizards:wizard_robe_legs` — **C** — Wizard: lapis_block weave waistband (was loose reagent + wool) — robe leggings.
- `wizards:wizard_robe_feet` — **C** — Wizard: lapis_block-soled, gilded (was loose reagent + wool) — robe boots.
- `wizards:arcane_robe_head` — **C** — Arcane: gilded hood + amethyst_block core (was loose reagent + wool) — woven cowl.
- `wizards:arcane_robe_chest` — **C** — Arcane: amethyst_block mantle + gilded hem (was loose reagent + wool) — enchanted robe.
- `wizards:arcane_robe_legs` — **C** — Arcane: amethyst_block weave waistband (was loose reagent + wool) — robe leggings.
- `wizards:arcane_robe_feet` — **C** — Arcane: amethyst_block-soled, gilded (was loose reagent + wool) — robe boots.
- `wizards:fire_robe_head` — **C** — Fire: gilded hood + magma_block core (was loose reagent + wool) — woven cowl.
- `wizards:fire_robe_chest` — **C** — Fire: magma_block mantle + gilded hem (was loose reagent + wool) — enchanted robe.
- `wizards:fire_robe_legs` — **C** — Fire: magma_block weave waistband (was loose reagent + wool) — robe leggings.
- `wizards:fire_robe_feet` — **C** — Fire: magma_block-soled, gilded (was loose reagent + wool) — robe boots.
- `wizards:frost_robe_head` — **C** — Frost: gilded hood + prismarine_bricks core (was loose reagent + wool) — woven cowl.
- `wizards:frost_robe_chest` — **C** — Frost: prismarine_bricks mantle + gilded hem (was loose reagent + wool) — enchanted robe.
- `wizards:frost_robe_legs` — **C** — Frost: prismarine_bricks weave waistband (was loose reagent + wool) — robe leggings.
- `wizards:frost_robe_feet` — **C** — Frost: prismarine_bricks-soled, gilded (was loose reagent + wool) — robe boots.
- `wizards:arcane_spell_book` — **C** — no original recipe — new themed: echo-shard & amethyst bound around an enchanted book.
- `wizards:fire_spell_book` — **C** — no original recipe — new themed: blaze rods & powder bound around an enchanted book.
- `wizards:frost_spell_book` — **C** — no original recipe — new themed: blue ice & prismarine crystals bound around an enchanted book.

_Exclusivity verified: every item ∈ remove_recipes.js.js already; origins:recipe is power-local so survives the removal._

### Monk  (`cabacraft:monk`)
_30 items — Bishop block (paladin/crusader plate, AOTA holy armor, holy & diamond-holy staves) + Priest block (acolyte/holy/diamond-holy wands, priest & prior robes, 3 magnum torches) + paladin/priest spell books. Self-contained (combat class). Holy theme: gold-block, glowstone, totem-of-undying, diamond. Netherite/ruby paladin variants stay vanilla-smithing upgrades._

- `paladins:paladin_armor_head` — **C** — gold-light crest + copper band added (was copper+iron only) — blessed helm.
- `paladins:paladin_armor_chest` — **C** — gold-block pauldrons over the iron cuirass (was copper+iron+leather) — blessed cuirass.
- `paladins:paladin_armor_legs` — **C** — gold-reinforced thigh band (was copper+iron) — blessed greaves.
- `paladins:paladin_armor_feet` — **C** — gold-capped, iron-soled (was copper+iron) — blessed sabatons.
- `paladins:crusader_armor_head` — **C** — gold-block + diamond brow added to the ghast-tear crown (was gold/tear/iron) — crusader helm.
- `paladins:crusader_armor_chest` — **C** — gold-block shoulders + diamond hem (was gold/tear/iron/leather) — crusader cuirass.
- `paladins:crusader_armor_legs` — **C** — gold-block + diamond knee reinforcement (was gold/tear/iron) — crusader greaves.
- `paladins:crusader_armor_feet` — **C** — gold-block + diamond sole (was gold/tear/iron) — crusader sabatons.
- `paladins:holy_staff` — **C** — gold-block & glowstone head on a totem-anchored haft (was loose gold+iron) — holy staff.
- `paladins:diamond_holy_staff` — **C** — diamond-block & glowstone head, totem anchor (was loose diamond+iron) — diamond holy staff.
- `paladins:acolyte_wand` — **C** — glowstone focus crown (was string+sticks only) — acolyte's wand.
- `paladins:holy_wand` — **C** — gold-block & glowstone head on an iron haft (was 1 gold+1 iron) — holy wand.
- `paladins:diamond_holy_wand` — **C** — diamond-block & glowstone head, iron-block haft (was 1 diamond+1 iron) — diamond holy wand.
- `paladins:priest_robe_head` — **C** — chainmail-lined, gold-trimmed (was plain chain+wool) — priest robe head.
- `paladins:priest_robe_chest` — **C** — chainmail-lined, gold-trimmed (was plain chain+wool) — priest robe chest.
- `paladins:priest_robe_legs` — **C** — chainmail-lined, gold-trimmed (was plain chain+wool) — priest robe legs.
- `paladins:priest_robe_feet` — **C** — chainmail-lined, gold-trimmed (was plain chain+wool) — priest robe feet.
- `paladins:prior_robe_head` — **C** — extra gold + ghast-tear blessing (was loose gold/tear+wool) — prior robe head.
- `paladins:prior_robe_chest` — **C** — extra gold + ghast-tear blessing (was loose gold/tear+wool) — prior robe chest.
- `paladins:prior_robe_legs` — **C** — extra gold + ghast-tear blessing (was loose gold/tear+wool) — prior robe legs.
- `paladins:prior_robe_feet` — **C** — extra gold + ghast-tear blessing (was loose gold/tear+wool) — prior robe feet.
- `armoroftheages:holy_armor_head` — **C** — totem-sanctified, gold-block base (was netherite helmet+gold block) — radiant holy helm.
- `armoroftheages:holy_armor_chest` — **C** — totem core + iron-block backing (was netherite chest+gold/iron block) — radiant holy cuirass.
- `armoroftheages:holy_armor_legs` — **C** — totem-blessed (was netherite legs+iron/gold block) — radiant holy greaves.
- `armoroftheages:holy_armor_feet` — **C** — gold-block & totem soled (was netherite boots+iron) — radiant holy sabatons.
- `magnumtorch:diamond_magnum_torch` — **C** — gold-block frame + totem ward (was gold ingot+fire charge) — diamond magnum torch.
- `magnumtorch:emerald_magnum_torch` — **C** — gold-block frame + totem ward (was gold ingot+fire charge) — emerald magnum torch.
- `magnumtorch:amethyst_magnum_torch` — **C** — gold-block frame + totem ward (was gold ingot+fire charge) — amethyst magnum torch.
- `paladins:paladin_spell_book` — **C** — no original recipe — new themed: gold-block & totems bound around an enchanted book.
- `paladins:priest_spell_book` — **C** — no original recipe — new themed: gold & glowstone bound around an enchanted book.

_Exclusivity verified: all 34 ∈ remove_recipes.js.js already (BISHOP 37-50, PRIEST 53-66, books 10-11) — class recipe is sole source; no remove_recipes change._

### Warrior  (`cabacraft:warrior`)
_9 items — Rogues warrior & berserker armor + warrior spell book. Self-contained (combat class). Lean catalogue by design (combat classes balanced among themselves). Netherite warrior/berserker variants stay vanilla-smithing upgrades._

- `rogues:warrior_armor_head` — **C** — iron-block crown + chain lining (was iron+leather) — warrior helm.
- `rogues:warrior_armor_chest` — **C** — iron-block plastron + chain pauldrons (was string/iron/leather) — warrior cuirass.
- `rogues:warrior_armor_legs` — **C** — iron-block belt + chain knees (was iron+leather) — warrior greaves.
- `rogues:warrior_armor_feet` — **C** — double iron + chain heel (was iron+leather) — warrior boots.
- `rogues:berserker_armor_head` — **C** — netherite-ingot reinforced (was scrap+chain) — berserker helm.
- `rogues:berserker_armor_chest` — **C** — netherite-ingot torso (was scrap+chain+leather) — berserker cuirass.
- `rogues:berserker_armor_legs` — **C** — netherite-ingot waist (was scrap+chain) — berserker greaves.
- `rogues:berserker_armor_feet` — **C** — netherite-ingot soled (was scrap+chain) — berserker boots.
- `rogues:warrior_spell_book` — **C** — no original recipe — new themed: iron-block, goat horns & netherite around an enchanted book.

_Exclusivity verified: all 9 ∈ remove_recipes.js.js already (warrior/berserker 409-416, book 13) — no remove_recipes change._

### Ranger  (`cabacraft:ranger`)
_23 items — all Archers base bows (composite/crystal long & short/mechanic/royal), crossbows (heavy/rapid), spears (flint/iron/gold/diamond/aeternium) + archer & ranger armor + auto_fire_hook + supplementaries quiver + archer spell book. Self-contained. Netherite/ruby weapon variants stay vanilla-smithing upgrades._

- `archers:composite_longbow` — **C** — twin-bone laminate limbs + tensioner core (was 2 stick/1 bone) — composite longbow.
- `archers:crystal_longbow` — **C** — doubled aeternium spine (was 1 aeternium) under the crystal limbs — crystal longbow.
- `archers:crystal_shortbow` — **C** — doubled aeternium spine + full crystal limbs (was 1 aeternium/2 crystal) — crystal shortbow.
- `archers:mechanic_shortbow` — **C** — iron-and-redstone geared limbs (was 2 iron/1 redstone) — mechanic shortbow.
- `archers:royal_longbow` — **C** — gold-block riser + extra diamond inlay (was loose gold/diamond) — royal longbow.
- `archers:heavy_crossbow` — **C** — iron-braced heavy stock added (was planks/diamond/hook) — heavy crossbow.
- `archers:rapid_crossbow` — **C** — iron-and-redstone autoloader (was stick/redstone/hook) — rapid crossbow.
- `archers:flint_spear` — **C** — reinforced socket + double haft (was 1 head/2 stick) — flint spear.
- `archers:iron_spear` — **C** — reinforced socket + double haft (was 1 head/2 stick) — iron spear.
- `archers:golden_spear` — **C** — reinforced socket + double haft (was 1 head/2 stick) — golden spear.
- `archers:diamond_spear` — **C** — reinforced socket + double haft (was 1 head/2 stick) — diamond spear.
- `archers:aeternium_spear` — **C** — reinforced socket + double haft (was 1 head/2 stick) — aeternium spear.
- `archers:archer_armor_head` — **C** — chain-reinforced (was thin leather+chain) — archer head.
- `archers:archer_armor_chest` — **C** — chain-reinforced (was thin leather+chain) — archer chest.
- `archers:archer_armor_legs` — **C** — chain-reinforced (was thin leather+chain) — archer legs.
- `archers:archer_armor_feet` — **C** — chain-reinforced (was thin leather+chain) — archer feet.
- `archers:ranger_armor_head` — **C** — extra scute plating (was scute/leather/rabbit-hide) — ranger head.
- `archers:ranger_armor_chest` — **C** — extra scute plating (was scute/leather/rabbit-hide) — ranger chest.
- `archers:ranger_armor_legs` — **C** — extra scute plating (was scute/leather/rabbit-hide) — ranger legs.
- `archers:ranger_armor_feet` — **C** — extra scute plating (was scute/leather/rabbit-hide) — ranger feet.
- `archers:auto_fire_hook` — **C** — extra copper housing + redstone clockwork (was 2 copper/1 iron/1 redstone) — auto-fire hook.
- `supplementaries:quiver` — **C** — no craftable original (removed) — new themed: stitched leather pouch with bowstring & arrow.
- `archers:archer_spell_book` — **C** — no original recipe — new themed: feathers, bone & string bound around an enchanted book.

_Exclusivity: armor/auto_fire_hook/quiver already removed (ARCHER block); archer_spell_book line 9. The 12 base weapons had LIVE recipes — added to the ARCHER block here so the class recipe is the sole source._

### Rogue  (`cabacraft:rogue`)
_15 items — Rogues rogue & assassin armor + rogue spell book + its paired fantasy gear (grave_sentinel set + cursed_blade + crimson_reaper). Self-contained (combat class). Shadow theme: phantom membrane, sculk, ink; grave theme: netherite/soul-soil/bone-block/wither-rose. Netherite rogue/assassin variants stay vanilla-smithing upgrades._

- `rogues:rogue_armor_head` — **C** — phantom-membrane shadow cowl + sculk-vein dye (was red dye+wool) — rogue hood.
- `rogues:rogue_armor_chest` — **C** — phantom-membrane lining over the leather (was wool+leather) — rogue jerkin.
- `rogues:rogue_armor_legs` — **C** — phantom-membrane reinforced (was wool+leather) — rogue leggings.
- `rogues:rogue_armor_feet` — **C** — phantom-membrane soled, silent (was wool+leather) — rogue boots.
- `rogues:assassin_armor_head` — **C** — sculk-darkened hood (was ink/gold/rabbit-hide) — assassin mask.
- `rogues:assassin_armor_chest` — **C** — netherite-scrap edged, sculk-lined (was ink/gold/rabbit-hide) — assassin coat.
- `rogues:assassin_armor_legs` — **C** — sculk-woven (was ink/gold/rabbit-hide) — assassin leggings.
- `rogues:assassin_armor_feet` — **C** — sculk-soled, soundless (was ink/gold/rabbit-hide) — assassin boots.
- `rogues:rogue_spell_book` — **C** — no original recipe — new themed: ink & sculk bound around an enchanted book.
- `fantasy_armor:grave_sentinel_helmet` — **C** — recipe-removed original — new grave theme: netherite + soul-soil + bone-block + wither rose — grave-sentinel helmet.
- `fantasy_armor:grave_sentinel_chestplate` — **C** — recipe-removed original — new grave theme: netherite + soul-soil + bone-block + wither rose — grave-sentinel chestplate.
- `fantasy_armor:grave_sentinel_leggings` — **C** — recipe-removed original — new grave theme: netherite + soul-soil + bone-block + wither rose — grave-sentinel leggings.
- `fantasy_armor:grave_sentinel_boots` — **C** — recipe-removed original — new grave theme: netherite + soul-soil + bone-block + wither rose — grave-sentinel boots.
- `fantasy_weapons:weapon_cursed_blade` — **C** — recipe-removed original — new themed: wither-rose tip, netherite edge, wither-skull pommel — cursed blade.
- `fantasy_weapons:weapon_crimson_reaper` — **C** — recipe-removed original — new themed: redstone-block (blood) + netherite scythe head + wither rose — crimson reaper.

_Exclusivity verified: all 15 ∈ remove_recipes.js.js already (rogue/assassin 354-361, book 12, grave_sentinel+blades 375-380) — class recipe is sole source; no remove_recipes change._

### Armorer  (`cabacraft:armorer`)
_19 items — generic plate core (AOTA iron_plate, immersive_armors Heavy & 'Viking', paladins iron/gold/diamond kite shields = 15) + lady_maria (4, partition-named pirate plate). Forged-plate theme: iron/netherite-scrap._

> **CORRECTION (Phase 4):** fog_guard / old_knight / dragonslayer / spark_of_dawn (16 recipes) were moved OUT of Armorer to the **Knight faction** regalia (locked faction design assigns those + silver_knight to the Knight order). Their 16 `armorer/*` power files were deleted; see the Faction & Office Regalia section for the authoritative, scoreboard-gated Knight recipes. The four `fog_guard/old_knight/dragonslayer/spark_of_dawn` lines listed below are superseded by that section._

- `armoroftheages:iron_plate_armor_head` — **C** — netherite-scrap brow added over the iron-helmet core (was iron block+helmet) — forged plate helm.
- `armoroftheages:iron_plate_armor_chest` — **C** — netherite-scrap heart-plate (was iron block+chestplate) — forged plate cuirass.
- `armoroftheages:iron_plate_armor_legs` — **C** — netherite-scrap girdle (was iron block+leggings+wool) — forged plate greaves.
- `armoroftheages:iron_plate_armor_feet` — **C** — netherite-scrap soled (was iron block+boots) — forged plate sabatons.
- `immersive_armors:heavy_helmet` — **C** — netherite-scrap rivet added (was iron block+ingot) — heavy helmet.
- `immersive_armors:heavy_chestplate` — **C** — netherite-scrap rivet added (was iron block+ingot) — heavy chestplate.
- `immersive_armors:heavy_leggings` — **C** — netherite-scrap rivet added (was iron block+ingot) — heavy leggings.
- `immersive_armors:heavy_boots` — **C** — netherite-scrap rivet added (was iron block+ingot) — heavy boots.
- `immersive_armors:warrior_helmet` — **C** — chain-mail lining + bone-block trim (was leather piece+iron+bone) — Viking helmet.
- `immersive_armors:warrior_chestplate` — **C** — chain-mail lining + bone-block trim (was leather piece+iron+bone) — Viking chestplate.
- `immersive_armors:warrior_leggings` — **C** — chain-mail lining + bone-block trim (was leather piece+iron+bone) — Viking leggings.
- `immersive_armors:warrior_boots` — **C** — chain-mail lining + bone-block trim (was leather piece+iron+bone) — Viking boots.
- `paladins:iron_kite_shield` — **C** — iron-block boss reinforcing the rim (was iron ingot+leather) — iron kite shield.
- `paladins:golden_kite_shield` — **C** — gold-block boss reinforcing the rim (was gold ingot+leather) — gold kite shield.
- `paladins:diamond_kite_shield` — **C** — diamond-block boss reinforcing the rim (was diamond ingot+leather) — diamond kite shield.
- `fantasy_armor:lady_maria_helmet` — **C** — recipe-removed original — new corsair-noble theme (iron_block/gold_ingot/red_wool) — lady maria helmet.
- `fantasy_armor:lady_maria_chestplate` — **C** — recipe-removed original — new corsair-noble theme (iron_block/gold_ingot/red_wool) — lady maria chestplate.
- `fantasy_armor:lady_maria_leggings` — **C** — recipe-removed original — new corsair-noble theme (iron_block/gold_ingot/red_wool) — lady maria leggings.
- `fantasy_armor:lady_maria_boots` — **C** — recipe-removed original — new corsair-noble theme (iron_block/gold_ingot/red_wool) — lady maria boots.

_Boundary (defensible & flagged for the faction pass): office/faction regalia (gilded_hunt→Treasurer, crucible_knight→Judge, hero→Chancellor, Desert/Island/Knight leader sets), the boss-relic tier (malenia/ornstein/redeemer/twinned/sunset_wings/silver_knight/flesh_of_the_feaster/dead_gladiator), trader-theme sets (ronin/golden_*/eclipse_soldier), and the parked dark cluster are intentionally NOT Armorer — they belong to the faction/office pass or stay parked._
_Exclusivity verified: all 35 ∈ remove_recipes.js.js already (ARMORER + adjacent fantasy TBD blocks) — no remove_recipes change._

### Blacksmith  (`cabacraft:blacksmith`)
_25 items — generic iron/gold/diamond melee (paladins claymore·mace·great_hammer + rogues dagger·double_axe·glaive·sickle = 21) + the 4 un-paired fantasy blades that travel with Armorer's fantasy sets (pirate cutlass, fog_guard sword, dragonslayer halberd, spark_of_dawn polearm). Forge theme: metal-block heads + chain-wrapped hafts. Wooden/stone/flint base tiers stay normally craftable; netherite/aeternium/ruby stay vanilla-smithing upgrades; dark_cover_sword stays parked._

- `paladins:iron_claymore` — **C** — iron-block forte + chain-wrapped grip (was iron ingot + stick) — iron claymore.
- `paladins:iron_mace` — **C** — iron-block head + chain haft (was iron ingot + stick) — iron mace.
- `paladins:iron_great_hammer` — **C** — iron-block hammerhead + chain haft (was iron ingot + stick) — iron great hammer.
- `paladins:golden_claymore` — **C** — gold-block forte + chain-wrapped grip (was gold ingot + stick) — golden claymore.
- `paladins:golden_mace` — **C** — gold-block head + chain haft (was gold ingot + stick) — golden mace.
- `paladins:golden_great_hammer` — **C** — gold-block hammerhead + chain haft (was gold ingot + stick) — golden great hammer.
- `paladins:diamond_claymore` — **C** — diamond-block forte + chain-wrapped grip (was diamond ingot + stick) — diamond claymore.
- `paladins:diamond_mace` — **C** — diamond-block head + chain haft (was diamond ingot + stick) — diamond mace.
- `paladins:diamond_great_hammer` — **C** — diamond-block hammerhead + chain haft (was diamond ingot + stick) — diamond great hammer.
- `rogues:iron_dagger` — **C** — iron-block blade + tang (was iron ingot+stick) — iron dagger.
- `rogues:iron_double_axe` — **C** — iron-block twin heads + chain-bound haft (was iron ingot+stick) — iron double axe.
- `rogues:iron_glaive` — **C** — iron-block blade + reinforced pole (was iron ingot+stick) — iron glaive.
- `rogues:iron_sickle` — **C** — iron-block hooked blade + chain grip (was iron ingot+stick) — iron sickle.
- `rogues:golden_dagger` — **C** — gold-block blade + tang (was gold ingot+stick) — golden dagger.
- `rogues:golden_double_axe` — **C** — gold-block twin heads + chain-bound haft (was gold ingot+stick) — golden double axe.
- `rogues:golden_glaive` — **C** — gold-block blade + reinforced pole (was gold ingot+stick) — golden glaive.
- `rogues:golden_sickle` — **C** — gold-block hooked blade + chain grip (was gold ingot+stick) — golden sickle.
- `rogues:diamond_dagger` — **C** — diamond-block blade + tang (was diamond ingot+stick) — diamond dagger.
- `rogues:diamond_double_axe` — **C** — diamond-block twin heads + chain-bound haft (was diamond ingot+stick) — diamond double axe.
- `rogues:diamond_glaive` — **C** — diamond-block blade + reinforced pole (was diamond ingot+stick) — diamond glaive.
- `rogues:diamond_sickle` — **C** — diamond-block hooked blade + chain grip (was diamond ingot+stick) — diamond sickle.
- `fantasy_weapons:weapon_sharp_curved_sword` — **C** — recipe-removed original — new corsair theme: netherite-scrap edge, gold filigree, iron-block spine — pirate cutlass.
- `fantasy_weapons:weapon_fog_guard_sword` — **C** — recipe-removed original — new misty-knight theme (prismarine/iron-block), matches the fog_guard set — fog-guard sword.
- `fantasy_weapons:weapon_dragonslayer_halberd` — **C** — recipe-removed original — new dragonslayer theme (netherite/diamond/obsidian), matches the set — dragonslayer halberd.
- `fantasy_weapons:weapon_spark_of_dawn_polearm` — **C** — recipe-removed original — new radiant-dawn theme (gold-block/glowstone/diamond), matches the set — spark-of-dawn polearm.

_Exclusivity: the 4 fantasy blades already removed (lines 395, 452-454). The 21 paladins/rogues generic melee had LIVE recipes — added to the BLACKSMITH block here so the class recipe is the sole source._

### Tinkerer  (`cabacraft:tinkerer`)  — secondary, functional (HARD)
_16 tech gadgets. Internal-consistency gate: every gadget is built around an immersive_machinery redstone_mechanism (itself Tinkerer-gated & block-tier hardened) — a real extra step, not just cost. extendo_grip & redstone_mechanism reshaped to in-grid harder recipes. All trader-shortcut still sells them._

- `immersive_machinery:redstone_mechanism` — **C** — redstone & copper BLOCK tier (was loose redstone/copper) — the Tinkerer's core component.
- `immersive_machinery:redstone_sheep` — **C** — twin redstone-mechanism drive (was 1) + copper-block frame — automated shearer.
- `create:extendo_grip` — **C** — redstone-mechanism actuator (replaces the 5x5 mechanical-crafting; in-grid + harder) — extendo grip.
- `tide:pocket_watch` — **C** — no original crafting recipe — new gadget theme (gilded clockwork); built around a redstone-mechanism core.
- `tide:depth_meter` — **C** — no original crafting recipe — new gadget theme (pressure gauge); built around a redstone-mechanism core.
- `tide:climate_gauge` — **C** — no original crafting recipe — new gadget theme (barometric gauge); built around a redstone-mechanism core.
- `tide:weather_radio` — **C** — no original crafting recipe — new gadget theme (radio set); built around a redstone-mechanism core.
- `tide:lunar_calendar` — **C** — no original crafting recipe — new gadget theme (lunar dial); built around a redstone-mechanism core.
- `supplementaries:altimeter` — **C** — no original crafting recipe — new gadget theme (aneroid altimeter); built around a redstone-mechanism core.
- `supplementaries:wrench` — **C** — no original crafting recipe — new gadget theme (engineer's wrench); built around a redstone-mechanism core.
- `supplementaries:rope_arrow` — **C** — no original crafting recipe — new gadget theme (grapple arrow); built around a redstone-mechanism core.
- `supplementaries:spring_launcher` — **C** — no original crafting recipe — new gadget theme (spring launcher); built around a redstone-mechanism core.
- `exposure:camera` — **C** — no original crafting recipe — new gadget theme (plate camera); built around a redstone-mechanism core.
- `exposure:black_and_white_film` — **C** — no original crafting recipe — new gadget theme (B&W film roll); built around a redstone-mechanism core.
- `exposure:color_film` — **C** — no original crafting recipe — new gadget theme (colour film roll); built around a redstone-mechanism core.
- `slide_show:projector` — **C** — no original crafting recipe — new gadget theme (slide projector); built around a redstone-mechanism core.

_Exclusivity verified: all 16 ∈ remove_recipes.js.js TINKERER block already — class recipe is sole source; no remove_recipes change._

### Gunsmith  (`cabacraft:gunsmith`)  — secondary, functional (HARD)
_5 firearms/ammo: flintlock pistol, musket, blunderbuss, cartridge, musket upgrade smithing template. New firearm theme (iron-block breech/barrel + gunpowder seat). Bayonet/scope musket variants stay player-smithed from the upgrade template (sell-foundations)._

- `musketmod:pistol` — **C** — no original recipe — new firearm theme: iron-block breech + powder seat — flintlock pistol.
- `musketmod:musket` — **C** — no original recipe — new firearm theme: long iron-block barrel + powder seat — musket.
- `musketmod:blunderbuss` — **C** — no original recipe — new firearm theme: flared iron-block bore + powder seat — blunderbuss.
- `musketmod:cartridge` — **C** — no original recipe — new theme: paper-wrapped powder & iron-nugget shot — cartridge (count 4).
- `musketmod:musket_upgrade_smithing_template` — **C** — no original recipe — new theme: gilded etched template over an iron-block die — musket upgrade template.

_Exclusivity verified: all 5 ∈ remove_recipes.js.js ARMS_MERCHANT block already — class recipe is sole source; no remove_recipes change._

### Fisher  (`cabacraft:fisher`)  — secondary, **reverted per user (2026-05-19)**

_44 reverted to mod-original (**U**) + 2 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `tide:stone_fishing_rod` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:iron_fishing_rod` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `tide:golden_fishing_rod` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `tide:fishing_line` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:braided_line` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:golden_line` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:reinforced_line` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:fishing_hook` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:iron_fishing_hook` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:lavaproof_fishing_hook` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:void_fishing_hook` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:fish_satchel` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:fish_display` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:white_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:black_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:blue_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:brown_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:cyan_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:gray_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:green_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:light_blue_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:light_gray_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:lime_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:magenta_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:orange_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:pink_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:purple_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:red_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:yellow_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:golden_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:iron_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:diamond_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:netherite_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:amethyst_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:echo_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:pearl_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:chorus_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:apple_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:golden_apple_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:enchanted_golden_apple_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:feather_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:duck_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:grassy_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:lichen_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:heart_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:nautilus_fishing_bobber` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
### Brewer  (`cabacraft:brewer`)  — secondary, **reverted per user (2026-05-19)**

_7 reverted to mod-original (**U**) + 52 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `brewinandchewin:beer` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:beer_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:bloody_mary` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:bloody_mary_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:cheesy_pasta` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:cocoa_fudge` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:creamy_onion_soup` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:dread_nog` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:dread_nog_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:egg_grog` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:egg_grog_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:fermentation_controller` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:fiery_fondue` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:fiery_fondue_pot` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:flaxen_cheese_wedge` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:flaxen_cheese_wheel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:glittering_grenadine` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:glittering_grenadine_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:ham_and_cheese_sandwich` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:horror_lasagna` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:item_coaster` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:jerky` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:keg` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:kimchi` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:kippers` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:kombucha` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:kombucha_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:mead` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:mead_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:pale_jane` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:pale_jane_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:pickled_pickles` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:pizza` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:pizza_slice` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:quiche` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:quiche_slice` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:red_rum` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:red_rum_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:rice_wine` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:rice_wine_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:saccharine_rum` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:saccharine_rum_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:salty_folly` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:salty_folly_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:scarlet_cheese_wedge` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:scarlet_cheese_wheel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:scarlet_pierogies` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:steel_toe_stout` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:steel_toe_stout_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:strongroot_ale` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:strongrot_ale_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:tankard` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `brewinandchewin:unripe_flaxen_cheese_wheel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:unripe_scarlet_cheese_wheel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:vegetable_omelet` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:vodka` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:vodka_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:withering_dross` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `brewinandchewin:withering_dross_tankard` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
### Bard  (`cabacraft:bard`)  — secondary, **reverted per user (2026-05-19)**

_15 reverted to mod-original (**U**) + 12 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `immersive_melodies:bagpipe` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:didgeridoo` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:ender_bass` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:flute` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:handpan` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:lute` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:piano` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:tiny_drum` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:triangle` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:trumpet` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `immersive_melodies:vielle` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `chessmod:chess_piece` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `chessmod:board_block` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `xercapaint:item_canvas` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `tide:fishing_journal` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `fantasy_armor:chess_board_knight_helmet` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `fantasy_armor:chess_board_knight_chestplate` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `fantasy_armor:chess_board_knight_leggings` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `fantasy_armor:chess_board_knight_boots` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `fantasy_weapons:weapon_chess_board_knight_polearm` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `xercapaint:item_canvas_long` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `xercapaint:item_canvas_tall` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `xercapaint:item_canvas_large` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `xercapaint:item_easel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `xercapaint:item_palette` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `patchouli:guide_book` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:music_disc_jam` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
### Tailor  (`cabacraft:tailor`)  — secondary, **reverted per user (2026-05-19)**

_0 reverted to mod-original (**U**) + 28 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `accents:bandolier` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:cakeman_plushie` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:captain_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:christmas_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:cowboy_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:crown` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:dragon_skull` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:hermes_boots` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:holstered_belt` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:horns` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:item_satchel` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:kasa_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:king_mask` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:overtop_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:pickelhaube` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:pirate_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:pumpkin_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:quiver` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:scarf` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:sewing_kit` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:sheathed_katana` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:skull` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:sombrero` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:straw_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:top_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:tundra_hood` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:wide_brim_hat` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `accents:wings` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
### Decorator  (`cabacraft:decorator`)  — secondary, **reverted per user (2026-05-19)**

_79 reverted to mod-original (**U**) + 10 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `wallpapers:acorn_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:action_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:amber_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:amber_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:aqua_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:artichoke_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:ash_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:banana_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:beige_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:black_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:blue_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:bricks_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:brown_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:cerulean_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:clouds_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:coral_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:cozy_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:creeper_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:cyan_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:floral_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:forest_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:frosted_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:fuchsia_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:ginger_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:grape_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:gray_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:green_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:indigo_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:indigo_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:light_blue_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:light_gray_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:lime_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:magenta_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:maroon_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:maroon_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:mauve_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:mint_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:mint_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:mold_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:navy_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:navy_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:oasis_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:ocean_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:olive_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:orange_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:peach_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:periwinkle_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:pineapple_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:pink_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:purple_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:red_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:rose_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:sage_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:sap_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:shamrock_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:show_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:slate_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:stars_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:tan_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:teal_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:velvet_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:verdant_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:vermilion_wallpaper_roll_dma` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:white_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:wifi_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:yellow_wallpaper_roll` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:andesite_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:blackstone_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:calcite_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:dark_prismarine_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:deepslate_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:diorite_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:dripstone_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:gold_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:granite_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:prismarine_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:quartz_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:stone_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `wallpapers:tuff_skirting_board` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `minecells:kings_crest_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `minecells:torn_kings_crest_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `minecells:black_bridge_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `minecells:insufferable_crypt_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `minecells:promenade_of_the_condemned_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `minecells:ramparts_flag` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `wallpapers:broken_quartz_skirting_board` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `wallpapers:primary_wallpaper_roll` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `wallpapers:ultimate_wallpaper_roll` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `wallpapers:ultra_ultimate_wallpaper_roll` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
### Herbalist  (`cabacraft:herbalist`)  — secondary, **reverted per user (2026-05-19)**

_47 reverted to mod-original (**U**) + 10 simple-fallback (**C** — no 3×3 original existed). Class-gate is the only delta on **U** entries._

- `nirvana:black_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:black_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:bliss_bloom` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:blue_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:blue_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:bong` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:brown_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:brown_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:cyan_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:cyan_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:deerstalker` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:gray_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:gray_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:green_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:green_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:hemp` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:hemp_cloth` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:hemp_crate` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:hemp_seeds` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:herbal_salve` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:joint` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:light_blue_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:light_blue_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:light_gray_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:light_gray_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:lime_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:lime_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:magenta_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:magenta_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:old_pipe` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:orange_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:orange_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:peace_banner_pattern` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:pink_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:pink_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:potion_bong` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:potted_wild_hemp` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:purple_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:purple_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:red_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:red_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:reefer_head` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:reefer_spawn_egg` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:stuffed_pipe` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:suspicious_pipe` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:thc` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:thc_minecart` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:weed` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:weed_brownie` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:weed_crate` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:white_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:white_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:wild_hemp` — **C** — no mod 3×3 original (mod uses non-grid serializer / sewing / fermenting / etc.) — simple vanilla-tier class recipe.
- `nirvana:woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:yellow_hemp_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
- `nirvana:yellow_woven_burlap` — **U** — mod-original 3×3 recipe retained; class-gate is the only change.
### Faction & Office Regalia  (`cabacraft:citizen`, civic layer)
_135 ultra-hard signature recipes — the hardest in the pack. Delivered on the always-on auto-chosen Citizen origin; each carries a verified Apoli `condition: apoli:scoreboard` so it is craftable ONLY while the player's `cabacraft_faction` / `cabacraft_office_*` score matches (i.e. they are the FTB-party owner of that set-in-stone faction, or hold that office). Untraded — these clusters were pulled from all traders and are recipe-removed/parked, so the conditioned class recipe is the sole source. Ultra-hard rule: fixed signature lattice of cluster-identity blocks around a netherite/nether-star core._


**Desert faction  —  condition: cabacraft_faction == 1  (FTB party owner of the Desert faction)**

- `armoroftheages:pharaoh_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:pharaoh_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:pharaoh_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:pharaoh_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:anubis_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:anubis_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:anubis_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:anubis_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:exalted_aurum_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:exalted_aurum_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:exalted_aurum_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:exalted_aurum_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:quetzalcoatl_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:quetzalcoatl_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:quetzalcoatl_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:quetzalcoatl_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:centurion_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:centurion_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:centurion_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `armoroftheages:centurion_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_horns_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_horns_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_horns_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_horns_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_execution_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_execution_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_execution_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:golden_execution_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:eclipse_soldier_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:eclipse_soldier_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:eclipse_soldier_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_armor:eclipse_soldier_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_desert_wind` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_golden_halberd` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_marika_hammer` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_golden_horns_battleaxe` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_golden_execution_battleaxe` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_kingslayer` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_hefty_club` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_old_blade` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_old_broadsword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_old_dagger` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_sharp_sword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_savage_sword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_sharp_spear` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_savage_spear` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_savage_hammer` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).
- `fantasy_weapons:weapon_eclipse_soldier_spear` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 1`).

**Island faction  —  condition: cabacraft_faction == 2  (FTB party owner of the Island faction)**

- `armoroftheages:bamboo_hat` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:japanese_light_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:japanese_light_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:japanese_light_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:japanese_light_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:o_yoroi_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:o_yoroi_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:o_yoroi_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:o_yoroi_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:raijin_armor_head` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:raijin_armor_chest` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:raijin_armor_legs` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `armoroftheages:raijin_armor_feet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:ronin_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:ronin_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:ronin_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:ronin_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:thief_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:thief_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:thief_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:thief_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wandering_wizard_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wandering_wizard_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wandering_wizard_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wandering_wizard_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wind_worshipper_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wind_worshipper_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wind_worshipper_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:wind_worshipper_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:forgotten_trace_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:forgotten_trace_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:forgotten_trace_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:forgotten_trace_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:evening_ghost_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:evening_ghost_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:evening_ghost_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_armor:evening_ghost_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_wakizashi` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_black_katana` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_nagakiba` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_marai_executioner_sword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_thief_dagger` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_wandering_wizard_sword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).
- `fantasy_weapons:weapon_forgotten_trace_spear` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 2`).

**Knight faction  —  condition: cabacraft_faction == 3  (FTB party owner of the Knight faction)**

- `fantasy_armor:old_knight_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:old_knight_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:old_knight_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:old_knight_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:silver_knight_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:silver_knight_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:silver_knight_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:silver_knight_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:dragonslayer_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:dragonslayer_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:dragonslayer_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:dragonslayer_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:spark_of_dawn_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:spark_of_dawn_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:spark_of_dawn_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:spark_of_dawn_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:fog_guard_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:fog_guard_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:fog_guard_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_armor:fog_guard_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_weapons:weapon_dragonslayer_halberd` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_weapons:weapon_fog_guard_sword` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).
- `fantasy_weapons:weapon_spark_of_dawn_polearm` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_faction == 3`).

**Chancellor  —  condition: cabacraft_office_chancellor >= 1**

- `fantasy_armor:hero_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).
- `fantasy_armor:hero_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).
- `fantasy_armor:hero_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).
- `fantasy_armor:hero_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).
- `fantasy_weapons:weapon_hero_claymore` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).
- `accents:crown` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_chancellor >= 1`).

**Treasurer  —  condition: cabacraft_office_treasurer >= 1**

- `fantasy_armor:gilded_hunt_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `fantasy_armor:gilded_hunt_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `fantasy_armor:gilded_hunt_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `fantasy_armor:gilded_hunt_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:spur` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:bevel` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:cog` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:crown` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:sun` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).
- `numismatics:sprocket` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_treasurer >= 1`).

**Judge  —  condition: cabacraft_office_judge >= 1**

- `fantasy_armor:crucible_knight_helmet` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_judge >= 1`).
- `fantasy_armor:crucible_knight_chestplate` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_judge >= 1`).
- `fantasy_armor:crucible_knight_leggings` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_judge >= 1`).
- `fantasy_armor:crucible_knight_boots` — **C** — ultra-hard signature regalia recipe (condition `cabacraft_office_judge >= 1`).
