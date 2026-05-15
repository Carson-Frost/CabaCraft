#!/usr/bin/env python3
# Regenerate the preview mcfunction files.
#
# - all_textures.mcfunction: spawns every (profession x biome) combo in a grid.
#   Hand-maintain the `professions` list below if a new villager-adding mod
#   is installed.
# - current_traders.mcfunction: regenerated from the trader_commands/*.txt
#   files in the repo. Re-run this script after adding/changing a trader.
# - cleanup.mcfunction: kills both preview-tagged groups.
#
# Run from the instance root:
#   python3 datapacks/cabacraft_preview/regenerate.py

import os, re, glob

BIOMES = ["plains", "desert", "savanna", "jungle", "swamp", "taiga", "snow"]
PROFESSIONS = [
    # Vanilla
    "minecraft:armorer", "minecraft:butcher", "minecraft:cartographer", "minecraft:cleric",
    "minecraft:farmer", "minecraft:fisherman", "minecraft:fletcher", "minecraft:leatherworker",
    "minecraft:librarian", "minecraft:mason", "minecraft:nitwit", "minecraft:shepherd",
    "minecraft:toolsmith", "minecraft:weaponsmith",
    # MoreVillagers
    "morevillagers:woodworker", "morevillagers:engineer", "morevillagers:netherian",
    "morevillagers:enderian", "morevillagers:hunter", "morevillagers:florist",
    "morevillagers:miner", "morevillagers:oceanographer",
    # VillagersPlus
    "villagersplus:occultist", "villagersplus:alchemist", "villagersplus:oceanographer",
    "villagersplus:horticulturist",
    # Single-mod
    "archers:archery_artisan", "paladins:monk", "rogues:arms_merchant", "wizards:wizard_merchant",
]

ROOT = os.path.dirname(os.path.abspath(__file__))
FNDIR = os.path.join(ROOT, "data", "cabacraft", "functions")
# Datapack lives at config/openloader/data/cabacraft_preview/ — instance root is 4 levels up.
INSTANCE_ROOT = os.path.abspath(os.path.join(ROOT, "..", "..", "..", ".."))

os.makedirs(FNDIR, exist_ok=True)

# --- all_textures ---
out = [
    "# Spawns one villager per (profession x biome) at relative offsets.",
    "# Run with: /function cabacraft:all_textures",
    "# Cleanup with: /function cabacraft:cleanup",
    "# Profession order (columns): " + ", ".join(p.split(":")[-1] for p in PROFESSIONS),
    "# Biome order (rows): " + ", ".join(BIOMES),
]
for bi, biome in enumerate(BIOMES):
    z = bi * 3
    for pi, prof in enumerate(PROFESSIONS):
        x = pi * 2
        out.append(
            'summon minecraft:villager ~' + str(x) + ' ~ ~' + str(z) + ' '
            '{Tags:["tex_preview"],Invulnerable:1b,NoAI:1b,Silent:1b,PersistenceRequired:1b,'
            'VillagerData:{profession:"' + prof + '",level:5,type:"minecraft:' + biome + '"}}'
        )
with open(os.path.join(FNDIR, "all_textures.mcfunction"), "w") as f:
    f.write("\n".join(out) + "\n")

# --- current_traders: spawn the REAL traders (full NBT + Offers) at staggered
#     positions so you can right-click each one and verify trades in-game.
NAMETAG_BLOCK = ',CustomName:\'{"text":"%s"}\',CustomNameVisible:1b'
SPACING_X = 3  # blocks between trader anchors (room to interact with each)

traders = []
for path in sorted(glob.glob(os.path.join(INSTANCE_ROOT, "trader_commands", "*.txt"))):
    name = os.path.basename(path).replace(".txt", "")
    if name.startswith("preview_"):
        continue
    text = open(path).read().strip()
    if not text.startswith("/summon"):
        continue
    # Drop leading `/`, replace the spawn offset, swap the anchor tag for the
    # preview tag, and inject a nametag right after `Invulnerable:1b,`.
    body = text[1:]
    body = re.sub(r'~\s*~\s*~-?\d+', '~%d ~ ~0' % (len(traders) * SPACING_X), body, count=1)
    body = body.replace('Tags:["trade_anchor"]', 'Tags:["trader_preview"]', 1)
    body = body.replace('Invulnerable:1b,', 'Invulnerable:1b' + (NAMETAG_BLOCK % name) + ',', 1)
    traders.append((name, body))

out = [
    "# Spawns the REAL traders (with full trade lists) at staggered positions.",
    "# Each is nametagged so you can identify them; trades are intact for testing.",
    "# Run with: /function cabacraft:current_traders",
    "# Cleanup with: /function cabacraft:cleanup",
    "# Order: " + ", ".join(t[0] for t in traders),
]
out.extend(body for _, body in traders)
with open(os.path.join(FNDIR, "current_traders.mcfunction"), "w") as f:
    f.write("\n".join(out) + "\n")

# --- cleanup ---
with open(os.path.join(FNDIR, "cleanup.mcfunction"), "w") as f:
    f.write("# Removes all preview villagers (both texture and trader previews)\n")
    f.write("kill @e[tag=tex_preview]\n")
    f.write("kill @e[tag=trader_preview]\n")

print("Regenerated 3 mcfunction files.")
print("Texture grid:  " + str(len(PROFESSIONS) * len(BIOMES)) + " villagers (" + str(len(PROFESSIONS)) + " professions x " + str(len(BIOMES)) + " biomes)")
print("Trader lineup: " + str(len(traders)) + " villagers (" + ", ".join(t[0] for t in traders) + ")")
