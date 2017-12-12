import {Planet} from './planet.model';

export class Star extends Planet {
  private _childrenPlanets: Array<Planet>;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, isStar: boolean, rings: number) {
    super(id, name, weight, speed, discoverer, position, isStar, rings);
    this._childrenPlanets = [];
  }

  addChildrenPlanet(planet) {
    const newPlanet = new Planet(planet.id, planet.name, planet.weight, planet.speed, planet.discoverer,
      planet.position, false, planet.rings);
    this._childrenPlanets.push(newPlanet);
  }


  get childrenPlanets() {
    return this._childrenPlanets;
  }

}
