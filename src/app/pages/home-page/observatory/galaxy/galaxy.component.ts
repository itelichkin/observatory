import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {AstronomicalObjectType, SystemObjectType} from '../../../../types/types';
import {GalaxyModel} from '../../../../models/galaxy.model';
import {SpaceSystemModel} from '../../../../models/space-system.model';
import {AppComponent} from '../../../../app.component';
import {UniverseModel} from '../../../../models/universe.model';

@Component({
  selector: 'app-galaxy',
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.scss']
})
export class GalaxyComponent implements OnInit {
  galaxyId: number;
  selectedGalaxy: GalaxyModel;
  selectedSystem: SpaceSystemModel;
  universe: UniverseModel;
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
    this.universe = this.app.universe;
    const spaceSystems: SystemObjectType[] = await this.apiService.getSpaceSystems(this.galaxyId);
    spaceSystems.forEach((system) => {
      this.selectedGalaxy.addSpaceSystems(system);
    });
    this.isDataLoading = false;
  }

  selectSystem(system) {
    this.selectedSystem = system ? system : null;
    this.app.selectedSystem = system;
  }

  goToUniverse() {
    this.router.navigate([`/observatory/galaxy/${this.selectedGalaxy.id}`]);
  }

  goToSystem() {
    this.router.navigate([`/observatory/galaxy/${this.selectedGalaxy.id}/system/${this.selectedSystem.id}`]);
  }

}
