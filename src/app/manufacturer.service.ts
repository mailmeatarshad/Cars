import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  constructor() { }

  manufacturers = ["Suzuki", "Honda", "Hyundai"]
}
