import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  addIngredient(f) {
    console.log(f);
    
  }
}
