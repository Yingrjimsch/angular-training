import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingInterpolationComponent } from './angular-schooling-interpolation.component';

describe('AngularSchoolingInterpolationComponent', () => {
  let component: AngularSchoolingInterpolationComponent;
  let fixture: ComponentFixture<AngularSchoolingInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
