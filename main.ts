input.onButtonPressed(Button.A, function () {
    basic.showString("Modo caminhada ATIVADO")
    basic.pause(4000)
    basic.clearScreen()
    while (true) {
        if (input.acceleration(Dimension.Strength) > 1500) {
            Caminhada += 1
            basic.pause(65)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Caminhada <= 10) {
        basic.showNumber(Caminhada / 2)
        basic.showString("M")
    } else if (Caminhada <= 100) {
        basic.showNumber(Caminhada / 20)
        basic.showString("Dam")
    } else if (Caminhada <= 1000) {
        basic.showNumber(Caminhada / 200)
        basic.showString("Hm")
    } else if (Caminhada <= 10000) {
        basic.showNumber(Caminhada / 2000)
        basic.showString("Km")
    } else {
        basic.showNumber(Caminhada / 2000)
        basic.showString("Km")
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
    basic.pause(65)
    basic.clearScreen()
    basic.showNumber(Caminhada)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Modo corrida ATIVADO")
    basic.pause(4000)
    basic.clearScreen()
})
let Corrida = 0
let Meta_diária = 0
let Caminhada = 0
basic.pause(4000)
basic.clearScreen()
if (input.buttonIsPressed(Button.A)) {
    Caminhada = 0
    Meta_diária = Caminhada
    basic.showString("Modo caminhada ATIVADO")
    basic.pause(4000)
    basic.clearScreen()
} else if (input.buttonIsPressed(Button.B)) {
    Corrida = 0
    Meta_diária = Corrida
    basic.showString("Modo corrida ATIVADO")
    basic.pause(4000)
    basic.clearScreen()
}
basic.forever(function () {
	
})
