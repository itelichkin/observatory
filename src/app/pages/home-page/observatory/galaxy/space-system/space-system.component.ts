import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GalaxyModel} from '../../../../../models/galaxy.model';
import {SpaceSystemModel} from '../../../../../models/space-system.model';
import {AppComponent} from '../../../../../app.component';
import {ApiService} from '../../../../../services/api.service';
import {PlanetModel} from '../../../../../models/planet.model';

@Component({
  selector: 'app-space-system',
  templateUrl: './space-system.component.html',
  styleUrls: ['./space-system.component.scss']
})
export class SpaceSystemComponent implements OnInit, OnDestroy {
  systemId: number;
  selectedGalaxy: GalaxyModel;
  selectedSystem: SpaceSystemModel;
  selectedSpaceObject: PlanetModel;
  isDataLoading: boolean;
  orbitSpeed: number;
  orbitSpeedArray: { key: number, value: string }[];

  constructor(private route: ActivatedRoute,
              private app: AppComponent,
              private apiService: ApiService,
              private router: Router) {
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
    this.selectedGalaxy = this.app.selectedGalaxy;
    const star = await this.apiService.getCentralStar(this.systemId);
    if (!star) {
      this.isDataLoading = false;
      return;
    }
    this.selectedSystem.addCentralStar(star);
    const spacePlanets = await this.apiService.getSpacePlanets(this.systemId);
    this.selectedSystem.centralStar.addAllSatelliteObjects(spacePlanets);
    this.orbitSpeedArray = [
      {key: 1, value: '1/4'},
      {key: 2, value: '1/2'},
      {key: 4, value: 'normal'},
      {key: 8, value: '2'},
      {key: 16, value: '4'},
      {key: 32, value: '8'},
    ];
    this.orbitSpeed = 4;
    this.isDataLoading = false;
  }

  selectPlanet(object) {
    this.selectedSpaceObject = object ? object : null;
  }

  toMove() {
    this.selectedSystem.onMove ? this.selectedSystem.stopOrbitMoving() : this.selectedSystem.startOrbitMoving();
  }

  goToGalaxy() {
    this.router.navigate([`/observatory/galaxy/${this.selectedGalaxy.id}`]);
  }

  setOrbitSpeed() {
    setTimeout(() => {
      this.selectedSystem.setOrbitSpeed(this.orbitSpeed);
    });
  }

  ngOnDestroy() {
    this.app.selectedSystem.destroySystem();
    this.app.selectedSystem = null;
  }
}
