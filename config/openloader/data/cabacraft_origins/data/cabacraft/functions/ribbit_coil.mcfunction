# build coil charge while crouched (cap 40t = 2s = full ~6 blocks)
scoreboard players add @s caba_coil 1
execute if score @s caba_coil matches 41.. run scoreboard players set @s caba_coil 40
