# Tortle extended-but-finite breath: ~60s (1200t) water_breathing budget per dive.
# Runs every 10 ticks (hold_breath action_over_time interval=10).
execute store result score @s caba_air run data get entity @s Air
# At/near surface (air refilled): refill the 60s budget for the next dive.
execute if score @s caba_air matches 280.. run scoreboard players set @s caba_breath 1200
# Submerged with budget left: sustain breathing and spend 10t of the budget.
execute if score @s caba_air matches ..200 if score @s caba_breath matches 1.. run effect give @s minecraft:water_breathing 2 0 true
execute if score @s caba_air matches ..200 if score @s caba_breath matches 1.. run scoreboard players remove @s caba_breath 10
# Budget exhausted -> no grant -> vanilla drowning takes over.
