import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingPipesComponent } from './angular-schooling-pipes.component';

describe('AngularSchoolingPipesComponent', () => {
  let component: AngularSchoolingPipesComponent;
  let fixture: ComponentFixture<AngularSchoolingPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
