import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpaceObjectComponent } from './new-space-object.component';

describe('NewSpaceObjectComponent', () => {
  let component: NewSpaceObjectComponent;
  let fixture: ComponentFixture<NewSpaceObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSpaceObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSpaceObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
