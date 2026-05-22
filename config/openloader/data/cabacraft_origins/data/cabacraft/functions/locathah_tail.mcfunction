# Locathah's tail/fins are permanent (locked design).
# Force-equip mermod:sea_necklace into the Trinkets chest/necklace slot.
# Trinkets 3.7.2 does NOT hook the vanilla /item command (vanilla's slot parser
# can't read a "/" in the slot name -> "Unknown slot 'trinkets.chest'"). It registers
# its own /trinkets command instead: trinkets set <group> <slot> <offset> <stack> [count],
# operating on the command source's player. Confirmed from TrinketsMain bytecode.
# Runs at fn perm level 2, fired once per second by powers/locathah/tail_keeper.json
# (action_over_time interval:20). Re-sets each tick = re-equips within 1s if removed
# (this enforces the "no other way to access them" rule). Setting an equal stack is a
# no-op at Trinkets' equip-diff level, so no equip-callback spam.
trinkets set chest necklace 0 mermod:sea_necklace
