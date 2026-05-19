# released crouch -> spring up, height scaled by charge; only from ground.
# vy from MC physics to hit the user's ~6-block max (0.42=~1.25b; vy=0.42*sqrt(H/1.25))
execute unless entity @s[nbt={OnGround:1b}] run scoreboard players set @s caba_coil 0
execute if entity @s[nbt={OnGround:1b}] if score @s caba_coil matches 32.. run data merge entity @s {Motion:[0.0,0.92,0.0]}
execute if entity @s[nbt={OnGround:1b}] if score @s caba_coil matches 20..31 run data merge entity @s {Motion:[0.0,0.75,0.0]}
execute if entity @s[nbt={OnGround:1b}] if score @s caba_coil matches 8..19 run data merge entity @s {Motion:[0.0,0.59,0.0]}
execute if entity @s[nbt={OnGround:1b}] if score @s caba_coil matches 8.. run playsound minecraft:entity.frog.long_jump player @a ~ ~ ~ 0.9 1
execute if score @s caba_coil matches 1.. run scoreboard players set @s caba_coil 0
