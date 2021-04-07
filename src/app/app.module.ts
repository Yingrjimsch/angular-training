import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSchoolingInterpolationComponent } from './angular-schooling-interpolation/angular-schooling-interpolation.component';
import { AngularSchoolingNgifforComponent } from './angular-schooling-ngiffor/angular-schooling-ngiffor.component';
import { AngularSchoolingNgmodelComponent } from './angular-schooling-ngmodel/angular-schooling-ngmodel.component';
import { AngularSchoolingDependencyinjectionComponent } from './angular-schooling-dependencyinjection/angular-schooling-dependencyinjection.component';
import { FormsModule } from '@angular/forms';
import { AngularSchoolingRoutingMenuComponent } from './angular-schooling-routing-menu/angular-schooling-routing-menu.component';
import { Four0FourComponent } from './four0-four/four0-four.component';
import { AngularSchoolingPipesComponent } from './angular-schooling-pipes/angular-schooling-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularSchoolingInterpolationComponent,
    AngularSchoolingNgifforComponent,
    AngularSchoolingNgmodelComponent,
    AngularSchoolingDependencyinjectionComponent,
    AngularSchoolingRoutingMenuComponent,
    Four0FourComponent,
    AngularSchoolingPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
