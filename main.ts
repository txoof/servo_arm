let rotation = 0
let x_accel = 0
let y_accel = 0
basic.forever(function () {
    serial.writeValue("rot", rotation)
    x_accel = input.acceleration(Dimension.X)
    y_accel = input.acceleration(Dimension.Y)
    pins.servoWritePin(AnalogPin.P0, pins.map(
    x_accel,
    0,
    1023,
    0,
    180
    ))
    pins.servoWritePin(AnalogPin.P1, pins.map(
    y_accel,
    0,
    1023,
    0,
    180
    ))
    if (input.buttonIsPressed(Button.A)) {
        rotation += -1
    }
    if (input.buttonIsPressed(Button.B)) {
        rotation += 1
    }
    if (rotation >= 180) {
        rotation = 0
    }
    if (rotation <= 0) {
        rotation = 180
    }
    pins.servoWritePin(AnalogPin.P2, rotation)
})
