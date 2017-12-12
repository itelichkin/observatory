import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {AstronomicalObjectType} from '../../../../types/types';
import {GalaxyModel} from '../../../../models/galaxy.model';
import {SpaceSystemModel} from '../../../../models/space-system.model';
import {AppComponent} from '../../../../app.component';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements OnInit {
  galaxyId: number;
  selectedGalaxy: GalaxyModel;
  selectedSystem: SpaceSystemModel;
  isDataLoading: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,
              private app: AppComponent) {
    this.route.params.subscribe((param) => {
      if (param['id']) {
        this.galaxyId = +param['id'];
      }
    });
  }

  async ngOnInit() {
    this.isDataLoading = true;
    this.selectedGalaxy = this.app.selectedGalaxy;
    if (!this.selectedGalaxy) {
      await this.app.reStoreGalaxy(this.galaxyId);
      this.selectedGalaxy = this.app.selectedGalaxy;
    }
    const spaceSystems = await this.apiService.getSpaceSystems(this.galaxyId);
    spaceSystems.forEach((system) => {
      this.selectedGalaxy.addSpaceSystems(system);
    });
    this.isDataLoading = false;
  }

  selectSystem(system) {
    this.selectedSystem = system ? system : null;
    this.app.selectedSystem = system;
  }

  goToSystem() {
    this.router.navigate([`/observatory/galaxy/${this.selectedGalaxy.id}/system/${this.selectedSystem.id}`]);
  }

}
