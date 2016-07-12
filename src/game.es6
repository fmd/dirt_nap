import PIXI from 'pixi.js'
import { SceneManager } from './scene_manager'
import { Window } from './window'

export class Game {
  constructor(opts = Game.defaultOpts) {
    this.initializeRenderer(opts)
    this.initializeWindow(opts)
    this.initializeSceneManager()
  }

  play() {
    this.sceneManager.loop()
  }

  initializeRenderer(opts) {
    PIXI.SCALE_MODES.DEFAULT = opts.scaleMode
    this.renderer = new PIXI.WebGLRenderer(opts.resolution.width, opts.resolution.height)
  }

  initializeWindow(opts) {
    this.window = new Window(this.renderer,
                             opts.resolution.width,
                             opts.resolution.height)
  }

  initializeSceneManager() {
    this.sceneManager = new SceneManager(this.window, this.renderer)
  }

  static get defaultOpts() {
    return { resolution: { width: 160, height: 120 },
             scaleMode: PIXI.SCALE_MODES.NEAREST }
  }
}