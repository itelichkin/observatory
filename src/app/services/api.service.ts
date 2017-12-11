import {Injectable} from '@angular/core';
import {AstronomicalObjectType} from '../types/types';
import {GalaxyModel} from '../models/galaxy.model';
import {SpaceSystemModel} from '../models/space-system.model';

@Injectable()
export class ApiService {
  spaceSystems = [
    {
      id: 5,
      name: 'Solar System',
      weight: 1.0014,
      speed: 250,
      discoverer: null,
      galaxyId: 2,
      position: {
        x: null,
        y: null
      }
    },
    {
      id: 6,
      name: 'TEST System',
      weight: null,
      speed: null,
      discoverer: null,
      galaxyId: 0,
      position: {
        x: null,
        y: null
      }
    }
  ];

  spaceGalaxies = [
    {
      id: 2,
      name: 'Milky Way',
      weight: 480000000000,
      speed: 552,
      discoverer: 'William Herschel',
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      }
    },
    {
      id: 3,
      name: 'Andromeda',
      weight: 1230000000000,
      speed: 300,
      discoverer: 'Simon Marius',
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      }
    },
    {
      id: 4,
      name: 'Large Magellanic Cloud',
      weight: 100000000000,
      speed: null,
      discoverer: 'Amerigo Vespucci',
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      }
    }
  ];

  constructor() {
  }

  async getUniverse(): Promise<AstronomicalObjectType> {
    return {
      id: 1,
      name: 'Universe',
      weight: null,
      speed: null,
      discoverer: null,
      position: {
        x: null,
        y: null
      }
    };
  }

  async getGalaxies(): Promise<Array<AstronomicalObjectType>> {
    return this.spaceGalaxies;
  }

  async getGalaxyById(galaxyId: number): Promise<GalaxyModel> {
    return await this._getGalaxyById(galaxyId);
  }

  async getSpaceSystems(galaxyId: number): Promise<SpaceSystemModel[]> {
    return this.getGalaxySpaceSystems(galaxyId);
  }

  async getParentStar(): Promise<any> {
    return await null;
  }

  async getChildrenPlanet(): Promise<any> {
    return await null;
  }

  private getGalaxySpaceSystems(galaxyId: number) {
    const _system = [];
    this.spaceSystems.forEach((system) => {
      if (system.galaxyId === galaxyId) {
        _system.push(system);
      }
    });
    return _system;
  }

  private _getGalaxyById(galaxyId: number) {
    let _galaxy;
    this.spaceGalaxies.forEach((galaxy) => {
      if (galaxy.id === galaxyId) {
        _galaxy = galaxy;
      }
    });
    return _galaxy;
  }

  private setPositionX() {
    return Math.floor(Math.random() * (1100 - 300)) + 300;
  }

  private setPositionY() {
    return Math.floor(Math.random() * (500 - 10)) + 10;
  }

}
