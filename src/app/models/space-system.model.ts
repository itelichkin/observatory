import {SpaceAdapter} from '../adapters/space.adapter';
import {Star} from './star.model';

export class SpaceSystem {
  spaceSystemName: string;

  constructor() {

  }

  createSystem() {


  }

  newStar(options: {
    id: number, name: string, weight: number, diameter: number, acceleration: number,
    speed: number, discoverer: string, isStar: boolean, rings: number
  }) {
    const newStar = new Star(options.id, options.name, options.weight, options.diameter, options.acceleration,
      options.speed, options.discoverer, options.isStar, options.rings);
    return newStar;
  }


}
