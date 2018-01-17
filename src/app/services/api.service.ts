import {Injectable} from '@angular/core';
import {
  AstronomicalObjectType, GalaxyObjectType, GlobalAstronomicalObjectType,
  SystemObjectType
} from '../types/types';
import {GalaxyModel} from '../models/galaxy.model';

const SPACE_OBJECT_KEY = 'SPACE_OBJECTS';
const SPACE_OBJECT_ID_KEY = 'SPACE_OBJECTS_ID';

@Injectable()
export class ApiService {
  globalAstronomicalObjects: GlobalAstronomicalObjectType[] = [
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
      galaxiesAmount: 1600000,
      age: '13.799 billion years',
      averageTemperature: '2.72548 K',
      diameter: '47.8 – 170 billion parsecs',
      type: 'Universe',
      isUniverse: true
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
      diameter: '100–180k light years',
      numberOfStars: '100–400 billion',
      thickness: '2k light years',
      type: 'Galaxy',
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
      diameter: '220k light years',
      numberOfStars: '1 trillion',
      thickness: '260k light years',
      type: 'Galaxy',
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
      diameter: '14000 light years',
      numberOfStars: '30 billion',
      thickness: 'unknown',
      type: 'Galaxy',
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
      type: 'System',
      isSystem: true,
      imageName: 'solar-star',
      age: '4,5682 billion years',
      starsAmount: '1',
      planetsAmount: '8',
      dwarfPlanetAmount: '5',
      satellitesAmount: `415 (172 - planets' & 243 - small bodies'`,
      smallBodyAmount: 'over 700k',
      cometAmount: '3441'
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
      type: 'System',
      isSystem: true,
      imageName: 'orange-star',
      age: '10 million years',
      starsAmount: 'unknown',
      planetsAmount: 'unknown',
      dwarfPlanetAmount: 'unknown',
      satellitesAmount: 'unknown',
      smallBodyAmount: 'unknown',
      cometAmount: 'unknown'
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
      type: 'System',
      isSystem: true,
      imageName: 'yellow-star',
      age: 'unknown',
      starsAmount: '1',
      planetsAmount: 'unknown',
      dwarfPlanetAmount: 'unknown',
      satellitesAmount: 'unknown',
      smallBodyAmount: 'unknown',
      cometAmount: 'unknown'
    }, {
      id: 8,
      name: 'Kefron',
      weight: 2.3,
      speed: 26,
      discoverer: null,
      galaxyId: 2,
      position: {
        x: this.setPositionX(),
        y: this.setPositionY()
      },
      type: 'System',
      isSystem: true,
      imageName: 'blue-star',
      age: 'unknown',
      starsAmount: '1',
      planetsAmount: 'unknown',
      dwarfPlanetAmount: 'unknown',
      satellitesAmount: 'unknown',
      smallBodyAmount: 'unknown',
      cometAmount: 'unknown'
    }, {
      id: 9,
      name: 'Sun',
      weight: 1,
      speed: 2.2,
      discoverer: null,
      systemId: 5,
      position: {
        x: 600,
        y: 380
      },
      size: {
        width: 105,
        height: 100
      },
      type: 'Star',
      isStar: true,
      imageName: 'sun'
    },
    {
      id: 10,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'mercury',
      parentRadius: 70,
      angle: 90,
      orbitSpeed: 88
    },
    {
      id: 11,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'venus',
      parentRadius: 100,
      angle: 90,
      orbitSpeed: 116
    },
    {
      id: 12,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'earth',
      parentRadius: 133,
      angle: 90,
      orbitSpeed: 365
    },
    {
      id: 13,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'mars',
      parentRadius: 160,
      angle: 90,
      orbitSpeed: 687
    },
    {
      id: 14,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'jupiter',
      parentRadius: 200,
      angle: 90,
      orbitSpeed: 4343
    },
    {
      id: 15,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'saturn',
      parentRadius: 300,
      angle: 90,
      orbitSpeed: 10759
    },
    {
      id: 16,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'uranus',
      parentRadius: 350,
      angle: 90,
      orbitSpeed: 30660
    },
    {
      id: 17,
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
      type: 'Planet',
      isPlanet: true,
      imageName: 'neptune',
      parentRadius: 400,
      angle: 90,
      orbitSpeed: 60148
    }
  ];
  local = window.localStorage;

  constructor() {
    const allObjects = JSON.parse(this.local.getItem(SPACE_OBJECT_KEY));
    if (!allObjects) {
      this.local.setItem(SPACE_OBJECT_KEY, JSON.stringify(this.globalAstronomicalObjects));
      const id = this.globalAstronomicalObjects[this.globalAstronomicalObjects.length - 1].id;
      this.local.setItem(SPACE_OBJECT_ID_KEY, JSON.stringify(id));
    }
  }

  saveObjectById(data) {
    const allObjects: any[] = JSON.parse(this.local.getItem(SPACE_OBJECT_KEY));
    allObjects.some((obj) => {
      if (data.id === obj.id) {
        obj = data;
        return true;
      }
    });
    this.local.setItem(SPACE_OBJECT_KEY, JSON.stringify(allObjects));
  }

  getAllObjects() {
    return JSON.parse(this.local.getItem(SPACE_OBJECT_KEY));
  }

  getObjectById(id: number) {
    let result;
    const allObjects: any[] = JSON.parse(this.local.getItem(SPACE_OBJECT_KEY));
    allObjects.some((obj) => {
      if (id === obj.id) {
        result = obj;
        return true;
      }
    });
    return result;
  }

  async getAllSpaceObjects() {
    const result = this.getAllObjects();
    return result;
  }

  async getSpaceObjectById(id: number) {
    return this.getObjectById(id);
  }

  async createNewSpaceObject(data) {
    const allObj = this.getAllObjects();
    data['id'] = JSON.parse(this.local.getItem(SPACE_OBJECT_ID_KEY)) + 1;
    allObj.push(data);
    this.local.setItem(SPACE_OBJECT_ID_KEY, JSON.stringify(data['id']));
    this.local.setItem(SPACE_OBJECT_KEY, JSON.stringify(allObj));
    return true;
  }

  async editSpaceObject(data) {
    this.saveObjectById(data);
    return true;
  }

  async deleteSpaceObject(id: number) {
    const allObj = this.getAllObjects();
    allObj.some((obj, index) => {
      if (obj.id === id) {
        allObj.splice(index, 1);
        return true;
      }
    });
    this.local.setItem(SPACE_OBJECT_KEY, JSON.stringify(allObj));
  }

  async getUniverse(): Promise<AstronomicalObjectType> {
    return this._getUniverse();
  }

  async getGalaxies(): Promise<Array<GalaxyObjectType>> {
    return this._getGalaxies();
  }

  async getGalaxyById(galaxyId: number): Promise<GalaxyModel> {
    return await this._getGalaxyById(galaxyId);
  }

  async getSpaceSystems(galaxyId: number): Promise<SystemObjectType[]> {
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
    const allObj = this.getAllObjects();
    allObj.some((obj) => {
      if (obj.isUniverse) {
        universe = obj;
        return true;
      }
    });
    return universe;
  }

  private async _getGalaxies() {
    const galaxies = [];
    const allObj = this.getAllObjects();
    allObj.forEach((obj) => {
      if (obj.isGalaxy) {
        galaxies.push(obj);
      }
    });
    return galaxies;
  }

  private _getGalaxyById(galaxyId: number) {
    let galaxy;
    const allObj = this.getAllObjects();
    allObj.some((obj) => {
      if (obj.isGalaxy && obj.id === galaxyId) {
        galaxy = obj;
        return true;
      }
    });
    return galaxy;
  }

  private _getSpaceSystems(galaxyId: number) {
    const _system = [];
    const allObj = this.getAllObjects();
    allObj.forEach((obj) => {
      if (obj.isSystem && obj.galaxyId === galaxyId) {
        _system.push(obj);
      }
    });
    return _system;
  }

  private _getSystemById(systemId: number) {
    let system;
    const allObj = this.getAllObjects();
    allObj.some((obj) => {
      if (obj.isSystem && obj.id === systemId) {
        system = obj;
        return true;
      }
    });
    return system;
  }

  private _getCentralStar(systemId: number) {
    let star;
    const allObj = this.getAllObjects();
    allObj.some((obj) => {
      if (obj.isStar && obj.systemId === systemId) {
        star = obj;
        return true;
      }
    });
    return star;
  }

  private _getSpacePlanets(systemId: number) {
    const planets = [];
    const allObj = this.getAllObjects();
    allObj.forEach((obj) => {
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
