import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalaxyModel} from '../../../../../models/galaxy.model';
import {SpaceSystemModel} from '../../../../../models/space-system.model';
import {AppComponent} from '../../../../../app.component';
import {ApiService} from '../../../../../services/api.service';
import {Planet} from '../../../../../models/planet.model';

@Component({
  selector: 'app-space-system',
  templateUrl: './space-system.component.html',
  styleUrls: ['./space-system.component.scss']
})
export class SpaceSystemComponent implements OnInit {
  systemId: number;
  selectedSystem: SpaceSystemModel;
  selectedPlanet: Planet;
  isDataLoading: boolean;

  constructor(private route: ActivatedRoute,
              private app: AppComponent,
              private apiService: ApiService) {
    this.route.params.subscribe((param) => {
      this.systemId = +param['id'];
    });
  }

  async ngOnInit() {
    this.isDataLoading = true;
    this.selectedSystem = this.app.selectedSystem;
    if (!this.selectedSystem) {
      await this.app.reStoreSystem(this.systemId);
      this.selectedSystem = this.app.selectedSystem;
    }
    const spacePlanets = await this.apiService.getSpacePlanets(this.systemId);
    spacePlanets.forEach((planet) => {
      this.selectedSystem.addSpacePlanet(planet);
    });
    this.isDataLoading = false;
  }

  selectPlanet(planet) {
    this.selectedPlanet = planet ? planet : null;
  }


}
