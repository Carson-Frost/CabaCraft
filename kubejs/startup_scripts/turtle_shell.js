// turtle_shell.js — KubeJS startup script
//
// Registers `kubejs:turtle_shell`, the Tortle origin's required equipped item.
// Visible chest-armor piece (KubeJS armor renders on the vanilla armor model
// with zero Java). Textures donated from turtlearmor-1.20.6-5.1-forge.jar
// (kept at instance root as a texture donor only — that jar is Forge and
// never loaded). Worn layers at kubejs/assets/kubejs/textures/models/armor/
// turtle_shell_layer_{1,2}.png; inventory icon at .../textures/item/.
//
// No crafting recipe is registered, so it is not obtainable by crafting.
// Acquisition is gated by the Tortle origin (apoli equipped_item condition
// on the chest slot) plus the in-addition class-craft / trader paths — wired
// in the origins datapack phase, not here.
//
// Stats mirror vanilla turtle/iron tier (chest 6, durability x25, ench 9,
// repaired with scute). Tune here if rebalancing.
//
// Apply: full client restart (startup script + new assets). F3+T / /reload
// will NOT register a new item.

ItemEvents.armorTierRegistry(event => {
  event.add('turtle_shell', tier => {
    tier.durabilityMultiplier = 25
    // [feet, legs, chest, head] — chestplate uses the chest value
    tier.slotProtections = [2, 5, 6, 2]
    tier.enchantmentValue = 9
    tier.toughness = 0.0
    tier.knockbackResistance = 0.0
    tier.repairIngredient = 'minecraft:scute'
  })
})

StartupEvents.registry('item', event => {
  event.create('turtle_shell', 'chestplate')
    .tier('turtle_shell')
    .rarity('uncommon')
    .maxStackSize(1)
    .tooltip('The weathered carapace of an ancient tortle.')
})
