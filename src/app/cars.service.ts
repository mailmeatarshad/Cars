import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  cars: any[] = { 
    "1A": { 
        name : "Brezza",
        model: "1A",
        manufacturer: "Suzuki",
        price: 1000000,
        category: "sedan",
        engine: "1000 cc"
      },
      "1B" : { 
        name : "Brezza",
        model: "1B",
        manufacturer: "Suzuki",
        price: 1500000,
        category: "sedan",
        engine: "1200 cc"
      },
      "1X" : { 
        name : "Swift",
        model: "1X",
        manufacturer: "Suzuki",
        price: 1000000,
        category: "hatchback",
        engine: "1000 cc"
      },
      "1Z" : { 
        name : "Swift",
        model: "1Z",
        manufacturer: "Suzuki",
        price: 1200000,
        category: "hatchback",
        engine: "1200 cc"
      },
      "1F" : { 
        name : "Verna",
        model: "1F",
        manufacturer: "Hyundai",
        price: 900000,
        category: "hatchback",
        engine: "1100 cc"
      },
      "1G" : { 
        name : "Verna",
        model: "1G",
        manufacturer: "Hyundai",
        price: 1000000,
        category: "hatchback",
        engine: "1200 cc"
      },
      "1D" : { 
        name : "I20",
        model: "1D",
        manufacturer: "Hyundai",
        price: 900000,
        category: "sedan",
        engine: "1100 cc"
      },
      "1E" : { 
        name : "I20",
        model: "1E",
        manufacturer: "Hyundai",
        price: 1000000,
        category: "sedan",
        engine: "1200 cc"
      }
    };


}
