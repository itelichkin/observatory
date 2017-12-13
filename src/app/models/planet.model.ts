import {AstronomicalObject} from './astronomical-object.model';
import {Star} from './star.model';

export class Planet extends AstronomicalObject {
  private _satellites: Array<AstronomicalObject>;
  private _parentStar: Star;
  private _isStar: boolean;
  private _rings: number;
  private _angle: number;
  private _positionDefault: { x: number, y: number };
  private _orbitSpeed: number;
  private _parentRadius: number;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, isStar: boolean, parentStar: Star, rings: number, parentRadius: number, angle: number, orbitSpeed: number) {
    super(id, name, weight, speed, discoverer, position, size, imageName);
    this._isStar = isStar;
    this._parentStar = parentStar;
    this._rings = rings;
    this._angle = angle;
    this._parentRadius = parentRadius;
    this._orbitSpeed = orbitSpeed;
    this._positionDefault = position;
    if (this.parentRadius) {
      this.orbitPosition();
    }

  }

  addSatellite(candidate: AstronomicalObject) {
    if (candidate) {
      this._satellites.push(candidate);
    }
  }

  orbitPosition() {
    const s = this.orbitSpeed * Math.PI / 180; // Вычислим угол
    setInterval(() => { // функция движения
      this.angle += s; // приращение аргумента
      this.position.x = (this.parentStar.position.x + this.parentStar.size.width / 3) + this._parentRadius * Math.sin(this.angle);
      this.position.y = (this.parentStar.position.y + this.parentStar.size.height / 3) + this._parentRadius * Math.cos(this.angle);
    }, 50);
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

  get angle() {
    return this._angle;
  }

  set angle(value: number) {
    this._angle = value;
  }

  get parentRadius() {
    return this._parentRadius;
  }

  get orbitSpeed() {
    return this._orbitSpeed;
  }
}
