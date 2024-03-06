const bindRight = new KeyBind("Toggle Key Right", Keyboard.KEY_X, "Move Toggle")
const bindLeft = new KeyBind("Toggle Key Left", Keyboard.KEY_Z, "Move Toggle")
var pressedRight = false;
var pressedLeft = false;
const rightKey = new KeyBind(Client.getMinecraft().field_71474_y.field_74366_z)
const leftKey = new KeyBind(Client.getMinecraft().field_71474_y.field_74370_x)

var globalLock = true;

registerCommand("togglemove", "Basic Global Functionality Toggle").setExecutor(() => {
  globalLock = !globalLock;
  ChatLib.chat(`&l&aLOCK ${globalLock ? "&aEnabled" : "&cDisabled"}`)
})


bindRight.registerKeyPress(() => {
  if (globalLock) {
    return
  }
  pressedRight = !pressedRight
  rightKey.setState(pressedRight)
  ChatLib.chat(`&l&aRIGHT ${pressedRight ? "&aEnabled" : "&cDisabled"}`)
})

bindLeft.registerKeyPress(() => {
  if (globalLock) {
    return
  }
  pressedLeft = !pressedLeft
  leftKey.setState(pressedLeft)
  ChatLib.chat(`&l&4LEFT ${pressedLeft ? "&aEnabled" : "&cDisabled"}`)
})
