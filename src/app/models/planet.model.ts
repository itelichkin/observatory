import {AstronomicalObject} from './astronomical-object.model';
import {Star} from './star.model';

export interface PlanetAdapter<T> {
  getParentStar(planet: Planet<T>): Promise<Star<T>>;
}

export class Planet<T> extends AstronomicalObject {
  protected _satellites: Array<AstronomicalObject>;
  protected _parentStar: Star<T>;
  protected _isStar: boolean;
  protected rings: number;

  constructor(id: number, name: string, weight: number, diameter: number, acceleration: number, speed: number,
              discoverer: string, isStar: boolean, rings: number) {
    super(id, name, weight, diameter, acceleration, speed, discoverer);
    this._isStar = isStar;
    this.rings = rings;
  }

  addSatellite(candidate: AstronomicalObject) {
    if (candidate) {
      this._satellites.push(candidate);
    }
  }

  get isStar() {
    return this._isStar;
  }

  get parentStar() {
    return this._parentStar;
  }

  get satellites() {
    return this._satellites;
  }
}
