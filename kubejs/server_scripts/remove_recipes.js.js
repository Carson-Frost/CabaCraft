
ServerEvents.recipes(event => {
  event.remove({ output: [


    // LIBRARIAN: librarian
    'patchouli:guide_book',
    'tide:fishing_journal',
    'archers:archer_spell_book',
    'paladins:priest_spell_book',
    'paladins:paladin_spell_book',
    'rogues:rogue_spell_book',
    'rogues:warrior_spell_book',
    'wizards:arcane_spell_book',
    'wizards:fire_spell_book',
    'wizards:frost_spell_book',
    'death_knights:blood_spell_book',
    'death_knights:unholy_spell_book',
    'death_knights:frost_spell_book',
    'xercapaint:item_canvas',
    'xercapaint:item_canvas_long',
    'xercapaint:item_canvas_tall',
    'xercapaint:item_canvas_large',
    'xercapaint:item_easel',
    'chessmod:game_piece',


    // PRIEST: "paladins:monk"
    //'paladins:priest_spell_book',
    //'paladins:paladin_spell_book',
    'paladins:acolyte_wand',
    'paladins:holy_wand',
    'paladins:diamond_holy_wand',
    'paladins:holy_staff',
    'paladins:diamond_holy_staff',
    'paladins:priest_robe_head',
    'paladins:priest_robe_chest',
    'paladins:priest_robe_legs',
    'paladins:priest_robe_feet',
    'paladins:prior_robe_head',
    'paladins:prior_robe_chest',
    'paladins:prior_robe_legs',
    'paladins:prior_robe_feet',
    'paladins:paladin_armor_head',
    'paladins:paladin_armor_chest',
    'paladins:paladin_armor_legs',
    'paladins:paladin_armor_feet',
    'paladins:crusader_armor_head',
    'paladins:crusader_armor_chest',
    'paladins:crusader_armor_legs',
    'paladins:crusader_armor_feet',
    'paladins:iron_kite_shield',
    'paladins:golden_kite_shield',
    'paladins:diamond_kite_shield',


    

    // ARCHER: "archers:archery_artisan"
    'archers:auto_fire_hook',
    'archers:archer_armor_head',
    'archers:archer_armor_chest',
    'archers:archer_armor_legs',
    'archers:archer_armor_feet',
    'archers:ranger_armor_head',
    'archers:ranger_armor_chest',
    'archers:ranger_armor_legs',
    'archers:ranger_armor_feet',
    

    // MUSICIAN: cleric
    'immersive_melodies:ender_bass',
    'immersive_melodies:lute',
    'immersive_melodies:piano',
    'immersive_melodies:bagpipe',
    'immersive_melodies:flute',
    'immersive_melodies:handpan',
    'immersive_melodies:triangle',
    'immersive_melodies:tiny_drum',
    'immersive_melodies:trumpet',
    'immersive_melodies:vielle',
    'immersive_melodies:didgeridoo',
    // 'ribbits:maraca',

    // FLAG MAKER: 'minecraft:shepherd'
    'minecells:kings_crest_flag',
    'minecells:large_white_ribbon_flag',
    'minecells:large_orange_ribbon_flag',
    'minecells:large_magenta_ribbon_flag',
    'minecells:large_light_blue_ribbon_flag',
    'minecells:large_yellow_ribbon_flag',
    'minecells:large_lime_ribbon_flag',
    'minecells:large_pink_ribbon_flag',
    'minecells:large_gray_ribbon_flag',
    'minecells:large_light_gray_ribbon_flag',
    'minecells:large_cyan_ribbon_flag',
    'minecells:large_purple_ribbon_flag',
    'minecells:large_blue_ribbon_flag',
    'minecells:large_brown_ribbon_flag',
    'minecells:large_green_ribbon_flag',
    'minecells:large_red_ribbon_flag',
    'minecells:large_black_ribbon_flag',

    // BANKER
    'numismatics:red_card',
    'numismatics:red_id_card',
    'numismatics:white_card',
    'numismatics:white_id_card',
    'numismatics:orange_card',
    'numismatics:orange_id_card',
    'numismatics:magenta_card',
    'numismatics:magenta_id_card',
    'numismatics:light_blue_card',
    'numismatics:light_blue_id_card',
    'numismatics:yellow_card',
    'numismatics:yellow_id_card',
    'numismatics:lime_card',
    'numismatics:lime_id_card',
    'numismatics:pink_card',
    'numismatics:pink_id_card',
    'numismatics:gray_card',
    'numismatics:gray_id_card',
    'numismatics:light_gray_card',
    'numismatics:light_gray_id_card',
    'numismatics:cyan_card',
    'numismatics:cyan_id_card',
    'numismatics:purple_card',
    'numismatics:purple_id_card',
    'numismatics:blue_card',
    'numismatics:blue_id_card',
    'numismatics:brown_card',
    'numismatics:brown_id_card',
    'numismatics:green_card',
    'numismatics:green_id_card',
    'numismatics:red_card',
    'numismatics:red_id_card',
    'numismatics:black_card',
    'numismatics:black_id_card',
    'numismatics:banking_guide',
    'numismatics:vendor',
    'numismatics:brass_depositor',
    'numismatics:andesite_depositor',
    'numismatics:bank_terminal',

    // FISHERMAN: "minecraft:fisherman"
    'tide:stone_fishing_rod',
    'tide:iron_fishing_rod',
    'tide:golden_fishing_rod',
    'tide:crystal_fishing_rod',
    'tide:diamond_fishing_rod',
    'tide:duck_fishing_bobber',
    'tide:lavaproof_fishing_hook',
    'tide:fishing_hook',
    'tide:iron_fishing_hook',
    'tide:void_fishing_hook',
    'tide:fishing_line',
    'tide:reinforced_line',
    'tide:braided_line',
    'tide:golden_line',
    'tide:fish_display',

    // ENGINEER: "morevillagers:engineer"
    'immersive_aircraft:propeller',
    'immersive_aircraft:industrial_gears',
    'immersive_aircraft:sturdy_pipes',
    'immersive_aircraft:rotary_cannon',
    'immersive_aircraft:boiler',
    'immersive_aircraft:enhanced_propeller',
    'immersive_aircraft:improved_landing_gear',
    'immersive_aircraft:steel_boiler',
    'immersive_aircraft:hull',

    // ENGINEER 2: "morevillagers:miner"
    'create:schematic_table',
    'create:wrench',
    'create:belt_connector',
    'create:empty_blaze_burner',
    'create:mechanical_saw',
    'create:mechanical_drill',
    'create:deployer',
    'create:track_station',
    'create:track_observer',
    'create:track_signal',
    'create:mechanical_arm',
    'create:goggles',
    

    // CULTIST 'villagersplus:occultist'
    'death_knights:initiate_armor_head',
    'death_knights:initiate_armor_chest',
    'death_knights:initiate_armor_legs',
    'death_knights:initiate_armor_feet',
    // 'jewelry:unique_attack_ring',
    // 'jewelry:unique_attack_necklace',
    // 'endrem:cryptic_eye
    // 'minecraft:end_crystal


    // SCIENTIST: 'villagersplus:alchemist'
    'death_knights:plaguebringer_armor_head',
    'death_knights:plaguebringer_armor_chest',
    'death_knights:plaguebringer_armor_legs',
    'death_knights:plaguebringer_armor_feet',
    'death_knights:unholy_dk_ring',
    'death_knights:unholy_dk_necklace',


    'death_knights:iron_runeblade',
    'death_knights:diamond_runeblade',
    'death_knights:great_iron_runeblade',
    'death_knights:great_diamond_runeblade',
    'death_knights:great_iron_runeaxe',
    'death_knights:great_diamond_runeaxe',
    
    
    
    
    

    // BLIGHT: 'villagersplus:oceanographer
    'death_knights:crimson_guard_armor_head',
    'death_knights:crimson_guard_armor_chest',
    'death_knights:crimson_guard_armor_legs',
    'death_knights:crimson_guard_armor_feet',
    'death_knights:blood_dk_ring',
    'death_knights:blood_dk_necklace',


    // TBD
    'death_knights:frozen_champion_armor_head',
    'death_knights:frozen_champion_armor_chest',
    'death_knights:frozen_champion_armor_legs',
    'death_knights:frozen_champion_armor_feet',
    'death_knights:frost_dk_ring',
    'death_knights:frost_dk_necklace',

    
    
    // NONE
    'spell_engine:spell_binding',
    'runes:crafting_altar',
    'paladins:monk_workbench',
    'rogues:arms_workbench',
    'archers:archers_workbench',
    'jewelry:jewelers_kit',

    // WIZARD: "wizards:wizard_merchant"
    'wizards:wand_novice',
    'wizards:wand_arcane',
    'wizards:wand_fire',
    'wizards:wand_frost',
    'wizards:staff_wizard',
    'wizards:staff_arcane',
    'wizards:staff_fire',
    'wizards:staff_frost',
    'wizards:wizard_robe_head',
    'wizards:wizard_robe_chest',
    'wizards:wizard_robe_legs',
    'wizards:wizard_robe_feet',
    'wizards:arcane_robe_head',
    'wizards:arcane_robe_chest',
    'wizards:arcane_robe_legs',
    'wizards:arcane_robe_feet',
    'wizards:fire_robe_head',
    'wizards:fire_robe_chest',
    'wizards:fire_robe_legs',
    'wizards:fire_robe_feet',
    'wizards:frost_robe_head',
    'wizards:frost_robe_chest',
    'wizards:frost_robe_legs',
    'wizards:frost_robe_feet',


    // ROGUE: "rogues:arms_merchant"
    'rogues:rogue_armor_head',
    'rogues:rogue_armor_chest',
    'rogues:rogue_armor_legs',
    'rogues:rogue_armor_feet',
    'rogues:assassin_armor_head',
    'rogues:assassin_armor_chest',
    'rogues:assassin_armor_legs',
    'rogues:assassin_armor_feet',
    // (warrior/berserker armor moved to ARMORER below)
    'musketmod:musket',
    'musketmod:blunderbuss',
    'musketmod:pistol',
    'musketmod:cartridge',


    // ARMORER: "minecraft:armorer" — heavy armor merchant
    'immersive_armors:heavy_helmet',
    'immersive_armors:heavy_chestplate',
    'immersive_armors:heavy_leggings',
    'immersive_armors:heavy_boots',
    'rogues:warrior_armor_head',
    'rogues:warrior_armor_chest',
    'rogues:warrior_armor_legs',
    'rogues:warrior_armor_feet',
    'rogues:berserker_armor_head',
    'rogues:berserker_armor_chest',
    'rogues:berserker_armor_legs',
    'rogues:berserker_armor_feet',

    // TBD — immersive_armors sets awaiting trader assignment (recipes removed; unobtainable until reassigned)
    'immersive_armors:wooden_helmet',
    'immersive_armors:wooden_chestplate',
    'immersive_armors:wooden_leggings',
    'immersive_armors:wooden_boots',
    'immersive_armors:bone_helmet',
    'immersive_armors:bone_chestplate',
    'immersive_armors:bone_leggings',
    'immersive_armors:bone_boots',
    'immersive_armors:robe_helmet',
    'immersive_armors:robe_chestplate',
    'immersive_armors:robe_leggings',
    'immersive_armors:robe_boots',
    'immersive_armors:slime_helmet',
    'immersive_armors:slime_chestplate',
    'immersive_armors:slime_leggings',
    'immersive_armors:slime_boots',
    'immersive_armors:prismarine_helmet',
    'immersive_armors:prismarine_chestplate',
    'immersive_armors:prismarine_leggings',
    'immersive_armors:prismarine_boots',
    'immersive_armors:steampunk_helmet',
    'immersive_armors:steampunk_chestplate',
    'immersive_armors:steampunk_leggings',
    'immersive_armors:steampunk_boots',
    'immersive_armors:warrior_helmet',
    'immersive_armors:warrior_chestplate',
    'immersive_armors:warrior_leggings',
    'immersive_armors:warrior_boots',
    'immersive_armors:wither_helmet',
    'immersive_armors:wither_chestplate',
    'immersive_armors:wither_leggings',
    'immersive_armors:wither_boots',
    'immersive_armors:divine_helmet',
    'immersive_armors:divine_chestplate',
    'immersive_armors:divine_leggings',
    'immersive_armors:divine_boots',


    // MYSTIC: "morevillagers:enderian"
    'magnumtorch:diamond_magnum_torch',
    'magnumtorch:emerald_magnum_torch',
    'magnumtorch:amethyst_magnum_torch',
    //"minecraft:end_stone",
    // "minecraft:chorus_fruit",


    // TINKERER
    'immersive_aircraft:gyroscope',
    'immersive_aircraft:gyroscope_hud',
    'immersive_aircraft:gyroscope_dials',
    'immersive_machinery:redstone_sheep',
    'tide:depth_meter',
    'tide:climate_gauge',
    'tide:pocket_watch',
    'tide:weather_radio',
    'createadditions:electric_motor',
    'createadditions:alternator',
    'create:extendo_grip',
    'slideshow:projector',
    'supplementaries:spring_launcher',

    // 'infinitybuttons:red_emergency_button',
    // 'infinitybuttons:red_safe_emergency_button',
    // 'infinitybuttons:bookshelf_secret_button',
    // 'infinitybuttons:brick_secret_button',
    // 'infinitybuttons:stone_brick_secret_button',
    // 'infinitybuttons:lantern_lever',
    // 'infinitybuttons:doorbell',
    // 'infinitybuttons:doorbell_button',
    // 'infinitybuttons:letter_button',

    //NONE
    "minecraft:shulker_box",
    "minecraft:white_shulker_box",
    "minecraft:orange_shulker_box",
    "minecraft:magenta_shulker_box",
    "minecraft:light_blue_shulker_box",
    "minecraft:yellow_shulker_box",
    "minecraft:lime_shulker_box",
    "minecraft:pink_shulker_box",
    "minecraft:gray_shulker_box",
    "minecraft:light_gray_shulker_box",
    "minecraft:cyan_shulker_box",
    "minecraft:purple_shulker_box",
    "minecraft:blue_shulker_box",
    "minecraft:brown_shulker_box",
    "minecraft:green_shulker_box",
    "minecraft:red_shulker_box",
    "minecraft:black_shulker_box",
    "morevillagers:oceanography_table",
    "morevillagers:woodworking_table",
    "morevillagers:decayed_workbench",
    "morevillagers:purpur_altar",
    "morevillagers:blueprint_table",
    "morevillagers:gardening_table",
    "morevillagers:hunting_post",
    "morevillagers:mining_bench",
    "villagersplus:alchemist_table",
    "villagersplus:alchemist_table",
    "minecells:prison_dimensional_rune",
    "minecells:promenade_dimensional_rune",
    "minecells:ramparts_dimensional_rune",
    "minecells:insufferable_dimensional_rune",
    "minecells:black_bridge_dimensional_rune",
    "minecells:prison_doorway",
    "minecells:promenade_doorway",
    "minecells:ramparts_doorway",
    "minecells:insufferable_crypt_doorway",
    "minecells:prison_doorway",
    "minecells:promenade_doorway",
    "minecells:ramparts_doorway",
    "minecells:black_bridge_doorway",
  ]})
})

ServerEvents.recipes(event => {
    // Remove all recipes where the output is from a specific mod
    event.remove({ output: /infinitybuttons:.*/ })

    // ACCENTS (hatter / outfitter / curiosities traders):
    // Every cosmetic uses the custom recipe type "accents:sewing", so one line
    // strips all 28 sewing recipes. Sewing Kit + Sewing Station are normal
    // crafting recipes and are NOT affected.
    event.remove({ type: 'accents:sewing' })

    // Uncomment if you also want to remove the Sewing Station / Kit:
    // event.remove({ output: 'accents:sewing_station' })
    // event.remove({ output: 'accents:sewing_kit' })
})
