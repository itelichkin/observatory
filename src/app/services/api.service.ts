import {Injectable} from '@angular/core';
import {AstronomicalObjectType} from '../types/types';

@Injectable()
export class ApiService {

  constructor() {
  }

  async getUniverse(): Promise<AstronomicalObjectType> {
    return {
      id: 1,
      name: 'Universe',
      weight: null,
      speed: null,
      discoverer: null,
      positionX: null,
      positionY: null
    };
  }

  async getGalaxies(): Promise<Array<AstronomicalObjectType>> {
    return [
      {
        id: 2,
        name: 'Milky Way',
        weight: 480000000000,
        speed: 552,
        discoverer: 'William Herschel',
        positionX: this.setPositionX(),
        positionY: this.setPositionY()
      },
      {
        id: 3,
        name: 'Andromeda',
        weight: 1230000000000,
        speed: 300,
        discoverer: 'Simon Marius',
        positionX: this.setPositionX(),
        positionY: this.setPositionY()
      },
      {
        id: 4,
        name: 'Large Magellanic Cloud',
        weight: 100000000000,
        speed: null,
        discoverer: 'Amerigo Vespucci',
        positionX: this.setPositionX(),
        positionY: this.setPositionY()
      }
    ];
  }

  async getParentStar(): Promise<any> {
    return await null;
  }

  async getChildrenPlanet(): Promise<any> {
    return await null;
  }

  private setPositionX() {
    return Math.floor(Math.random() * (1400 - 400)) + 400;
  }

  private setPositionY() {
    return Math.floor(Math.random() * (600 - 10)) + 10;
  }

}
