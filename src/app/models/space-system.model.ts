import {AstronomicalObject} from './astronomical-object.model';

export class SpaceSystemModel extends AstronomicalObject {
  private _parentGalaxy: AstronomicalObject;
  private _spacePlanets: Array<any>;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, parentGalaxy) {
    super(id, name, weight, speed, discoverer, position);
    this._parentGalaxy = parentGalaxy;
  }

  addSpacePlanet(planet) {
    const newPlanet = planet;
    this._spacePlanets.push(newPlanet);

  }

  get parentGalaxy() {
    return this._parentGalaxy;
  }

  get spacePlanets() {
    return this._spacePlanets;
  }
}
