import {AstronomicalObject} from './astronomical-object.model';
import {GalaxyModel} from './galaxy.model';

export class UniverseModel extends AstronomicalObject {
  protected _spaceGalaxies: Array<any>;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string, positionX: number,
              positionY: number) {
    super(id, name, weight, speed, discoverer, positionX, positionY);
    this._spaceGalaxies = [];
  }

  addSpaceSystem(galaxy) {
    const newGalaxy = new GalaxyModel(galaxy.id, galaxy.name, galaxy.weight, galaxy.speed, galaxy.discoverer,
      galaxy.positionX, galaxy.positionY, this);
    this._spaceGalaxies.push(newGalaxy);
  }

  get spaceGalaxies() {
    return this._spaceGalaxies;
  }

}
