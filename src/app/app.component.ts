import { CarNamesService } from './car-names.service';
import { ModelsService } from './models.service';
import { ManufacturerService } from './manufacturer.service';
import { CarsService } from './cars.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Cars';

  carDetails;
  manufacturers = [];
  carModels = [];
  carNames = [];

  showCar = false;;

  constructor(public carsService: CarsService, 
    public manufacturerService: ManufacturerService, 
    public modelsService: ModelsService,
    public carNamesService: CarNamesService
  ){}

  ngOnInit(){
    this.manufacturers = this.manufacturerService.manufacturers;
  }

  populateCarNames(manufacturer: string) {
    this.carNames = this.carNamesService.carNames[manufacturer];
 }

  populateModels(carname:string) {
    this.carModels = this.modelsService.models[carname];
  }

  fetchCarDetails(model: string){
    this.carDetails = this.carsService.cars[model]
  }

  ShowCarDetails(){
    this.showCar = true;
  }
}
