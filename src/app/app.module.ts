

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PanierComponent } from './panier/panier.component';
import { MenuSemaineComponent } from './menu-semaine/menu-semaine.component';
import { ALaCarteComponent } from './a-la-carte/a-la-carte.component';
import { ContactComponent } from './contact/contact.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { MealsComponent } from './meals/meals.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MenusComponent } from './menus/menus.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConstraintEditComponent } from './constraint-edit/constraint-edit.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard, AdminGuard } from './services/auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommandesComponent,
    PanierComponent,
    MenuSemaineComponent,
    ALaCarteComponent,
    ContactComponent,
    IngredientsComponent,
    ProfilComponent,
    RegisterComponent,
    NewIngredientComponent,
    NewMealComponent,
    NewMenuComponent,
    IngredientEditComponent,
    MealsComponent,
    MealEditComponent,
    MenusComponent,
    MenuEditComponent,
    UsersComponent,
    UserComponent,
    UserEditComponent,
    AccueilComponent,
    ConstraintEditComponent,
    OrderComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpasswordComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
