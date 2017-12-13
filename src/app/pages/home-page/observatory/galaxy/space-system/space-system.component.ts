import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GalaxyModel} from '../../../../../models/galaxy.model';
import {SpaceSystemModel} from '../../../../../models/space-system.model';
import {AppComponent} from '../../../../../app.component';
import {ApiService} from '../../../../../services/api.service';
import {Planet} from '../../../../../models/planet.model';
import {AstronomicalObjectType} from '../../../../../types/types';

@Component({
  selector: 'app-space-system',
  templateUrl: './space-system.component.html',
  styleUrls: ['./space-system.component.scss']
})
export class SpaceSystemComponent implements OnInit {
  systemId: number;
  selectedSystem: SpaceSystemModel;
  selectedSpaceObject: AstronomicalObjectType;
  isDataLoading: boolean;

  constructor(private route: ActivatedRoute,
              private app: AppComponent,
              private apiService: ApiService) {
    this.route.params.subscribe((param) => {
      if (param['id']) {
        this.systemId = +param['id'];
      }
    });
  }

  async ngOnInit() {
    this.isDataLoading = true;
    this.selectedSystem = this.app.selectedSystem;
    if (!this.selectedSystem) {
      await this.app.reStoreSystem(this.systemId);
      this.selectedSystem = this.app.selectedSystem;
    }
    if (!this.selectedSystem) {
      this.isDataLoading = false;
      return;
    }
    const star = await this.apiService.getCentralStar(this.systemId);
    if (!star) {
      this.isDataLoading = false;
      return;
    }
    this.selectedSystem.addCentralStar(star);
    const spacePlanets = await this.apiService.getSpacePlanets(this.systemId);
    spacePlanets.forEach((planet) => {
      this.selectedSystem.centralStar.addChildrenPlanet(planet);
    });
    this.isDataLoading = false;
  }

  selectPlanet(planet) {
    this.selectedSpaceObject = planet ? planet : null;
  }

}
