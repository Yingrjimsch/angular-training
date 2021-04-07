import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchoolingDependencyinjectionComponent } from './angular-schooling-dependencyinjection.component';

describe('AngularSchoolingDependencyinjectionComponent', () => {
  let component: AngularSchoolingDependencyinjectionComponent;
  let fixture: ComponentFixture<AngularSchoolingDependencyinjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularSchoolingDependencyinjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSchoolingDependencyinjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
