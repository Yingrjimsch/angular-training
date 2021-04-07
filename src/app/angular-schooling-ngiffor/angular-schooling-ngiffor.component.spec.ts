import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingNgifforComponent } from './angular-schooling-ngiffor.component';

describe('AngularSchoolingNgifforComponent', () => {
  let component: AngularSchoolingNgifforComponent;
  let fixture: ComponentFixture<AngularSchoolingNgifforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingNgifforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingNgifforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
