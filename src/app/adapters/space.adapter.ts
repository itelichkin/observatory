import {PlanetAdapter} from '../models/planet.model';
import {ApiService} from '../services/api.service';
import {StarAdapter} from '../models/star.model';

export class SpaceAdapter implements PlanetAdapter<any>, StarAdapter<any> {
  constructor(private apiService: ApiService) {
  }

  async getParentStar() {
    return await this.apiService.getParentStar();
  }

  async getChildrenPlanet() {
    return await this.apiService.getChildrenPlanet();
  }
}
