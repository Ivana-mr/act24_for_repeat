input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.pause(500)
        basic.showLeds(`
            # # # . #
            # . # # #
            # # # . #
            # . . . #
            # . . . #
            `)
        basic.clearScreen()
    }
    for (let index = 0; index < 15; index++) {
        basic.pause(500)
        basic.showLeds(`
            # # # . .
            . # . # #
            . # . . #
            . # . . #
            # # . # #
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    count = 0
    for (let count = 0; count <= 4; count++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let count = 0; count <= 15; count++) {
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            # # . # #
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.clearScreen()
    }
})
let count = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
basic.forever(function () {
	
})
