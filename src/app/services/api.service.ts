import {forwardRef, Inject, Injectable} from '@angular/core';
import {
  AstronomicalObjectType, GalaxyObjectType, SystemObjectType } from '../types/types';
import {GalaxyModel} from '../models/galaxy.model';
import {HttpClientService} from './http-client.service';

@Injectable()
export class ApiService {
  /*globalAstronomicalObjects: GlobalAstronomicalObjectType[] = [
    {
      id: '1',
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
  ];*/
 /* observers = [
    {id: 1, name: 'Ukraine', observablePlanets: [10, 11, 14, 15]},
    {id: 2, name: 'USA', observablePlanets: [14, 15, 16]},
    {id: 3, name: 'CANADA', observablePlanets: [11]},
    {id: 4, name: 'France', observablePlanets: [10]},
  ];*/

  constructor(@Inject(forwardRef(() => HttpClientService)) private httpClientService: HttpClientService) {
  }

  async getAllSpaceObjects(): Promise<any> {
    const result = await this.httpClientService.get('/space-objects');
    return JSON.parse(result.body);
  }

  async getSpaceObjectById(type: string, id: string) {
    const options = {id, type};
    const result = await this.httpClientService.get(`/space-object`, options);
    return JSON.parse(result.body);
  }

  async createNewSpaceObject(data) {
    const result = await this.httpClientService.post(`/space-objects`, data);
    return JSON.parse(result.body);
  }

  async editSpaceObject(data) {
    const result = await this.httpClientService.post(`/space-object`, data);
    return JSON.parse(result.body);
  }

  async deleteSpaceObject(id: string, type: string) {
    const options = {id, type};
    const result = await this.httpClientService.delete(`/space-object`, options);
    return JSON.parse(result.body);
  }

  async getUniverse(): Promise<AstronomicalObjectType> {
    const result = await this.httpClientService.get('/universe');
    return JSON.parse(result.body);
  }

  async getGalaxies(): Promise<Array<GalaxyObjectType>> {
    const result = await this.httpClientService.get('/galaxies');
    return JSON.parse(result.body);
  }

  async getGalaxyById(galaxyId: string): Promise<GalaxyModel> {
    const options = {id: galaxyId};
    const result = await this.httpClientService.get(`/galaxy`, options);
    return JSON.parse(result.body);
  }

  async getSystems(): Promise<SystemObjectType[]> {
    const result = await this.httpClientService.get(`/systems`);
    return JSON.parse(result.body);
  }

  async getSystemsByGalaxyId(galaxyId: string): Promise<SystemObjectType[]> {
    const options = {id: galaxyId};
    const result = await this.httpClientService.get(`/galaxy/systems`, options);
    return JSON.parse(result.body);
  }

  async getSystemById(systemId: string): Promise<any> {
    const options = {id: systemId};
    const result = await this.httpClientService.get(`/system`, options);
    return JSON.parse(result.body);
  }

  async getCentralStarsBySystemId(systemId: string) {
    const options = {id: systemId};
    const result = await this.httpClientService.get(`/system/central-stars`, options);
    return JSON.parse(result.body);
  }

  async getSpacePlanetsBySystemId(systemId: string): Promise<any> {
    const options = {id: systemId};
    const result = await this.httpClientService.get(`/system/planets`, options);
    return JSON.parse(result.body);
  }

  async getAllSystems(): Promise<any> {
    const result = await this.httpClientService.get(`/systems`);
    return JSON.parse(result.body);
  }

  async getAllGalaxies(): Promise<any> {
    const result = await this.httpClientService.get(`/galaxies`);
    return JSON.parse(result.body);
  }

  async getAllObservers() {
    const result = await this.httpClientService.get(`/observers`);
    return JSON.parse(result.body);
  }

  async setObservedPlanet(data: {observerId: string, planetId: string}) {
    const result = await this.httpClientService.post(`/observers`, data);
    return JSON.parse(result.body);
  }

}
