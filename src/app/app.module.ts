import { ModelsService } from './models.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsService } from 'src/app/cars.service';
import { ManufacturerService } from 'src/app/manufacturer.service';
import { CarNamesService } from 'src/app/car-names.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarsService, ManufacturerService,CarNamesService, ModelsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
