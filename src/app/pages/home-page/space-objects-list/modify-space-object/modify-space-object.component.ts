import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../../../app.component';
import {ApiService} from '../../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GlobalAstronomicalObjectType} from '../../../../types/types';

@Component({
  selector: 'app-modify-space-object',
  templateUrl: './modify-space-object.component.html',
  styleUrls: ['./modify-space-object.component.scss']
})
export class ModifySpaceObjectComponent implements OnInit {
  spaceObjectId: number;
  modifyAction: string;
  selectedSpaceObject: GlobalAstronomicalObjectType;
  formSpaceObject: FormGroup;
  typeArray: string[];

  constructor(private app: AppComponent,
              private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              public formBuilder: FormBuilder) {
    this.route.params.subscribe((params: any) => {
      if (params) {
        if (params.id) {
          this.spaceObjectId = +params.id;
        }
        this.modifyAction = params.action ? 'Edit space object' : 'New space object';
      }
    });
  }

  async ngOnInit() {
    this.selectedSpaceObject = this.spaceObjectId ?
      await this.apiService.getSpaceObjectById(this.spaceObjectId) : {};
    this.formSpaceObject = this.formBuilder.group({
      id: new FormControl({value: this.selectedSpaceObject.id, disabled: false}),
      name: new FormControl({value: this.selectedSpaceObject.name || '', disabled: false}),
      type: new FormControl({value: this.selectedSpaceObject.type || '', disabled: false}),
      discoverer: new FormControl({value: this.selectedSpaceObject.discoverer || '', disabled: false}),
    });
    this.typeArray = ['Universe', 'Galaxy', 'System', 'Star', 'Planet'];
  }

  async submitForm() {

    const newDataProvider = {
      name: this.formSpaceObject.get('name').value,
      type: this.formSpaceObject.get('type').value,
      discoverer: this.formSpaceObject.get('discoverer').value,
    };
    if (this.modifyAction === 'Edit space object') {
      newDataProvider['id'] = this.formSpaceObject.get('id').value;
    }
    const result = this.modifyAction === 'Edit space object' ?
      await this.apiService.editSpaceObject(newDataProvider) :
      await this.apiService.createNewSpaceObject(newDataProvider);
    this.router.navigate(['/space-objects-list']);
  }

  cancelForm() {
    this.router.navigate(['/space-objects-list']);
  }
}
