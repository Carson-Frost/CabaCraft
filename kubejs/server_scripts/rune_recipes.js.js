ServerEvents.recipes(event => {
  // Arcane Stone
  event.remove({ output: 'runes:arcane_stone' })
  event.shapeless('5x runes:arcane_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:witch_eye'
  ])

  // Fire Stone
  event.remove({ output: 'runes:fire_stone' })
  event.shapeless('5x runes:fire_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:nether_eye'
  ])

  // Frost Stone
  event.remove({ output: 'runes:frost_stone' })
  event.shapeless('5x runes:frost_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:cold_eye'
  ])

  // Healing Stone
  event.remove({ output: 'runes:healing_stone' })
  event.shapeless('5x runes:healing_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:rogue_eye'
  ])

  // Lightning Stone
  event.remove({ output: 'runes:lightning_stone' })
  event.shapeless('5x runes:lightning_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:old_eye'
  ])

  // Soul Stone
  event.remove({ output: 'runes:soul_stone' })
  event.shapeless('5x runes:soul_stone', [
    'death_knights:runecarved_stone',
    'endrem:magical_eye',
    'endrem:undead_eye'
  ])

  // Blood Stone
  event.remove({ output: 'death_knights:blood_stone' })
  event.shapeless('10x death_knights:blood_stone', [
    'death_knights:runecarved_stone',
    'endrem:cursed_eye',
    'endrem:corrupted_eye',
    'endrem:lost_eye'
  ])

  // Unholy Stone
  event.remove({ output: 'death_knights:unholy_stone' })
  event.shapeless('10x death_knights:unholy_stone', [
    'death_knights:runecarved_stone',
    'endrem:cursed_eye',
    'endrem:corrupted_eye',
    'endrem:evil_eye'
  ])

  event.remove({ output: 'death_knights:runecarved_stone' })
})

