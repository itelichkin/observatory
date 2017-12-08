import {Planet} from './planet.model';
import {SpaceAdapter} from '../adapters/space.adapter';
import {ApiService} from '../services/api.service';

export interface StarAdapter<T> {
  getChildrenPlanet(star: Star<T>): Promise<Star<T>>;
}

export class Star<T> extends Planet<T> {
  protected _childrenPlanets: Array<Planet<T>>;

  constructor(id: number, name: string, weight: number, speed: number,
              discoverer: string, isStar: boolean, rings: number, positionX: number,
              positionY: number) {
    super(id, name, weight, speed, discoverer, positionX, positionY, isStar, rings);
  }

  get childrenPlanets() {
    return this._childrenPlanets;
  }

}
