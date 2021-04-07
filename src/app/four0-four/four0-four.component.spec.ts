import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Four0FourComponent } from './four0-four.component';

describe('Four0FourComponent', () => {
  let component: Four0FourComponent;
  let fixture: ComponentFixture<Four0FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Four0FourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Four0FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
