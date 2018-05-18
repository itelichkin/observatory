import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../../../../app.component';
import {ApiService} from '../../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {GalaxyObjectType, GlobalAstronomicalObjectType, SystemObjectType} from '../../../../types/types';

@Component({
  selector: 'app-modify-space-object',
  templateUrl: './modify-space-object.component.html',
  styleUrls: ['./modify-space-object.component.scss']
})
export class ModifySpaceObjectComponent implements OnInit {
  spaceObjectId: string;
  spaceObjectType: string;
  modifyAction: string;
  selectedSpaceObject: GlobalAstronomicalObjectType;
  formSpaceObject: FormGroup;
  typeArray: string[];
  galaxyArray: GalaxyObjectType[];
  systemArray: SystemObjectType[];
  systemArrayFiltered: SystemObjectType[];

  constructor(private app: AppComponent,
              private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              public formBuilder: FormBuilder) {
    this.route.params.subscribe((params: any) => {
      if (params) {
        if (params.id) {
          this.spaceObjectId = params.id;
        }
        if (params.type) {
          this.spaceObjectType = params.type;
        }
        this.modifyAction = params.action ? 'Edit space object' : 'New space object';
      }
    });
  }

  async ngOnInit() {
    if (!this.spaceObjectId) {
      this.selectedSpaceObject = {};
      this.createNewForm();
    } else {
      this.selectedSpaceObject = await this.apiService.getSpaceObjectById(this.spaceObjectType, this.spaceObjectId);
      this.createEditForm();
    }

    this.systemArray = await this.apiService.getAllSystems();
    this.systemArrayFiltered = this.systemArray;
    this.galaxyArray = await this.apiService.getAllGalaxies();
    this.typeArray = ['Galaxy', 'System', 'Star', 'Planet'];
  }

  createNewForm() {
    this.formSpaceObject = this.formBuilder.group({
      name: new FormControl({value: '', disabled: false}),
      type: new FormControl({value: '', disabled: false}),
      galaxyId: new FormControl({value: null, disabled: false}),
      systemId: new FormControl({value: null, disabled: false}),
      parent_id: new FormControl({value: null, disabled: false}),
      parentRadius: new FormControl({value: null, disabled: false}),
      angle: new FormControl({value: null, disabled: false}),
      orbitSpeed: new FormControl({value: null, disabled: false}),
      discoverer: new FormControl({value: null, disabled: false})
    });
  }

  createEditForm() {
    this.formSpaceObject = this.formBuilder.group({
      id: new FormControl({value: this.selectedSpaceObject.id, disabled: false}),
      name: new FormControl({value: this.selectedSpaceObject.name || '', disabled: false}),
      type: new FormControl({value: this.selectedSpaceObject.type || '', disabled: false}),
      galaxyId: new FormControl({
        value: this.selectedSpaceObject.galaxyId || null,
        disabled: !this.selectedSpaceObject.type
      }),
      systemId: new FormControl({
        value: this.selectedSpaceObject.systemId || '',
        disabled: !this.selectedSpaceObject.galaxyId
      }),
      parent_id: new FormControl({
        value: this.selectedSpaceObject.type === 'System' ? this.selectedSpaceObject.galaxyId :
          this.selectedSpaceObject.type === 'Planet' ? this.selectedSpaceObject.systemId :
            this.selectedSpaceObject.type === 'Satellite' ? this.selectedSpaceObject.planetId : null,
        disabled: false
      }),
      parentRadius: new FormControl({
        value: this.selectedSpaceObject.type === 'Planet' ? this.selectedSpaceObject.parentRadius :
          null,
        disabled: !this.selectedSpaceObject.parentRadius
      }),
      angle: new FormControl({
        value: this.selectedSpaceObject.type === 'Planet' ? this.selectedSpaceObject.angle :
          null,
        disabled: !this.selectedSpaceObject.angle
      }),
      orbitSpeed: new FormControl({
        value: this.selectedSpaceObject.type === 'Planet' ? this.selectedSpaceObject.orbitSpeed :
          null,
        disabled: !this.selectedSpaceObject.orbitSpeed
      }),
      discoverer: new FormControl({value: this.selectedSpaceObject.discoverer || '', disabled: false}),
    });
    console.log(this.formSpaceObject)
  }

  setGalaxy() {
    const galaxyId = this.formSpaceObject.get('galaxyId').value;
    this.systemArrayFiltered = this.systemArray.filter((x) => {
      return x.galaxyId === galaxyId;
    });
  }


