import {SpaceAdapter} from '../adapters/space.adapter';
import {Star} from './star.model';
import {AstronomicalObject} from './astronomical-object.model';

export class SpaceSystemModel extends AstronomicalObject {
  protected _parentGalaxy: AstronomicalObject;
  protected _spacePlanets: Array<any>;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              positionX: number, positionY: number, parentGalaxy) {
    super(id, name, weight, speed, discoverer, positionX, positionY);
    this._parentGalaxy = parentGalaxy;
  }

  get parentGalaxy() {
    return this._parentGalaxy;
  }

  get spacePlanets() {
    return this._spacePlanets;
  }

  addSpacePlanet(planet) {
    const newPlanet = planet;
    this._spacePlanets.push(newPlanet);

  }


}
