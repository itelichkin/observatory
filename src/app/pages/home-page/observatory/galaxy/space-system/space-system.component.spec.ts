import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceSystemComponent } from './space-system.component';

describe('SpaceSystemComponent', () => {
  let component: SpaceSystemComponent;
  let fixture: ComponentFixture<SpaceSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
