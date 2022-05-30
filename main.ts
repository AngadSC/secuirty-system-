input.onButtonPressed(Button.A, function () {
    control.waitMicros(1016)
    armed = true
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    armed = false
    basic.showIcon(IconNames.Square)
    control.waitMicros(2000)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
})
let acceleration = 0
let armed = false
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
armed = false
basic.forever(function () {
    if (armed == true) {
        basic.showNumber(input.acceleration(Dimension.Strength))
        acceleration = input.acceleration(Dimension.Strength)
        if (input.acceleration(Dimension.X) < 980) {
            basic.showIcon(IconNames.No)
        }
        if (input.acceleration(Dimension.X) > 1050) {
            basic.showIcon(IconNames.No)
        }
    }
})
