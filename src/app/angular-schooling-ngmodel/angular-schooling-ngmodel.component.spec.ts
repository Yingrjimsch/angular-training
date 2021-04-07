import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingNgmodelComponent } from './angular-schooling-ngmodel.component';

describe('AngularSchoolingNgmodelComponent', () => {
  let component: AngularSchoolingNgmodelComponent;
  let fixture: ComponentFixture<AngularSchoolingNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingNgmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
