import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PanierComponent } from './panier/panier.component';
import { MenuSemaineComponent } from './menu-semaine/menu-semaine.component';
import { ALaCarteComponent } from './a-la-carte/a-la-carte.component';
import { ContactComponent } from './contact/contact.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PlatComponent } from './plat/plat.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NewMealComponent } from './new-meal/new-meal.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { MealsComponent } from './meals/meals.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommandesComponent,
    PanierComponent,
    MenuSemaineComponent,
    ALaCarteComponent,
    ContactComponent,
    CagnotteComponent,
    CheckoutComponent,
    PlatComponent,
    IngredientsComponent,
    FooterComponent,
    LoginComponent,
    ProfilComponent,
    RegisterComponent,
    NewIngredientComponent,
    NewMealComponent,
    NewMenuComponent,
    IngredientEditComponent,
    MealsComponent,
    MealEditComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
