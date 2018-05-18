import {AstronomicalObjectModel} from './astronomical-object.model';
import {UniverseModel} from './universe.model';
import {SpaceSystemModel} from './space-system.model';

export class GalaxyModel extends AstronomicalObjectModel {
  private _spaceSystems: Array<any>;
  private _parentUniverse: UniverseModel;
  private _diameter: string;
  private _numberOfStars: string;
  private _thickness: string;

  constructor(id: string, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, size: { width: number, height: number }, parentUniverse: UniverseModel, diameter: string,
              numberOfStars: string, thickness: string) {
    super(id, name, weight, speed, discoverer, position, size, null);
    this._parentUniverse = parentUniverse;
    this._spaceSystems = [];
    this._diameter = diameter;
    this._numberOfStars = numberOfStars;
    this._thickness = thickness;
  }

  addSpaceSystems(system) {
    const newSystem = new SpaceSystemModel(system.id, system.name, system.weight, system.speed, system.discoverer,
      system.position, system.size, system.imageName, this, system.age, system.starsAmount, system.planetsAmount,
      system.dwarfPlanetAmount, system.satellitesAmount, system.smallBodyAmount, system.cometAmount);
    this._spaceSystems.push(newSystem);
  }

  get spaceSystems() {
    return this._spaceSystems;
  }

  get parentUniverse() {
    return this._parentUniverse;
  }

  get diameter() {
    return this._diameter;
  }

  get numberOfStars() {
    return this._numberOfStars;
  }

  get thickness() {
    return this._thickness;
  }
}
