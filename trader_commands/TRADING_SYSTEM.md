# Trading System

Custom villager economy for a modded Minecraft 1.20.1 Fabric server. Sold items have their crafting recipes removed; villagers are the only source.

## Runes

All trades use MinCells dimensional runes. Prison is always the primary cost. Non-trivial trades add a thematic secondary rune.

| Rune | ID | Theme | Villagers |
|---|---|---|---|
| Prison | `minecells:prison_dimensional_rune` | baseline | all |
| Promenade | `minecells:promenade_dimensional_rune` | nature | Archer, Musician, Fisherman, Flag Maker |
| Ramparts | `minecells:ramparts_dimensional_rune` | military / magic | Priest, Wizard, Rogue |
| Insufferable Crypt | `minecells:insufferable_crypt_dimensional_rune` | tech / industry | Banker, Engineer, Mechanist, Tinkerer |
| Black Bridge | `minecells:black_bridge_dimensional_rune` | cursed / dark | Cultist, Scientist, Blight, Mystic |

Prison scales exponentially across tiers. Secondary scales linearly at roughly prison ÷ 5.

## Pricing Tiers

| Tier | Prison | Secondary |
|---|---|---|
| Trivial | 1 | 0 |
| Cheap | 2 | 0 |
| Entry | 5 | 1 |
| Low-Mid | 10 | 2 |
| Mid | 18 | 4 |
| Shop | 20 | 4 |
| High | 28 | 6 |
| Engine Basic | 30 | 6 |
| Top | 40 | 8 |
| Pinnacle | 50 | 10 |
| Engine Advanced | 60 | 12 |
| Elite | 64 | 12 |

## Trade Ordering

Within each villager:
1. Tier ascending (cheap to expensive).
2. Within a tier: weapons before armor.
3. Shields slot into the weapons sequence by relative strength (basic shield with basic weapon), not by their own prison-cost tier.
4. Accessories (ammo, line, hook) precede the tools they're used with.
5. Featured items may be pinned to the top of a list out of cost order (e.g. Engineer's engines).

## Villager NBT

All villagers spawn with: `Invulnerable:1b`, `PersistenceRequired:1b`, `generic.movement_speed:0`, `generic.knockback_resistance:1`, `maxUses:2147483647` per trade, `Tags:["trade_anchor"]`. Scientist also has `Silent:1b`.
