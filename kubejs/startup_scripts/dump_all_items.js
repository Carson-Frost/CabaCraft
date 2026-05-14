// dump_all_items.js — KubeJS startup script
//
// On game start, writes every registered item ID + display name to
//   <gameDir>/kubejs/exports/all_items.txt
// One "<itemid>\t<DisplayName>" entry per line, alphabetically sorted.
// Runs once per launch. Prints the absolute path it wrote to.

const Files = Java.loadClass('java.nio.file.Files')
const Paths = Java.loadClass('java.nio.file.Paths')

StartupEvents.postInit(event => {
  const rows = []
  Item.getList().forEach(stack => {
    rows.push(String(stack.getId()) + '\t' + String(stack.getHoverName().getString()))
  })
  rows.sort()

  const path = Paths.get('kubejs', 'exports', 'all_items.txt')
  Files.createDirectories(path.getParent())
  Files.writeString(path, rows.join('\n') + '\n')

  console.info('Dumped ' + rows.length + ' items to ' + path.toAbsolutePath().toString())
})
