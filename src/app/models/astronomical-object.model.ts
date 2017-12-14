export class AstronomicalObjectModel {
  private _id: number;
  private _name: string;
  private _weight: number;
  private _speed: number;
  private _discoverer: string;
  private _position: { x: number, y: number };
  private _size: { width: number, height: number };
  private _imageName: string;


  constructor(id: number, name: string, weight: number, speed: number, discoverer: string,
              position: { x: number, y: number }, size, imageName) {
    this._id = id;
    this._name = name;
    this._weight = weight;
    this._speed = speed;
    this._discoverer = discoverer;
    this._position = position;
    this._size = size;
    this._imageName = imageName;
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

  get imageName() {
    return this._imageName;
  }

  get size() {
    return this._size;
  }


}
