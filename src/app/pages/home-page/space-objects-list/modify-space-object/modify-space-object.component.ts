import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {GalaxyObjectType, GlobalAstronomicalObjectType, SystemObjectType} from '../../../../types/types';
import {setPositionX, setPositionY} from '../../../../utils/position';
import {StarModel} from '../../../../models/star.model';
import {PlanetModel} from '../../../../models/planet.model';

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
  starsArray: StarModel[];
  planetsArray: PlanetModel[];
  systemArrayFiltered: SystemObjectType[];
  selectedSystem: SystemObjectType;
  isDataLoading: boolean;

  constructor(private apiService: ApiService,
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
    this.isDataLoading = true;
    try {
      this.systemArray = await this.apiService.getAllSystems() || [];
      this.systemArrayFiltered = this.systemArray;
      this.galaxyArray = await this.apiService.getAllGalaxies() || [];
      this.starsArray = await this.apiService.getAllCentralStars() || [];
      this.planetsArray = await this.apiService.getAllPlanets() || [];
      if (!this.spaceObjectId) {
        this.selectedSpaceObject = {};
        this.createNewForm();
      } else {
        this.selectedSpaceObject = await this.apiService.getSpaceObjectById(this.spaceObjectType, this.spaceObjectId);
        if (!this.selectedSpaceObject) {
          return;
        }
        this.createEditForm();
      }
      this.typeArray = ['Galaxy', 'System', 'Star', 'Planet'];
      if (this.spaceObjectId && this.selectedSpaceObject.type === 'Star' || this.selectedSpaceObject.type === 'Planet') {
        this.selectedSystem = this.systemArray.filter((system) => system.id === this.selectedSpaceObject.systemId)[0];
        this.formSpaceObject.get('galaxyId').setValue(this.selectedSystem.galaxyId);
      }
      this.formSpaceObject.get('name').updateValueAndValidity();
      this.formSpaceObject.get('name').markAsUntouched();
    } finally {
      this.isDataLoading = false;
    }
  }

  createNewForm() {
    this.formSpaceObject = this.formBuilder.group({
      name: new FormControl({value: '', disabled: false}, [Validators.required, this.nameValidator()]),
      type: new FormControl({value: '', disabled: false}, [Validators.required]),
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
      type: new FormControl({value: this.selectedSpaceObject.type || '', disabled: false}, [Validators.required]),
      galaxyId: new FormControl({
        value: this.selectedSpaceObject.galaxyId || '',
        disabled: this.selectedSpaceObject.type === 'Galaxy'
      }),
      systemId: new FormControl({
        value: this.selectedSpaceObject.systemId || '',
        disabled: (this.selectedSpaceObject.type !== 'Star' && this.selectedSpaceObject.type !== 'Planet')
      }),
      parent_id: new FormControl({
        value: this.selectedSpaceObject.type === 'System' ? this.selectedSpaceObject.galaxyId :
          this.selectedSpaceObject.type === 'Planet' ? this.selectedSpaceObject.systemId :
            this.selectedSpaceObject.type === 'Satellite' ? this.selectedSpaceObject.planetId : null,
        disabled: !this.selectedSpaceObject.galaxyId || !this.selectedSpaceObject.systemId
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
    this.formSpaceObject.get('name').setValidators([Validators.required, this.nameValidator()]);
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
      this.disableGalaxy();
      this.disableSystem();
      this.disablePlanet();
    } else if (type === 'System') {
      this.enableGalaxy();
      this.disableSystem();
      this.disablePlanet();
    } else if (type === 'Star') {
      this.enableGalaxy();
      this.enableSystem();
      this.disablePlanet();
    } else {
      this.enableGalaxy();
      this.enableSystem();
      this.enablePlanet();
    }
    this.formSpaceObject.get('name').updateValueAndValidity();
  }

  enableGalaxy() {
    this.formSpaceObject.get('galaxyId').enable();
    this.formSpaceObject.get('galaxyId').setValidators([Validators.required]);
    this.formSpaceObject.get('galaxyId').updateValueAndValidity();
  }

  disableGalaxy() {
    this.formSpaceObject.get('galaxyId').disable();
    this.formSpaceObject.get('galaxyId').clearValidators();
    this.formSpaceObject.get('galaxyId').updateValueAndValidity();
  }

  enableSystem() {
    this.formSpaceObject.get('systemId').enable();
    this.formSpaceObject.get('systemId').setValidators([Validators.required]);
    this.formSpaceObject.get('systemId').updateValueAndValidity();
  }

  disableSystem() {
    this.formSpaceObject.get('systemId').disable();
    this.formSpaceObject.get('systemId').clearValidators();
    this.formSpaceObject.get('systemId').updateValueAndValidity();
  }

  enablePlanet() {
    this.formSpaceObject.get('parentRadius').enable();
    this.formSpaceObject.get('angle').enable();
    this.formSpaceObject.get('orbitSpeed').enable();
  }

  disablePlanet() {
    this.formSpaceObject.get('parentRadius').disable();
    this.formSpaceObject.get('angle').disable();
    this.formSpaceObject.get('orbitSpeed').disable();
  }


  async submitForm() {
    this.isDataLoading = true;
    try {
      const newDataProvider = this.selectedSpaceObject || {};
      newDataProvider['name'] = this.formSpaceObject.get('name').value;
      newDataProvider['type'] = this.formSpaceObject.get('type').value;
      newDataProvider['discoverer'] = this.formSpaceObject.get('discoverer').value;

      if (!this.spaceObjectId) {
        newDataProvider['weight'] = 6000;
        newDataProvider['speed'] = 6000;
        newDataProvider['position'] = {
          x: setPositionX(),
          y: setPositionY()
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
      const result = this.modifyAction === 'Edit space object' ?
        await this.apiService.editSpaceObject(newDataProvider) :
        await this.apiService.createNewSpaceObject(newDataProvider);
      this.router.navigate(['/space-objects-list']);
    } finally {
      this.isDataLoading = false;
    }
  }

  cancelForm() {
    this.router.navigate(['/space-objects-list']);
  }

  nameValidator(): ValidatorFn {
    return (formControl: FormControl): { [key: string]: any } => {
      if (!formControl.value || formControl.value === '') {
        return {nameError: 'Type some name.'};
      } else if (formControl.value) {
        if (this.formSpaceObject && this.formSpaceObject.contains('type')) {
          let isExist = false;
          switch (this.formSpaceObject.get('type').value) {
            case 'Galaxy':
              const galaxyArray = this.spaceObjectId ?
                this.galaxyArray.filter((x) => x.name !== this.selectedSpaceObject.name) : this.galaxyArray;
              isExist = this.isNameExist(galaxyArray, formControl.value);
              break;
            case 'System':
              const systemArray = this.spaceObjectId ?
                this.systemArray.filter((x) => x.name !== this.selectedSpaceObject.name) : this.systemArray;
              isExist = this.isNameExist(systemArray, formControl.value);
              break;
            case 'Star':
              const starArray = this.spaceObjectId ?
                this.starsArray.filter((x) => x.name !== this.selectedSpaceObject.name) : this.starsArray;

              isExist = this.isNameExist(starArray, formControl.value);
              break;
            case 'Planet':
              const planetArray = this.spaceObjectId ?
                this.planetsArray.filter((x) => x.name !== this.selectedSpaceObject.name) : this.planetsArray;
              isExist = this.isNameExist(planetArray, formControl.value);
              break;
          }
          if (isExist) {
            return {nameError: 'Current name exist.'};
          }
        }
      } else {
        return null;
      }
    };
  }

  isNameExist(target: any[], name: string) {
    let isExist = false;
    target.some((x) => {
      if (x.name === name) {
        isExist = true;
        return true;
      }
    });
    return isExist;
  }

}
