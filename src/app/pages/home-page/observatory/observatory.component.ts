import {Component, OnChanges, OnInit} from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {AstronomicalObjectType} from '../../../types/types';
import {UniverseModel} from '../../../models/universe.model';

@Component({
  selector: 'app-observatory',
  templateUrl: './observatory.component.html',
  styleUrls: ['./observatory.component.scss']
})
export class ObservatoryComponent implements OnInit {
  universe: UniverseModel;
  selectedGalaxy: any;
  isDataLoading: boolean;
  testArray;

  constructor(private apiService: ApiService) {
  }

  async ngOnInit() {
    this.isDataLoading = true;
    const univ: AstronomicalObjectType = await this.apiService.getUniverse();
    this.universe = new UniverseModel(univ.id, univ.name, univ.weight, univ.speed, univ.discoverer, null, null);
    this.selectedGalaxy = null;
    const galaxies = await this.apiService.getGalaxies();
    galaxies.forEach((galaxy) => {
      this.universe.addSpaceSystem(galaxy);
    });
    this.isDataLoading = false;
  }


}
