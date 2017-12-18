import {AstronomicalObjectModel} from './astronomical-object.model';
import {StarModel} from './star.model';
import {PlanetModel} from './planet.model';

export class SpaceSystemModel extends AstronomicalObjectModel {
  private _parentGalaxy: AstronomicalObjectModel;
  private _spacePlanets: Array<any>;
  private _centralStar: StarModel;
  private _age: string;
  private _starsAmount: string;
  private _planetsAmount: string;
  private _dwarfPlanetAmount: string;
  private _satellitesAmount: string;
  private _smallBodyAmount: string;
  private _cometAmount: string;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, size: { width: number, height: number },
              imageName, parentGalaxy, age: string, starsAmount: string, planetsAmount: string,
              dwarfPlanetAmount: string, satellitesAmount: string, smallBodyAmount: string, cometAmount: string) {
    super(id, name, weight, speed, discoverer, position, size, imageName);
    this._parentGalaxy = parentGalaxy;
    this._spacePlanets = [];
    this._age = age;
    this._starsAmount = starsAmount;
    this._planetsAmount = planetsAmount;
    this._dwarfPlanetAmount = dwarfPlanetAmount;
    this._satellitesAmount = satellitesAmount;
    this._smallBodyAmount = smallBodyAmount;
    this._cometAmount = cometAmount;
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

  get age() {
    return this._age;
  }

  get starsAmount() {
    return this._starsAmount;
  }

  get planetsAmount() {
    return this._planetsAmount;
  }

  get dwarfPlanetAmount() {
    return this._dwarfPlanetAmount;
  }

  get satellitesAmount() {
    return this._satellitesAmount;
  }

  get smallBodyAmount() {
    return this._smallBodyAmount;
  }

  get cometAmount() {
    return this._cometAmount;
  }

}
