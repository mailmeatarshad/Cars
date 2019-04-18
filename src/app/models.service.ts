import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor() { }

  models = { 
              'Brezza' : ["1A", "1B", "1C"],
              'I20': ["1D", "1E"] ,
              'Swift': ["1X", "1Z"],
              'Verna' : ["1F", "1G"]
            };

  };



