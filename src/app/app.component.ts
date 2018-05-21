import {Component} from '@angular/core';
import {UniverseModel} from './models/universe.model';
import {GalaxyModel} from './models/galaxy.model';
import {SpaceSystemModel} from './models/space-system.model';
import {ApiService} from './services/api.service';
import {AstronomicalObjectType, UniverseObjectType} from './types/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  private _universe: UniverseModel;
  private _selectedGalaxy: GalaxyModel;
  private _selectedSystem: SpaceSystemModel;

  constructor(private apiService: ApiService) {
  }

  get universe() {
    return this._universe;
  }

  set universe(value) {
    this._universe = value;
  }

  get selectedGalaxy() {
    return this._selectedGalaxy;
  }

  set selectedGalaxy(value) {
    this._selectedGalaxy = value;
  }

  get selectedSystem() {
    return this._selectedSystem;
  }

  set selectedSystem(value) {
    this._selectedSystem = value;
  }

  async reStoreGalaxy(galaxyId: string) {
    const universe: UniverseObjectType = await this.apiService.getUniverse();
    this.universe = new UniverseModel(universe.id, universe.name, universe.weight,
      universe.speed, universe.discoverer, universe.position, universe.size, universe.galaxiesAmount, universe.age,
      universe.averageTemperature, universe.diameter);
    const galaxies = await this.apiService.getGalaxies();
    galaxies.forEach((galaxy) => {
      this.universe.addGalaxy(galaxy);
    });
    this.universe.spaceGalaxies.forEach((galaxy) => {
      if (galaxy.id === galaxyId) {
        this.selectedGalaxy = galaxy;
      }
    });
  }

  async reStoreSystem(systemId: string) {
    const system = await this.apiService.getSystemById(systemId);
    if (system) {
      await this.reStoreGalaxy(system.galaxyId);
      this.selectedSystem = new SpaceSystemModel(system.id, system.name, system.weight, system.speed,
        system.discoverer, system.position, system.size, system.imageName, this.selectedGalaxy, system.age,
        system.starsAmount, system.planetsAmount, system.dwarfPlanetAmount, system.satellitesAmount,
        system.smallBodyAmount, system.cometAmount);
    }
  }


}
