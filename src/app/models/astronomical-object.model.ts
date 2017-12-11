export class AstronomicalObject {
  private _id: number;
  private _name: string;
  private _weight: number;
  private _speed: number;
  private _discoverer: string;
  private _position: { x: number, y: number };


  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }) {
    this._id = id;
    this._name = name;
    this._weight = weight;
    this._speed = speed;
    this._discoverer = discoverer;
    this._position = position;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get weight() {
    return this._weight;
  }

  get speed() {
    return this._speed;
  }

  get discoverer() {
    return this._discoverer;
  }

  get position() {
    return this._position;
  }

  set position(value: { x: number, y: number }) {
    this._position = value;
  }


}
