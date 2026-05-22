# Locathah's tail is permanent (locked design).
# Force-equip mermod:sea_necklace into the Trinkets chest/necklace slot.
# Trinkets registers each slot as an ItemSlotReference (trinkets.<group>/<slot>.<index>),
# so vanilla /item replace entity targets it directly. Runs at fn perm level 2,
# fired once per second by powers/locathah/tail_keeper.json (action_over_time interval:20).
# Idempotent: if the slot already holds the necklace, the replace is a no-op.
item replace entity @s trinkets.chest/necklace.0 with mermod:sea_necklace
