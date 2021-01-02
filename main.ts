input.onButtonPressed(Button.AB, function () {
    if (Caminhada_normal <= 10) {
        basic.showNumber(Caminhada_normal * 0.5)
        basic.showString("Metros")
    } else if (Caminhada_normal <= 100) {
        basic.showNumber(Caminhada_normal / 10)
        basic.showString("Decametros")
    } else if (Caminhada_normal <= 1000) {
        basic.showNumber(Caminhada_normal / 100)
        basic.showString("Hectometros")
    } else if (Caminhada_normal <= 10000) {
        basic.showNumber(Caminhada_normal / 1000)
        basic.showString("Quilometros")
    } else {
        basic.showNumber(Caminhada_normal / 1000)
        basic.showString("Quilometros")
    }
    if (Meta_diária == 10000) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.showString("Bateu a sua meta diária")
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
    Caminhada_normal = 0
})
let Meta_diária = 0
let Caminhada_normal = 0
basic.showNumber(0)
Caminhada_normal = 0
Meta_diária = Caminhada_normal
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        Caminhada_normal += 1
        basic.showNumber(Caminhada_normal)
        basic.pause(65)
        basic.clearScreen()
    }
})
