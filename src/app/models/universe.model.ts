import {AstronomicalObjectModel} from './astronomical-object.model';
import {GalaxyModel} from './galaxy.model';
import {GalaxyObjectType} from '../types/types';

export class UniverseModel extends AstronomicalObjectModel {
  private _spaceGalaxies: Array<GalaxyModel>;
  private _galaxiesAmount: number;
  private _age: string;
  private _averageTemperature: string;
  private _diameter: string;


  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number },
              size: { width: number, height: number }, galaxiesAmount: number, age: string, averageTemperature: string,
              diameter: string) {
    super(id, name, weight, speed, discoverer, position, size, null);
    this._spaceGalaxies = [];
    this._galaxiesAmount = galaxiesAmount;
    this._age = age;
    this._averageTemperature = averageTemperature;
    this._diameter = diameter;
  }

  addGalaxy(galaxy: GalaxyObjectType) {
    const newGalaxy = new GalaxyModel(galaxy.id, galaxy.name, galaxy.weight, galaxy.speed, galaxy.discoverer,
      galaxy.position, galaxy.size, this, galaxy.diameter, galaxy.numberOfStars, galaxy.thickness);
    this._spaceGalaxies.push(newGalaxy);
  }

  get spaceGalaxies() {
    return this._spaceGalaxies;
  }

  get galaxiesAmount() {
    return this._galaxiesAmount;
  }

  get age() {
    return this._age;
  }

  get averageTemperature() {
    return this._averageTemperature;
  }

  get diameter() {
    return this._diameter;
  }
}
