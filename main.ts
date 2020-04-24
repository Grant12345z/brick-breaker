namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const topWall = SpriteKind.create()
    export const Brick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.Brick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.wall, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, 1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.topWall, function (sprite, otherSprite) {
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 3, -1 * sprite.vy)
    if (sprite.vy > -150) {
        sprite.vy += -5
    }
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, col * 8 + 24)
            col += 1
        }
        col = 0
    }
}
function createBrick (x: number, y: number) {
    ranNum = Math.randomRange(0, 2)
    if (ranNum == 0) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else if (ranNum == 1) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
let brick2: Sprite = null
let ranNum = 0
let col = 0
let numBricks = 0
let startBallVar = 0
scene.setBackgroundColor(6)
let paddle = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
paddle.setPosition(80, 110)
controller.moveSprite(paddle, 100, 0)
paddle.setFlag(SpriteFlag.StayInScreen, true)
let top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.topWall)
top.setPosition(80, 0)
let left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.wall)
left.setPosition(0, 60)
let rights = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.wall)
rights.setPosition(159, 60)
let ballVar = sprites.create(img`
. 1 1 . 
1 1 1 1 
1 1 1 1 
. 1 1 . 
`, SpriteKind.ball)
ballVar.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.setScore(0)
numBricks = 0
let brokenBricks = 0
col = 0
buildSetBricks()
game.onUpdate(function () {
    if (startBallVar == 0) {
        ballVar.setPosition(paddle.x, 105)
        ballVar.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        ballVar.setVelocity(Math.randomRange(-15, 15), -50)
        startBallVar = 2
    }
    if (ballVar.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks == 0) {
        startBallVar = 0
        info.changeScoreBy(100)
        effects.confetti.startScreenEffect()
        pause(200)
        effects.confetti.endScreenEffect()
        buildSetBricks()
    }
})
