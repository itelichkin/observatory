import {Component, OnChanges, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {AstronomicalObjectType, GalaxyObjectType} from '../../../types/types';
import {UniverseModel} from '../../../models/universe.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../app.component';
import {GalaxyModel} from '../../../models/galaxy.model';

@Component({
  selector: 'app-observatory',
  templateUrl: './observatory.component.html',
  styleUrls: ['./observatory.component.scss']
})
export class ObservatoryComponent implements OnInit {
  universe: UniverseModel;
  selectedGalaxy: GalaxyModel;
  isDataLoading: boolean;

  constructor(private apiService: ApiService,
              private router: Router,
              private app: AppComponent) {
  }

  async ngOnInit() {
    this.isDataLoading = true;
    const univ: AstronomicalObjectType = await this.apiService.getUniverse();
    this.universe = new UniverseModel(univ.id, univ.name, univ.weight, univ.speed, univ.discoverer,
      univ.position, univ.size);
    this.app.universe = this.universe;
    this.selectedGalaxy = null;
    const galaxies: GalaxyObjectType[] = await this.apiService.getGalaxies();
    galaxies.forEach((galaxy) => {
      this.universe.addGalaxy(galaxy);
    });
    this.isDataLoading = false;
  }

  selectGalaxy(galaxy) {
    this.selectedGalaxy = galaxy;
    this.app.selectedGalaxy = this.selectedGalaxy;
  }

  goToGalaxy() {
    this.router.navigate([`/observatory/galaxy/${this.selectedGalaxy.id}`]);
  }

}
