input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
    Caminhada_normal = 0
    Corrida = 0
})
input.onButtonPressed(Button.B, function () {
    if (Corrida <= 10) {
        basic.showString("Metros")
    } else if (Corrida <= 100) {
        basic.showNumber(Corrida / 10)
        basic.showString("Decametros")
    } else if (Corrida <= 1000) {
        basic.showNumber(Corrida / 100)
        basic.showString("Hectometros")
    } else if (Corrida <= 10000) {
        basic.showNumber(Corrida / 1000)
        basic.showString("Quilometros")
    } else {
        basic.showNumber(Corrida / 1000)
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
let Corrida = 0
let Meta_diária = 0
let Caminhada_normal = 0
basic.showNumber(0)
Caminhada_normal = 0
Meta_diária = Corrida
Meta_diária = Caminhada_normal
Corrida = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        Caminhada_normal += 1
        Corrida += 1
        basic.showNumber(Caminhada_normal)
        basic.showNumber(Corrida)
        basic.pause(65)
        basic.clearScreen()
    }
})
