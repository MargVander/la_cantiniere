import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { HeaderService } from '../header/header.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private headerService: HeaderService) { }

  httpOptions = this.headerService.headerBuilder();

  addIngredient(data: any) {

    this.http.put('http://localhost:8080/lunchtime/ingredient/add', data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);

      })

  }

  getIngredients() {

    return this.http.get('http://localhost:8080/lunchtime/ingredient/findall', this.httpOptions)
  }

  getIngredient(id) {
    return this.http.get(`http://localhost:8080/lunchtime/ingredient/find/${id}`)
  }

  editIngredient(id, data: any) {

    this.http.patch(`http://localhost:8080/lunchtime/ingredient/update/${id}`, data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteIngredient(id) {
    console.log(id);

    this.http.delete(`http://localhost:8080/lunchtime/ingredient/delete/${id}`, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  addMeal(data: any) {

    this.http.put('http://localhost:8080/lunchtime/meal/add', data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getMeals() {

    return this.http.get('http://localhost:8080/lunchtime/meal/findall', this.httpOptions)
  }

  getMeal(id) {
    return this.http.get(`http://localhost:8080/lunchtime/meal/find/${id}`)
  }

  getMealsByDay() {
    return this.http.get('http://localhost:8080/lunchtime/meal/findallavailablefortoday')
  }

  editMeal(id, data: any) {

    this.http.patch(`http://localhost:8080/lunchtime/meal/update/${id}`, data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteMeal(id) {
    console.log(id);

    this.http.delete(`http://localhost:8080/lunchtime/meal/delete/${id}`, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }


  addMenu(data: any) {
    console.log(data);

    this.http.put('http://localhost:8080/lunchtime/menu/add', data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  getMenus() {

    return this.http.get('http://localhost:8080/lunchtime/menu/findall', this.httpOptions)
  }

  getMenu(id) {
    return this.http.get(`http://localhost:8080/lunchtime/menu/find/${id}`)
  }

  getMenusByDay() {
    return this.http.get('http://localhost:8080/lunchtime/menu/findallavailablefortoday');
  }

  editMenu(id, data: any) {

    this.http.patch(`http://localhost:8080/lunchtime/menu/update/${id}`, data, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

  deleteMenu(id) {
    console.log(id);

    this.http.delete(`http://localhost:8080/lunchtime/menu/delete/${id}`, this.httpOptions)
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}





// addTask(data: any){
//   this.http.post(environment.url, data)
//       .subscribe(data => {
//         console.log(data);
//         this.router.navigate(['show']);
//       }, error => {
//         console.log(error);
//       });
// }