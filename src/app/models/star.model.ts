import {Planet} from './planet.model';

export class Star<T> extends Planet<T> {
  private _childrenPlanets: Array<Planet<T>>;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, isStar: boolean, rings: number, position: { x: number, y: number }) {
    super(id, name, weight, speed, discoverer, position, isStar, rings);
  }


  get childrenPlanets() {
    return this._childrenPlanets;
  }

}
