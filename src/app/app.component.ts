import {Component} from '@angular/core';
import {UniverseModel} from './models/universe.model';
import {GalaxyModel} from './models/galaxy.model';
import {SpaceSystemModel} from './models/space-system.model';
import {ApiService} from './services/api.service';

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

  async reStoreGalaxy(galaxyId: number) {
    const universe = await this.apiService.getUniverse();
    this.universe = new UniverseModel(universe.id, universe.name, universe.weight, universe.speed, universe.discoverer, null);
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

}
