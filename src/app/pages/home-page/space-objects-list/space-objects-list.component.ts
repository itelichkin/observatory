import {Component, OnInit} from '@angular/core';
import {GlobalAstronomicalObjectType} from '../../../types/types';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-space-objects-list',
  templateUrl: './space-objects-list.component.html',
  styleUrls: ['./space-objects-list.component.scss']
})
export class SpaceObjectsListComponent implements OnInit {
  spaceObjectData: Array<GlobalAstronomicalObjectType>;
  title: string;
  isDataLoading: boolean;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  async ngOnInit() {
    this.isDataLoading = true;
    this.title = 'List of space objects';
    this.spaceObjectData = await this.apiService.getAllSpaceObjects();
    this.isDataLoading = false;
  }

  addNewSpaceObject() {
    this.router.navigate(['space-objects-list', 'new']);
  }

  editSpaceObject(id: number) {
    this.router.navigate(['space-objects-list', id, 'edit']);
  }
}
