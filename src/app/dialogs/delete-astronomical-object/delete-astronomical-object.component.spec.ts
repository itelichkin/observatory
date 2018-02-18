import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAstronomicalObjectComponent } from './delete-astronomical-object.component';

describe('DeleteAstronomicalObjectComponent', () => {
  let component: DeleteAstronomicalObjectComponent;
  let fixture: ComponentFixture<DeleteAstronomicalObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAstronomicalObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAstronomicalObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
