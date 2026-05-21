// card_recipes.js.js
//
// Numismatics card colors that the banker DOESN'T sell are craftable by
// dyeing any existing card (or id card). Banker sells only blue, light_blue,
// purple, green — every other color is obtained via this recipe:
//
//   #numismatics:cards   + <color>_dye  ->  <color> card
//   #numismatics:id_cards + <color>_dye ->  <color> id card
//
// The vanilla numismatics card recipes are recipe-removed in
// remove_recipes.js.js, so the only way to obtain a non-banker color
// is to buy a banker color and dye it.

ServerEvents.recipes(event => {
  const COLORS = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ]
  const BANKER_COLORS = ['blue', 'light_blue', 'purple', 'green']

  COLORS.forEach(color => {
    if (BANKER_COLORS.indexOf(color) !== -1) return
    event.shapeless(
      'numismatics:' + color + '_card',
      ['#numismatics:cards', 'minecraft:' + color + '_dye']
    )
    event.shapeless(
      'numismatics:' + color + '_id_card',
      ['#numismatics:id_cards', 'minecraft:' + color + '_dye']
    )
  })
})
