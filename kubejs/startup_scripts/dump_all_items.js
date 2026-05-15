// dump_all_items.js — KubeJS startup script
//
// Dumps every registered item ID + display name to logs/kubejs/startup.log
// using a unique line prefix so the dump can be grepped out cleanly.
//
// Each line: "ITEMDUMP <itemid>\t<DisplayName>"
// Bracketed by ITEMDUMP_START / ITEMDUMP_END markers.
// Runs once per launch.

StartupEvents.postInit(event => {
  const rows = []
  Item.getList().forEach(stack => {
    rows.push(String(stack.getId()) + '\t' + String(stack.getHoverName().getString()))
  })
  rows.sort()

  console.info('ITEMDUMP_START count=' + rows.length)
  rows.forEach(row => console.info('ITEMDUMP ' + row))
  console.info('ITEMDUMP_END')
})
