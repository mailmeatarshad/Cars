import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarNamesService {

  constructor() { }

  carNames = { 
    'Suzuki' : ["Brezza", "Swift"],
    'Hyundai': ["Verna", "I20"],
    'Honda': ["City"]
};

}
