# extended (finite) breath: top up air while submerged, capped by counter
execute if entity @s[nbt={Air:-20s}] run scoreboard players set @s caba_dive 0
execute store result score @s caba_air run data get entity @s Air
execute if score @s caba_air matches ..0 if score @s caba_dive matches 1.. run effect give @s minecraft:water_breathing 2 0 true
execute if score @s caba_air matches ..0 if score @s caba_dive matches 1.. run scoreboard players remove @s caba_dive 1
execute if score @s caba_air matches 60.. run scoreboard players set @s caba_dive 18
