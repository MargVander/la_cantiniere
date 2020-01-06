import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu/menu.service'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.component.html',
  styleUrls: ['./menu-semaine.component.css']
})
export class MenuSemaineComponent implements OnInit {

  private souscription: Subscription;
  public menus: any;


  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenusByDay();
  };

  getMenusByDay() {    
    this.souscription = this.menuService.getMenusByDay()
    .subscribe(
      resp => {
        this.menus = resp;
        console.log(this.menus);
      }
    )    
  };

}
