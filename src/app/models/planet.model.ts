import {AstronomicalObject} from './astronomical-object.model';
import {Star} from './star.model';

export class Planet extends AstronomicalObject {
  private _satellites: Array<AstronomicalObject>;
  private _parentStar: Star;
  private _isStar: boolean;
  private _rings: number;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, isStar: boolean, rings: number) {
    super(id, name, weight, speed, discoverer, position);
    this._isStar = isStar;
    this._rings = rings;
  }

  addSatellite(candidate: AstronomicalObject) {
    if (candidate) {
      this._satellites.push(candidate);
    }
  }

  get satellites() {
    return this._satellites;
  }

  get parentStar() {
    return this._parentStar;
  }

  get isStar() {
    return this._isStar;
  }

  get rings() {
    return this._rings;
  }

}
