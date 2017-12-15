import {AstronomicalObjectModel} from './astronomical-object.model';
import {GalaxyModel} from './galaxy.model';
import {GalaxyObjectType} from '../types/types';

export class UniverseModel extends AstronomicalObjectModel {
  private _spaceGalaxies: Array<GalaxyModel>;


  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number },
              size: { width: number, height: number }) {
    super(id, name, weight, speed, discoverer, position, size, null);
    this._spaceGalaxies = [];
  }

  addGalaxy(galaxy: GalaxyObjectType) {
    const newGalaxy = new GalaxyModel(galaxy.id, galaxy.name, galaxy.weight, galaxy.speed, galaxy.discoverer,
      galaxy.position, galaxy.size, this, galaxy.diameter, galaxy.numberOfStars, galaxy.thickness);
    this._spaceGalaxies.push(newGalaxy);
  }

  get spaceGalaxies() {
    return this._spaceGalaxies;
  }


}
