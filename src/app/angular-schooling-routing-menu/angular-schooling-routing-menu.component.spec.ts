import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingRoutingMenuComponent } from './angular-schooling-routing-menu.component';

describe('AngularSchoolingRoutingMenuComponent', () => {
  let component: AngularSchoolingRoutingMenuComponent;
  let fixture: ComponentFixture<AngularSchoolingRoutingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingRoutingMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingRoutingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
