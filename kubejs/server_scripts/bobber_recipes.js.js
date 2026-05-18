// Colored fishing bobbers = white bobber + matching dye (replaces Tide's
// default slime_ball+planks+dye recipes, which are removed in remove_recipes.js.js).
ServerEvents.recipes(event => {
  event.shapeless('tide:black_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/black'])
  event.shapeless('tide:blue_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/blue'])
  event.shapeless('tide:brown_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/brown'])
  event.shapeless('tide:cyan_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/cyan'])
  event.shapeless('tide:gray_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/gray'])
  event.shapeless('tide:green_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/green'])
  event.shapeless('tide:light_blue_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/light_blue'])
  event.shapeless('tide:light_gray_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/light_gray'])
  event.shapeless('tide:lime_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/lime'])
  event.shapeless('tide:magenta_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/magenta'])
  event.shapeless('tide:orange_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/orange'])
  event.shapeless('tide:pink_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/pink'])
  event.shapeless('tide:purple_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/purple'])
  event.shapeless('tide:red_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/red'])
  event.shapeless('tide:yellow_fishing_bobber', ['tide:white_fishing_bobber', '#c:dyes/yellow'])
})
