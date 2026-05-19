# soft dry-out: debuffs (not damage) when too long out of water
execute if entity @s[nbt={Air:300s}] run scoreboard players set @s caba_wet 200
scoreboard players remove @s caba_wet 1
execute if score @s caba_wet matches ..0 run effect give @s minecraft:weakness 3 0 true
execute if score @s caba_wet matches ..0 run effect give @s minecraft:slowness 3 0 true
execute if score @s caba_wet matches ..-1 run scoreboard players set @s caba_wet 0
