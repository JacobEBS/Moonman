scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy()
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
tiles.setTilemap(tilemap`Tilemap`)
let mySprite = sprites.create(assets.image`Halfmoon Main character`, SpriteKind.Player)
info.setScore(0)
for (let index = 0; index < 20; index++) {
    mySprite2 = sprites.create(assets.image`Star`, SpriteKind.Food)
    tiles.placeOnRandomTile(mySprite2, sprites.builtin.forestTiles10)
}
forever(function () {
    controller.moveSprite(mySprite, 100, 100)
    scene.cameraFollowSprite(mySprite)
})
