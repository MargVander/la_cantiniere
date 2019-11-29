import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service'
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {
  private form: FormGroup;

  constructor(private menuService: MenuService, private formBuilder: FormBuilder) {
    this.form =  new FormGroup(
      {
        label: new FormControl('', [Validators.minLength(3), Validators.required]),
        description: new FormControl('', [Validators.minLength(3), Validators.required]),
        image: new FormControl('', Validators.required)
      }
    )
  }

  ngOnInit() {
  }

  submit(){
    this.menuService.addIngredient(this.form)
  }

}
