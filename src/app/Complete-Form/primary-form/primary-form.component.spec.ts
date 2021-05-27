import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryFormComponent } from './primary-form.component';

describe('PrimaryFormComponent', () => {
  let component: PrimaryFormComponent;
  let fixture: ComponentFixture<PrimaryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
