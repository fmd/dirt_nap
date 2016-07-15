import { flatten } from 'lodash'
import { Scene } from '../scene'
import { Player } from '../player'
import { TileMap } from '../tile_map'

export class GameScene extends Scene {
  constructor(window) {
    super(window)
    this.player = new Player()
    this.assets = flatten([Scene.sharedAssets,
                           this.player.assets,
                           'resources/maps/test_1.json',
                           'resources/assets/basement_objects.json'])
    this.sprites = {}
  }

  update() {
    super.update()
    this.player.update()
  }

  loadingDone(loader, resources) {
    super.loadingDone(loader, resources)

    this.tileMap = new TileMap(resources, 'resources/maps/test_1.json')
    console.log(this.tileMap)

    // this.wallTexture = PIXI.Texture.fromFrame('dark_wall.png')
    // this.wall = new PIXI.TilingSprite(this.wallTexture, 240, 80)
    // this.wall.position = { x: 0, y: -10 }
    // this.addChild(this.wall)
    //
    // this.shelves = new PIXI.Sprite.fromFrame('bloody_shelves.png')
    // this.shelves.anchor.set(0.5)
    // this.shelves.position = { x: 50, y: 54 }
    // this.addChild(this.shelves)
    //
    // this.mirror = new PIXI.Sprite.fromFrame('broken_mirror.png')
    // this.mirror.anchor.set(0.5)
    // this.mirror.position = { x: 100, y: 50 }
    // this.addChild(this.mirror)
    //
    // this.table = new PIXI.Sprite.fromFrame('pig_table.png')
    // this.table.anchor.set(0.5)
    // this.table.position = { x: 150, y: 54 }
    // this.addChild(this.table)

    this.player.loadingDone()
    this.addChild(this.player)
  }
}
