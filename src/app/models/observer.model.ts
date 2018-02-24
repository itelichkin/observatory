export class ObserverModel {
  private _id: number;
  private _name: string;
  private _observablePlanets: number[];

  constructor(id: number, name: string, observablePlanets: number[]) {
    this._id = id;
    this._name = name;
    this._observablePlanets = observablePlanets || [];
  }

  addObservablePlanet(planetId: number) {
    this._observablePlanets.push(planetId);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get observablePlanets() {
    return this._observablePlanets;
  }

}
