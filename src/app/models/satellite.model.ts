import {AstronomicalObjectModel} from './astronomical-object.model';
import {PlanetoidModel} from './planetoid.model';
import {StarModel} from './star.model';
import {PlanetModel} from './planet.model';

export class SatelliteModel extends PlanetoidModel {
/*
  private _parentObject: StarModel | PlanetModel | SatelliteModel;
*/

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, parentObject) {
    super(id, name, weight, speed, discoverer, position, size, imageName, parentObject);
  //  this._parentObject = parentObject;
  }

  /*get parentObject(): StarModel | PlanetModel | SatelliteModel {
    return this._parentObject;
  }

  set parentObject(value: StarModel | PlanetModel | SatelliteModel) {
    this._parentObject = value;
  }*/
}
