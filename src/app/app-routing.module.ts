import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ALaCarteComponent } from './a-la-carte/a-la-carte.component';
import { CagnotteComponent } from './cagnotte/cagnotte.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { MenuSemaineComponent } from './menu-semaine/menu-semaine.component';
import { PanierComponent } from './panier/panier.component';
import { PlatComponent } from './plat/plat.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';
import { RegisterComponent } from './register/register.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { NewMenuComponent } from './new-menu/new-menu.component';
import { IngredientEditComponent } from './ingredient-edit/ingredient-edit.component';
import { MealsComponent } from './meals/meals.component';
import { MealEditComponent } from './meal-edit/meal-edit.component';
import { MenusComponent } from './menus/menus.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'a-la-carte', component: ALaCarteComponent },
  { path: 'cagnotte', component: CagnotteComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'newingredient', component: NewIngredientComponent },
  { path: 'menu-semaine', component: MenuSemaineComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'plat', component: PlatComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'newmeal', component: NewMealComponent },
  { path: 'newmenu', component: NewMenuComponent },
  { path: 'ingredientedit/:id', component: IngredientEditComponent },
  { path: 'meals', component: MealsComponent },
  { path: 'mealedit/:id', component: MealEditComponent },
  { path: 'menus', component: MenusComponent },
  { path: 'menuedit/:id', component: MenuEditComponent },
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
