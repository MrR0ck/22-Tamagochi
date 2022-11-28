input.onGesture(Gesture.LogoDown, function () {
    таймер = 0
    basic.showIcon(IconNames.StickFigure)
})
input.onGesture(Gesture.Shake, function () {
    таймер = 0
    basic.showIcon(IconNames.Surprised)
})
input.onGesture(Gesture.LogoUp, function () {
    таймер = 0
    basic.showIcon(IconNames.EigthNote)
})
let таймер = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . # . .
    `)
basic.pause(1000)
basic.forever(function () {
    basic.pause(1000)
    таймер += 1
    if (таймер == 1) {
        basic.showIcon(IconNames.Sad)
    }
    if (таймер == 2) {
        basic.showIcon(IconNames.Asleep)
    }
    if (таймер == 3) {
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
