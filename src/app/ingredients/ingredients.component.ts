import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../services/menu/menu.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  public ingredients: any;
  private souscription: Subscription;

  constructor(private menuService: MenuService) {

  }

  ngOnInit() {
    this.getIngredients()
  }

  ngOnDestroy() {
    this.souscription
  }

  getIngredients() {
    this.souscription = this.menuService.getIngredients()
      .subscribe(
        resp => {
          this.ingredients = resp;
          console.log(this.ingredients);

        }
      )
  }

  deleteIngredient(id) {
    this.souscription = this.menuService.deleteIngredient(id)
      .subscribe(
        resp => {
          this.getIngredients()
        }
      )
  }

}
