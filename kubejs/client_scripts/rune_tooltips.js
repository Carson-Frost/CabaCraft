// rune_tooltips.js — KubeJS client script
//
// Suppresses ALL tooltip text on each MinCells dimensional rune. Hovering
// a rune will show only the item name (and the "Mine Cells" mod-source
// label at the very bottom, which is rendered outside the tooltip line
// list and can't be removed from a client script).
//
// PLACEMENT:  <instance>/kubejs/client_scripts/rune_tooltips.js
// RELOAD:     CLOSE AND RESTART THE CLIENT. /reload and F3+T do NOT reload
//             client_scripts.

const RUNE_IDS = [
  'minecells:prison_dimensional_rune',
  'minecells:promenade_dimensional_rune',
  'minecells:ramparts_dimensional_rune',
  'minecells:insufferable_crypt_dimensional_rune',
  'minecells:black_bridge_dimensional_rune'
]

ItemEvents.tooltip(tooltip => {
  RUNE_IDS.forEach(itemId => {
    tooltip.addAdvanced(itemId, (stack, advanced, text) => {
      // text.get(0) is the item name — keep it, wipe every other line.
      while (text.size() > 1) {
        text.remove(1)
      }
    })
  })
})