namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const ball = SpriteKind.create()
    export const topWall = SpriteKind.create()
    export const Brick = SpriteKind.create()
    export const hpBrick = SpriteKind.create()
    export const ballBrick = SpriteKind.create()
    export const sizeBrick = SpriteKind.create()
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite == heart) {
        if (info.life() == 3) {
            info.changeScoreBy(5)
            otherSprite.destroy()
        } else {
            info.changeLifeBy(1)
            otherSprite.destroy()
        }
    }
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.sizeBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
    sizeBall = sprites.createProjectileFromSprite(img`
. 1 1 1 1 1 . 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
1 1 1 1 1 1 1 
. 1 1 1 1 1 . 
`, otherSprite, 0, 50)
})
sprites.onOverlap(SpriteKind.ball, SpriteKind.hpBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
    heart = sprites.createProjectileFromSprite(img`
. 2 2 . 2 2 . 
2 2 2 2 2 2 2 
2 2 2 2 2 2 2 
. 2 2 2 2 2 . 
. . 2 2 2 . . 
. . . 2 . . . 
. . . . . . . 
`, otherSprite, 0, 50)
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
    ranNum = Math.randomRange(1, 12)
    if (ranNum == 1) {
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
    } else if (ranNum == 2) {
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
    } else if (ranNum == 3) {
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
    } else if (ranNum == 4) {
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
    } else if (ranNum == 5) {
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
    } else if (ranNum == 6) {
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
    } else if (ranNum == 7) {
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
    } else if (ranNum == 8) {
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
    } else if (ranNum == 9) {
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
    } else if (ranNum == 10) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 1 1 1 2 2 1 1 2 2 1 1 1 1 f 
f 1 1 1 2 2 2 2 2 2 2 2 1 1 1 f 
f 1 1 1 2 2 2 2 2 2 2 2 1 1 1 f 
f 1 1 1 1 2 2 2 2 2 2 1 1 1 1 f 
f 1 1 1 1 1 2 2 2 2 1 1 1 1 1 f 
f 1 1 1 1 1 1 2 2 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.hpBrick)
    } else if (ranNum == 11) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 8 8 8 8 4 4 4 4 4 f 
f 4 4 4 4 4 4 8 8 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.ballBrick)
    } else if (ranNum == 12) {
        brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 8 8 8 8 8 1 1 1 1 8 8 8 8 8 f 
f 8 8 8 8 1 1 1 1 1 1 8 8 8 8 f 
f 8 8 8 8 1 1 1 1 1 1 8 8 8 8 f 
f 8 8 8 8 1 1 1 1 1 1 8 8 8 8 f 
f 8 8 8 8 1 1 1 1 1 1 8 8 8 8 f 
f 8 8 8 8 8 1 1 1 1 8 8 8 8 8 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.sizeBrick)
    }
    brick2.setPosition(x, y)
    numBricks += 1
}
sprites.onOverlap(SpriteKind.ball, SpriteKind.ballBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 200)
    sprite.setVelocity(1 * sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
    extraBall = sprites.createProjectileFromSprite(img`
. 8 8 . 
8 8 8 8 
8 8 8 8 
. 8 8 . 
`, otherSprite, 0, 50)
})
let extraBall: Sprite = null
let brick2: Sprite = null
let ranNum = 0
let sizeBall: Sprite = null
let heart: Sprite = null
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
