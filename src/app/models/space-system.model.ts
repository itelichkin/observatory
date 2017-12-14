import {AstronomicalObjectModel} from './astronomical-object.model';
import {StarModel} from './star.model';
import {PlanetModel} from './planet.model';

export class SpaceSystemModel extends AstronomicalObjectModel {
  private _parentGalaxy: AstronomicalObjectModel;
  private _spacePlanets: Array<any>;
  private _centralStar: StarModel;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, size: { width: number, height: number },
              imageName, parentGalaxy) {
    super(id, name, weight, speed, discoverer, position, size, imageName);
    this._parentGalaxy = parentGalaxy;
    this._spacePlanets = [];
  }

  addCentralStar(star) {
    this._centralStar = new StarModel(star.id, star.name, star.weight, star.speed, star.discoverer,
      star.position, star.size, star.imageName, true);
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
