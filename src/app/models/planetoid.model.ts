import {AstronomicalObjectModel} from './astronomical-object.model';
import {SatelliteModel} from './satellite.model';
import {StarModel} from './star.model';
import {PlanetModel} from './planet.model';
import {AstronomicalObjectType} from '../types/types';

export class PlanetoidModel extends AstronomicalObjectModel {
  private _satelliteObjects: Array<any>;
  private _parentObject: StarModel | PlanetModel | SatelliteModel;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, parentObject: StarModel | PlanetModel | SatelliteModel) {
    super(id, name, weight, speed, discoverer, position, size, imageName);
    this._satelliteObjects = [];
    this._parentObject = parentObject;
  }

  addSatelliteObject(satellite: PlanetoidModel) {
    const newSat = new PlanetoidModel(satellite.id, satellite.name, satellite.weight, satellite.speed,
      satellite.discoverer, satellite.position, satellite.size, satellite.imageName, satellite.parentObject);
    this._satelliteObjects.push(newSat);
  }

  addAllSatelliteObjects(satellites: PlanetoidModel[]) {
    satellites.forEach((sat) => {
      this.addSatelliteObject(sat);
    });
  }

  get satelliteObjects() {
    return this._satelliteObjects;
  }

  protected set putSatelliteObject(value: any) {
    this._satelliteObjects.push(value);
  }

  get parentObject(): StarModel | PlanetModel | SatelliteModel {
    return this._parentObject;
  }

  set parentObject(value: StarModel | PlanetModel | SatelliteModel) {
    this._parentObject = value;
  }
}
