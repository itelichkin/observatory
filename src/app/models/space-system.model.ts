import {AstronomicalObject} from './astronomical-object.model';
import {Star} from './star.model';
import {Planet} from './planet.model';

export class SpaceSystemModel extends AstronomicalObject {
  private _parentGalaxy: AstronomicalObject;
  private _spacePlanets: Array<any>;
  private _centralStar: Star;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, parentGalaxy) {
    super(id, name, weight, speed, discoverer, position);
    this._parentGalaxy = parentGalaxy;
    this._spacePlanets = [];
  }

  addSpacePlanet(planet) {
    this.centralStar.addChildrenPlanet(planet);
    const newPlanet = new Planet(planet.id, planet.name, planet.weight, planet.speed, planet.discoverer,
      planet.position, false, planet.rings);
    this._spacePlanets.push(newPlanet);
  }

  addCentralStar(star) {
    this._centralStar = new Star(star.id, star.name, star.weight, star.speed, star.discoverer,
      star.position, true, null);
  }

  get parentGalaxy() {
    return this._parentGalaxy;
  }

  get spacePlanets() {
    return this._spacePlanets;
  }

  get centralStar() {
    return this._centralStar;
  }

}