  setType() {
    const type = this.formSpaceObject.get('type').value;
    if (type === 'Galaxy') {
      this.formSpaceObject.get('galaxyId').disable();
      this.formSpaceObject.get('systemId').disable();
      this.formSpaceObject.get('parentRadius').disable();
      this.formSpaceObject.get('angle').disable();
      this.formSpaceObject.get('orbitSpeed').disable();
    } else if (type === 'System') {
      this.formSpaceObject.get('galaxyId').enable();
      this.formSpaceObject.get('systemId').disable();
      this.formSpaceObject.get('parentRadius').disable();
      this.formSpaceObject.get('angle').disable();
      this.formSpaceObject.get('orbitSpeed').disable();
    } else if (type === 'Star') {
      this.formSpaceObject.get('galaxyId').enable();
      this.formSpaceObject.get('systemId').enable();
      this.formSpaceObject.get('parentRadius').disable();
      this.formSpaceObject.get('angle').disable();
      this.formSpaceObject.get('orbitSpeed').disable();
    } else {
      this.formSpaceObject.get('galaxyId').enable();
      this.formSpaceObject.get('systemId').enable();
      this.formSpaceObject.get('parentRadius').enable();
      this.formSpaceObject.get('angle').enable();
      this.formSpaceObject.get('orbitSpeed').enable();
    }
  }

  async submitForm() {
    const newDataProvider = this.selectedSpaceObject || {};
    newDataProvider['name'] = this.formSpaceObject.get('name').value;
    newDataProvider['type'] = this.formSpaceObject.get('type').value;
    newDataProvider['discoverer'] = this.formSpaceObject.get('discoverer').value;

    if (!this.spaceObjectId) {
      newDataProvider['weight'] = 6000;
      newDataProvider['speed'] = 6000;
      newDataProvider['position'] = {
        x: this.setPositionX(),
        y: this.setPositionY()
      };
      newDataProvider['size'] = null;
    }
    if (newDataProvider.type === 'Galaxy') {
      newDataProvider['isGalaxy'] = true;
    } else if (newDataProvider.type === 'System') {
      if (!this.spaceObjectId) {
        newDataProvider['imageName'] = 'defaultSystem';
      }
      newDataProvider['isSystem'] = true;
      newDataProvider['galaxyId'] = this.formSpaceObject.get('galaxyId').value;
    } else if (newDataProvider.type === 'Star') {
      if (!this.spaceObjectId) {
        newDataProvider['imageName'] = 'defaultStar';
        newDataProvider['size'] = {
          width: 100,
          height: 100
        };
        newDataProvider['position'] = {
          x: 600,
          y: 380
        };
      }
      newDataProvider['isStar'] = true;
      newDataProvider['systemId'] = this.formSpaceObject.get('systemId').value;
    } else if (newDataProvider.type === 'Planet') {
      if (!this.spaceObjectId) {
        newDataProvider['imageName'] = 'defaultPlanet';
        newDataProvider['size'] = {
          width: 15,
          height: 15
        };
      }
      newDataProvider['isPlanet'] = true;
      newDataProvider['systemId'] = this.formSpaceObject.get('systemId').value;
      newDataProvider['parentRadius'] = +this.formSpaceObject.get('parentRadius').value;
      newDataProvider['angle'] = +this.formSpaceObject.get('angle').value;
      newDataProvider['orbitSpeed'] = +this.formSpaceObject.get('orbitSpeed').value;
    }
    if (this.modifyAction === 'Edit space object') {/*
      newDataProvider['id'] = this.formSpaceObject.get('id').value;
      newDataProvider['size'] = this.selectedSpaceObject.size;
      newDataProvider['position'] = this.selectedSpaceObject.position;
      newDataProvider['weight'] = this.selectedSpaceObject.weight;
      newDataProvider['speed'] = this.selectedSpaceObject.speed;
      if (this.selectedSpaceObject.imageName) {
        newDataProvider['imageName'] = this.selectedSpaceObject.imageName;
      }
      if (this.selectedSpaceObject.isSystem) {
        newDataProvider['isSystem'] = this.formSpaceObject.get('id').value;
      }*/
    }
    const result = this.modifyAction === 'Edit space object' ?
      await this.apiService.editSpaceObject(newDataProvider) :
      await this.apiService.createNewSpaceObject(newDataProvider);
    this.router.navigate(['/space-objects-list']);
  }

  cancelForm() {
    this.router.navigate(['/space-objects-list']);
  }

  private setPositionX() {
    return Math.floor(Math.random() * (1100 - 300)) + 300;
  }

  private setPositionY() {
    return Math.floor(Math.random() * (500 - 10)) + 10;
  }
}
