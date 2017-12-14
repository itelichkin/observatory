import {Injectable} from '@angular/core';
import {AstronomicalObjectType, PlanetoidObkectType} from '../types/types';
import {GalaxyModel} from '../models/galaxy.model';
import {SpaceSystemModel} from '../models/space-system.model';

@Injectable()
export class ApiService {
  globalAstronomicalObjects: PlanetoidObkectType[] = [
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
    }, {
      id: 8,
      name: 'Sun',
      weight: 1,
      speed: 2.2,
      discoverer: null,
      systemId: 5,
      position: {
        x: 700,
        y: 380
      },
      size: {
        width: 105,
        height: 100
      },
      isStar: true,
      imageName: 'sun'
    },
    {
      id: 9,
      name: 'Mercury',
      weight: 0.000003,
      speed: null,
      discoverer: null,
      systemId: 5,
      position: {
        x: 510,
        y: 450
      },
      size: {
        width: 15,
        height: 15
      },
      isPlanet: true,
      imageName: 'mercury',
      parentRadius: 70,
      angle: 90,
      orbitSpeed: 8
    },
    {
      id: 10,
      name: 'Venus',
      weight: 0.00004,
      speed: null,
      discoverer: null,
      systemId: 5,
      position: {
        x: 500,
        y: 380
      },
      size: {
        width: 22,
        height: 22
      },
      isPlanet: true,
      imageName: 'venus',
      parentRadius: 95,
      angle: 90,
      orbitSpeed: 7
    },
    {
      id: 11,
      name: 'Earth',
      weight: 0.00006,
      speed: null,
      discoverer: null,
      systemId: 5,
      position: {
        x: 495,
        y: 305
      },
      size: {
        width: 25,
        height: 25
      },
      isPlanet: true,
      imageName: 'earth',
      parentRadius: 130,
      angle: 90,
      orbitSpeed: 6
    },
    {
      id: 12,
      name: 'Mars',
      weight: 0.000006,
      speed: null,
      discoverer: null,
      systemId: 5,
      position: {
        x: 510,
        y: 265
      },
      size: {
        width: 20,
        height: 20
      },
      isPlanet: true,
      imageName: 'mars',
      parentRadius: 160,
      angle: 90,
      orbitSpeed: 5
    },
    {
      id: 13,
      name: 'Jupiter',
      weight: 0.0019,
      speed: null,
      discoverer: 'Galileo Galilei',
      systemId: 5,
      position: {
        x: 490,
        y: 190
      },
      size: {
        width: 45,
        height: 45
      },
      isPlanet: true,
      imageName: 'jupiter',
      parentRadius: 200,
      angle: 90,
      orbitSpeed: 4
    },
    {
      id: 14,
      name: 'Saturn',
      weight: 0.0006,
      speed: null,
      discoverer: 'Robert Hooke',
      systemId: 5,
      position: {
        x: 455,
        y: 120
      },
      size: {
        width: 90,
        height: 40
      },
      isPlanet: true,
      imageName: 'saturn',
      parentRadius: 260,
      angle: 90,
      orbitSpeed: 4.5
    },
    {
      id: 15,
      name: 'Uranus',
      weight: 0.0008,
      speed: null,
      discoverer: 'William Herschel',
      systemId: 5,
      position: {
        x: 500,
        y: 65
      },
      size: {
        width: 32,
        height: 32
      },
      isPlanet: true,
      imageName: 'uranus',
      parentRadius: 350,
      angle: 90,
      orbitSpeed: 3
    },
    {
      id: 16,
      name: 'Neptune',
      weight: 0.0001,
      speed: null,
      discoverer: 'Urbain Le Verrier',
      systemId: 5,
      position: {
        x: 500,
        y: 10
      },
      size: {
        width: 30,
        height: 30
      },
      isPlanet: true,
      imageName: 'neptune',
      parentRadius: 400,
      angle: 90,
      orbitSpeed: 2
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
    return this._getSpaceSystems(galaxyId);
  }

  async getSystemById(systemId: number): Promise<any> {
    return await this._getSystemById(systemId);
  }

  async getCentralStar(systemId: number) {
    return await this._getCentralStar(systemId);
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

  private _getSpaceSystems(galaxyId: number) {
    const _system = [];
    this.globalAstronomicalObjects.forEach((obj) => {
      if (obj.isSystem && obj.galaxyId === galaxyId) {
        _system.push(obj);
      }
    });
    return _system;
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

  private _getCentralStar(systemId: number) {
    let star;
    this.globalAstronomicalObjects.some((obj) => {
      if (obj.isStar && obj.systemId === systemId) {
        star = obj;
        return true;
      }
    });
    return star;
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
