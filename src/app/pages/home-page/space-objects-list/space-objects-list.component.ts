import {Component, OnInit} from '@angular/core';
import {DropdownData, GlobalAstronomicalObjectType, ObserverType} from '../../../types/types';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {DialogService} from '../../../services/dialog.service';
import {ObserverModel} from '../../../models/observer.model';

@Component({
  selector: 'app-space-objects-list',
  templateUrl: './space-objects-list.component.html',
  styleUrls: ['./space-objects-list.component.scss']
})
export class SpaceObjectsListComponent implements OnInit {
  spaceObjectData: Array<GlobalAstronomicalObjectType>;
  title: string;
  isDataLoading: boolean;
  filteringSearchPTable: any[];
  observers: ObserverType[];
  observersDropdownData: DropdownData[];

  constructor(private apiService: ApiService,
              private router: Router,
              private dialogService: DialogService) {
  }

  async ngOnInit() {
    this.isDataLoading = true;
    this.title = 'List of space objects';
    this.spaceObjectData = await this.apiService.getAllSpaceObjects();
    const observers = await this.apiService.getAllObservers();
    this.observers = [];
    observers.forEach((x: ObserverType) => {
      const obs = new ObserverModel(x.id, x.name, x.observablePlanets);
      this.observers.push(obs);
    });
    this.observersDropdownData = this.DropdownDataModify('All', observers);
    this.spaceObjectData.forEach((obj) => {
      if (obj.observers && obj.observers.length) {
        obj['observersUpdated'] = this.updateObservers(obj.observers);
      }
    });
    this.isDataLoading = false;
  }

  DropdownDataModify(defaultName: string, data: Array<any>): Array<DropdownData> {
    const result = [{label: defaultName, value: null}];
    data.forEach((item) => {
      const newItem = {
        label: item.name ? item.name : item,
        value: item.id ? item.id : item
      };
      result.push(newItem);
    });
    console.log(result)
    return result;
  }


  addNewSpaceObject() {
    this.router.navigate(['space-objects-list', 'new']);
  }

  editSpaceObject(id: number) {
    this.router.navigate(['space-objects-list', id, 'edit']);
  }

  async deleteSpaceObject(id: number, index, name: string) {
    const result = await this.dialogService.deleteDialog(name);
    if (result) {
      this.spaceObjectData.splice(index, 1);
      this.spaceObjectData = [...this.spaceObjectData];
      await this.apiService.deleteSpaceObject(id);
    }
  }

  setFilteringSearchPTable(event) {
    this.filteringSearchPTable = event.filteredValue;
  }

  updateObservers(observers: number[]) {
    if (!observers || !observers.length) {
      return '';
    }
    const result = [];
    observers.forEach((i) => {
      this.observers.some((obs) => {
        if (obs.id === i) {
          result.push(obs.name);
          return true;
        }
      });
    });
    return result.join(', ');
  }
}
