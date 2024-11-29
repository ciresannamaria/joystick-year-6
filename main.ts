basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 200) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
})
