# +20t per call (interval 20). 1800t = 90s dry -> land penalties until re-wet.
scoreboard players add @s caba_wet 20
execute if score @s caba_wet matches 1800.. run attribute @s minecraft:generic.movement_speed modifier remove b1f7c0a1-0001-4a10-9c01-2c9d1e3f5a70
execute if score @s caba_wet matches 1800.. run attribute @s minecraft:generic.movement_speed modifier add b1f7c0a1-0001-4a10-9c01-2c9d1e3f5a70 caba_dry_speed -0.25 multiply_base
execute if score @s caba_wet matches 1800.. run attribute @s minecraft:generic.attack_damage modifier remove b1f7c0a1-0002-4a10-9c01-2c9d1e3f5a71
execute if score @s caba_wet matches 1800.. run attribute @s minecraft:generic.attack_damage modifier add b1f7c0a1-0002-4a10-9c01-2c9d1e3f5a71 caba_dry_atk -0.20 multiply_base
execute if score @s caba_wet matches 1800.. run scale set pehkui:mining_speed 0.8
execute if score @s caba_wet matches 1800.. run scale persist set pehkui:mining_speed true @s
