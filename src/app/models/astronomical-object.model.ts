export class AstronomicalObject {
  protected _id: number;
  protected _name: string;
  protected _weight: number;
  protected _speed: number;
  protected _discoverer: string;
  protected _positionX: number;
  protected _positionY: number;

  constructor(id: number, name: string, weight: number, speed: number, discoverer: string, positionX: number,
              positionY: number) {
    this._id = id;
    this._name = name;
    this._weight = weight;
    this._speed = speed;
    this._discoverer = discoverer;
    this._positionX = positionX;
    this._positionY = positionY;

  }

  get getName(): string {
    return this._name;
  }

  get getWeight(): number {
    return this._weight;
  }

  get getSpeed(): number {
    return this._speed;
  }

  get getDiscoverer(): string {
    return this._discoverer;
  }

  get positionX(): number {
    return this._positionX;
  }

  get positionY(): number {
    return this._positionY;
  }
}
