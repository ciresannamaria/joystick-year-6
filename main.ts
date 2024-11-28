let xVal = 0
let yVal = 0
let zVal = 0
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogReadWritePin.P2)
    yVal = pins.analogReadPin(AnalogReadWritePin.P1)
    zVal = pins.digitalReadPin(DigitalPin.P0)
    if (zVal == 0) {
        basic.clearScreen()
        basic.showNumber(0)
    } else if (xVal < 450 && yVal < 650 && yVal > 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.North)
    } else if (xVal > 650 && yVal < 650 && yVal > 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.South)
    } else if (yVal > 650 && xVal < 650 && xVal > 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.West)
    } else if (yVal < 450 && xVal < 650 && xVal > 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.East)
    } else if (xVal < 450 && yVal > 650) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.NorthWest)
    } else if (xVal < 450 && yVal < 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.NorthEast)
    } else if (xVal > 650 && yVal > 650) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.SouthWest)
    } else if (xVal > 650 && yVal < 450) {
        basic.clearScreen()
        basic.showArrow(ArrowNames.SouthEast)
    } else {
        basic.clearScreen()
    }
})
