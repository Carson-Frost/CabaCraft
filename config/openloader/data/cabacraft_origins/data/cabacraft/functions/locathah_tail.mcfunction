# Keep a Sea Necklace on hand. NOTE: auto-EQUIP into the Trinkets necklace slot
# is not possible from a datapack; the KubeJS Trinkets hook (integration step)
# force-equips & locks it. This just guarantees the player always has the item.
execute unless entity @s[nbt={Inventory:[{id:"mermod:sea_necklace"}]}] run give @s mermod:sea_necklace
