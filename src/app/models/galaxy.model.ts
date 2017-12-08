import {AstronomicalObject} from './astronomical-object.model';
import {UniverseModel} from './universe.model';
import {SpaceSystemModel} from './space-system.model';

export class GalaxyModel extends AstronomicalObject {
  protected _spaceSystems: Array<any>;
  protected _parentUniverse: UniverseModel;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string, positionX: number,
              positionY: number, parentUniverse: UniverseModel) {
    super(id, name, weight, speed, discoverer, positionX, positionY);
    this._parentUniverse = parentUniverse;
    this._spaceSystems = [];
  }

  get spaceSystems() {
    return this._spaceSystems;
  }

  addSpaceSystems(system) {
    const newSystem = new SpaceSystemModel(system.id, system.name, system.weight, system.speed, system.discoverer,
      system.positionX, system.positionY, this);
    this._spaceSystems.push(system);
  }

  get parentUniverse() {
    return this._parentUniverse;
  }

}
