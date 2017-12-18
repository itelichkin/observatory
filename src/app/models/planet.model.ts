import {AstronomicalObjectModel} from './astronomical-object.model';
import {StarModel} from './star.model';
import {PlanetoidModel} from './planetoid.model';
import {SatelliteModel} from './satellite.model';

export class PlanetModel extends PlanetoidModel {
  private _rings: number;
  private _angle: number;
  private _orbitSpeedIndex: number;
  private _parentRadius: number;
  private _isPlanet: boolean;
  private _onMove: boolean;
  private _orbitSpeed: number;
  protected _intervalWatcher;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, position: { x: number, y: number }, size: { width: number, height: number },
              imageName, parentObject: any, rings: number, parentRadius: number, angle: number,
              orbitSpeed: number) {
    super(id, name, weight, speed, discoverer, position, size, imageName, parentObject);
    this._rings = rings;
    this._angle = angle;
    this._parentRadius = parentRadius;
    this._orbitSpeed = orbitSpeed;
    this._isPlanet = true;
    this._onMove = false;
    this._orbitSpeedIndex = 4;
    this.setPosition();
    this.orbitPosition();

  }

  orbitPosition() {
    this._intervalWatcher = setInterval(() => {
      const s = (287.5 * this._orbitSpeedIndex) / this.orbitSpeed * Math.PI / 180;
      if (this._onMove) {
        this.angle += s;
        this.setPosition();
      }
    }, 50);
  }

  private setPosition() {
    this.position.x = (this.parentObject.position.x + this.parentObject.size.width / 2 - this.size.width + 5) +
      this._parentRadius * Math.sin(this.angle);
    this.position.y = (this.parentObject.position.y + this.parentObject.size.height / 2 - this.size.height + 5) +
      this._parentRadius * Math.cos(this.angle);
  }

  addSatelliteObject(satellite) {
    this.putSatelliteObject = new SatelliteModel(satellite.id, satellite.name, satellite.weight, satellite.speed,
      satellite.discoverer, satellite.position, satellite.size, satellite.imageName, this);
  }

  addAllSatelliteObjects(satellites) {
    satellites.forEach((satellite) => {
      this.addSatelliteObject(satellite);
    });
  }

  setOrbitSpeedIndex(speedIndex: number) {
    this._orbitSpeedIndex = speedIndex;
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

  get isPlanet() {
    return this._isPlanet;
  }


}
