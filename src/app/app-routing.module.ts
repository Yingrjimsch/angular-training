import { Four0FourComponent } from './four0-four/four0-four.component';
import { AngularSchoolingNgmodelComponent } from './angular-schooling-ngmodel/angular-schooling-ngmodel.component';
import { AngularSchoolingInterpolationComponent } from './angular-schooling-interpolation/angular-schooling-interpolation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularSchoolingNgifforComponent } from './angular-schooling-ngiffor/angular-schooling-ngiffor.component';
import { AngularSchoolingDependencyinjectionComponent } from './angular-schooling-dependencyinjection/angular-schooling-dependencyinjection.component';

const routes: Routes = [
  { path: 'interpolation', component: AngularSchoolingInterpolationComponent },
  { path: 'ngifngfor', component: AngularSchoolingNgifforComponent },
  { path: 'di',  component: AngularSchoolingDependencyinjectionComponent },
  { path: 'ngModel',  component: AngularSchoolingNgmodelComponent },
  { path: '', redirectTo: '/interpolation', pathMatch: 'full' },
  { path: '**', component: Four0FourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
