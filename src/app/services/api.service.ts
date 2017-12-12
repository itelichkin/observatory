import {Injectable} from '@angular/core';
import {AstronomicalObjectType} from '../types/types';
import {GalaxyModel} from '../models/galaxy.model';
import {SpaceSystemModel} from '../models/space-system.model';

@Injectable()
export class ApiService {
  globalAstronomicalObjects: AstronomicalObjectType[] = [
    {
      id: 1,
      name: 'Universe',
      weight: null,
      speed: null,
      discoverer: null,
      position: {
        x: null,
        y: null
      },
      isUniverse: true,
    },
    {
      id: 2,
      name: 'Milky Way',
      weight: 480000000000,
      speed: 552,
      discoverer: 'William Herschel',
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      isGalaxy: true
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
      },
      isGalaxy: true
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
      },
      isGalaxy: true
    },
    {
      id: 5,
      name: 'Solar System',
      weight: 1.0014,
      speed: 250,
      discoverer: null,
      galaxyId: 2,
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      isSystem: true,
      imageName: 'solar-star'
    },
    {
      id: 6,
      name: 'Betelgeuse',
      weight: 15,
      speed: 22,
      discoverer: null,
      galaxyId: 2,
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      isSystem: true,
      imageName: 'orange-star'
    },
    {
      id: 7,
      name: 'Antares',
      weight: 1.24,
      speed: 3.4,
      discoverer: 'Johann Tobias Bürg',
      galaxyId: 2,
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      isSystem: true,
      imageName: 'yellow-star'
    }, {
      id: 7,
      name: 'Kefron',
      weight: 2.3,
      speed: 26,
      discoverer: null,
      galaxyId: 2,
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      isSystem: true,
      imageName: 'blue-star'
    }
  ];

  constructor() {
  }

  async getUniverse(): Promise<AstronomicalObjectType> {
    return this._getUniverse();
  }


  async getGalaxies(): Promise<Array<AstronomicalObjectType>> {
    return this._getGalaxies();
  }

  async getGalaxyById(galaxyId: number): Promise<GalaxyModel> {
    return await this._getGalaxyById(galaxyId);
  }

  async getSpaceSystems(galaxyId: number): Promise<SpaceSystemModel[]> {
    return this.getGalaxySpaceSystems(galaxyId);
  }

  async getSystemById(systemId: number): Promise<any> {
    return await this._getSystemById(systemId);
  }

  async getSpacePlanets(systemId: number): Promise<any> {
    return await this._getSpacePlanets(systemId);
  }

  async getParentStar(): Promise<any> {
    return await null;
  }

  async getChildrenPlanet(): Promise<any> {
    return await null;
  }

  private getGalaxySpaceSystems(galaxyId: number) {
    const _system = [];
    this.globalAstronomicalObjects.forEach((obj) => {
      if (obj.isSystem && obj.galaxyId === galaxyId) {
        _system.push(obj);
      }
    });
    return _system;
  }

  private async _getUniverse() {
    let universe;
    this.globalAstronomicalObjects.forEach((obj) => {
      if (obj.isUniverse) {
        universe = obj;
      }
    });
    return universe;
  }

  private async _getGalaxies() {
    const galaxies = [];
    this.globalAstronomicalObjects.forEach((obj) => {
      if (obj.isGalaxy) {
        galaxies.push(obj);
      }
    });
    return galaxies;
  }

  private _getGalaxyById(galaxyId: number) {
    let galaxy;
    this.globalAstronomicalObjects.some((obj) => {
      if (obj.isGalaxy && obj.id === galaxyId) {
        galaxy = obj;
        return true;
      }
    });
    return galaxy;
  }

  private _getSystemById(systemId: number) {
    let system;
    this.globalAstronomicalObjects.some((obj) => {
      if (obj.isSystem && obj.id === systemId) {
        system = obj;
        return true;
      }
    });
    return system;
  }

  private _getSpacePlanets(systemId: number) {
    const planets = [];
    this.globalAstronomicalObjects.forEach((obj) => {
      if (obj.isPlanet && obj.systemId === systemId) {
        planets.push(obj);
      }
    });
    return planets;
  }

  private setPositionX() {
    return Math.floor(Math.random() * (1100 - 300)) + 300;
  }

  private setPositionY() {
    return Math.floor(Math.random() * (500 - 10)) + 10;
  }

}
