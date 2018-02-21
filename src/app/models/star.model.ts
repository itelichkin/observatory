import {PlanetModel} from './planet.model';
import {AstronomicalObjectModel} from './astronomical-object.model';
import {PlanetoidModel} from './planetoid.model';

export class StarModel extends PlanetoidModel {
  private _isStar: boolean;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, isStar: boolean) {
    super(id, name, weight, speed, discoverer, position, size, imageName, null);
    this._isStar = isStar;
  }

  get isStar() {
    return this._isStar;
  }

  addSatelliteObject(planet) {
    this.putSatelliteObject = new PlanetModel(planet.id, planet.name, planet.weight, planet.speed,
      planet.discoverer, planet.position, planet.size, planet.imageName, this,
      planet.rings, planet.parentRadius, planet.angle, planet.orbitSpeed);
  }

  addAllSatelliteObjects(planets) {
    planets.forEach((planet) => {
      this.addSatelliteObject(planet);
    });
  }
}
