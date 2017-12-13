import {AstronomicalObject} from './astronomical-object.model';
import {UniverseModel} from './universe.model';
import {SpaceSystemModel} from './space-system.model';

export class GalaxyModel extends AstronomicalObject {
  private _spaceSystems: Array<any>;
  private _parentUniverse: UniverseModel;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, size: { width: number, height: number }, parentUniverse: UniverseModel) {
    super(id, name, weight, speed, discoverer, position, size, null);
    this._parentUniverse = parentUniverse;
    this._spaceSystems = [];
  }

  addSpaceSystems(system) {
    const newSystem = new SpaceSystemModel(system.id, system.name, system.weight, system.speed, system.discoverer,
      system.position, system.size, system.imageName, this);
    this._spaceSystems.push(newSystem);
  }

  get spaceSystems() {
    return this._spaceSystems;
  }

  get parentUniverse() {
    return this._parentUniverse;
  }

}
