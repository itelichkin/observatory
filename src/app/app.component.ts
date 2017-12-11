import {Component} from '@angular/core';
import {UniverseModel} from './models/universe.model';
import {GalaxyModel} from './models/galaxy.model';
import {SpaceSystemModel} from './models/space-system.model';

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

  constructor() {
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

}
