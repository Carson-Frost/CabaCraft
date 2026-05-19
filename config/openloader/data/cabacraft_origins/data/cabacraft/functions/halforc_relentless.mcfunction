# Relentless Endurance: a would-be-lethal hit leaves you at 1 HP; long cooldown
execute if score @s caba_relcd matches 1.. run scoreboard players remove @s caba_relcd 1
execute store result score @s caba_hp run data get entity @s Health 10
execute if score @s caba_hp matches ..3 if score @s caba_relcd matches ..0 run effect give @s minecraft:instant_health 1 1 true
execute if score @s caba_hp matches ..3 if score @s caba_relcd matches ..0 run effect give @s minecraft:regeneration 5 1 true
execute if score @s caba_hp matches ..3 if score @s caba_relcd matches ..0 run effect give @s minecraft:resistance 5 2 true
execute if score @s caba_hp matches ..3 if score @s caba_relcd matches ..0 run scoreboard players set @s caba_relcd 6000
execute if score @s caba_hp matches ..3 if score @s caba_relcd matches ..0 run title @s actionbar {"text":"Relentless Endurance!","color":"dark_red"}
