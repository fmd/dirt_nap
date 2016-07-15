import { TileLayer } from './tile_layer'
import { map } from 'lodash'

export class TileMap {
  constructor(resources, file) {
    let resource = resources[file].data
    this.palette = resource.palette
    this.layers = map(resource.layers, this.createTileLayer)
  }

  createTileLayer(layer) {
    return new TileLayer(this.container, this.palette, layer.tiles)
  }
}
