basic.showString("Hello!")
basic.showNumber(10)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
        led.toggle(4, 4)
        led.plotBarGraph(
        music.volume(),
        10
        )
    }
})
