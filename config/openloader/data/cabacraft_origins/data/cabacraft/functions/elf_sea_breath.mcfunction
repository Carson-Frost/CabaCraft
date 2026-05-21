# Long but finite breath: ~45s (900t) water_breathing budget per dive.
execute store result score @s caba_air run data get entity @s Air
execute if score @s caba_air matches 280.. run scoreboard players set @s caba_breath 900
execute if score @s caba_air matches ..200 if score @s caba_breath matches 1.. run effect give @s minecraft:water_breathing 2 0 true
execute if score @s caba_air matches ..200 if score @s caba_breath matches 1.. run scoreboard players remove @s caba_breath 10
