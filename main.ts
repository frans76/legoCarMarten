input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showString("poep")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("papa en mama en aster zijn lief")
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . # # # #
        `)
    music.playMelody("B A - - G - - C ", 12 ** 1)
    wuKong.setAllMotor(100, 100)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(127)
    music.playTone(988, music.beat(BeatFraction.Breve))
    music.playTone(131, music.beat(BeatFraction.Breve))
    if (0 == music.beat(BeatFraction.Breve)) {
        music.playTone(349, music.beat(BeatFraction.Breve))
    }
})
basic.forever(function () {
	
})
