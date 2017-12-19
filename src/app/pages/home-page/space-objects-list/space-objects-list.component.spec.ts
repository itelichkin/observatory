import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceObjectsListComponent } from './space-objects-list.component';

describe('SpaceObjectsListComponent', () => {
  let component: SpaceObjectsListComponent;
  let fixture: ComponentFixture<SpaceObjectsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceObjectsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceObjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
