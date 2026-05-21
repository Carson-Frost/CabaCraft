# short fire-breath cone (ignites)
execute at @s anchored eyes positioned ^ ^ ^1 run particle minecraft:flame ~ ~ ~ 0.6 0.6 0.6 0.05 40 force
execute at @s anchored eyes positioned ^ ^ ^2 run particle minecraft:flame ~ ~ ~ 0.9 0.9 0.9 0.05 60 force
execute at @s anchored eyes positioned ^ ^ ^2 run damage @e[distance=..3,gamemode=!creative,gamemode=!spectator] 5 minecraft:on_fire by @s
execute at @s anchored eyes positioned ^ ^ ^2 run execute as @e[distance=..3,type=!#minecraft:can_breathe_water] run data merge entity @s {Fire:80s}
playsound minecraft:entity.blaze.shoot player @a ~ ~ ~ 1 0.8
