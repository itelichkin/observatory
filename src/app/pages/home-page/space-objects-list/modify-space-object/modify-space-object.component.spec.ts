import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifySpaceObjectComponent } from './modify-space-object.component';

describe('ModifySpaceObjectComponent', () => {
  let component: ModifySpaceObjectComponent;
  let fixture: ComponentFixture<ModifySpaceObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifySpaceObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifySpaceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
