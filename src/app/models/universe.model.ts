import {AstronomicalObject} from './astronomical-object.model';
import {GalaxyModel} from './galaxy.model';

export class UniverseModel extends AstronomicalObject {
  private _spaceGalaxies: Array<any>;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }) {
    super(id, name, weight, speed, discoverer, position);
    this._spaceGalaxies = [];
  }

  addGalaxy(galaxy) {
    const newGalaxy = new GalaxyModel(galaxy.id, galaxy.name, galaxy.weight, galaxy.speed, galaxy.discoverer,
      galaxy.position, this);
    this._spaceGalaxies.push(newGalaxy);
  }

  get spaceGalaxies() {
    return this._spaceGalaxies;
  }

}
