import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCampComponent } from './control-camp.component';

describe('ControlCampComponent', () => {
  let component: ControlCampComponent;
  let fixture: ComponentFixture<ControlCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
