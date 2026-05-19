# Relentless Endurance: at near-death, brief heavy Resistance + a heart; long cooldown.
# (Apoli has no true lethal-hit hook; this catches you at <=1 heart, not the killing blow itself.)
execute if score @s caba_relcd matches 1.. run scoreboard players remove @s caba_relcd 1
execute store result score @s caba_hp run data get entity @s Health 10
execute if score @s caba_hp matches ..20 if score @s caba_relcd matches ..0 run effect give @s minecraft:resistance 5 4 true
execute if score @s caba_hp matches ..20 if score @s caba_relcd matches ..0 run effect give @s minecraft:regeneration 3 1 true
execute if score @s caba_hp matches ..20 if score @s caba_relcd matches ..0 run scoreboard players set @s caba_relcd 6000
execute if score @s caba_hp matches ..20 if score @s caba_relcd matches ..0 run title @s actionbar {"text":"Relentless Endurance!","color":"dark_red"}
