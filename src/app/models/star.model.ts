import {Planet} from './planet.model';
import {AstronomicalObject} from './astronomical-object.model';

export class Star extends AstronomicalObject {
  private _childrenPlanets: Array<Planet>;
  private _isStar: boolean;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, isStar: boolean) {
    super(id, name, weight, speed, discoverer, position, size, imageName);
    this._isStar = isStar;
    this._childrenPlanets = [];
  }

  addChildrenPlanet(planet) {
    const newPlanet = new Planet(planet.id, planet.name, planet.weight, planet.speed, planet.discoverer,
      planet.position, planet.size, planet.imageName, false, this, planet.rings, planet.parentRadius, planet.angle, planet.orbitSpeed);
    this._childrenPlanets.push(newPlanet);
  }

  get isStar() {
    return this._isStar;
  }

  get childrenPlanets() {
    return this._childrenPlanets;
  }

}
