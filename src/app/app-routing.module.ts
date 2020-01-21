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
import { ProfilComponent } from './profil/profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ConstraintEditComponent } from './constraint-edit/constraint-edit.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'a-la-carte', component: ALaCarteComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'menu-semaine', component: MenuSemaineComponent },
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
    /**
   * ces pages sont protégées par authguard
   */
  { path: 'constraintedit', component: ConstraintEditComponent },
  { path: 'mes-commandes/:id', component: OrderComponent },
  { path: 'cagnotte', component: CagnotteComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: 'newingredient', component: NewIngredientComponent },
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
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'useredit/:id', component: UserEditComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'profil/:id', component: ProfilComponent },
  { path: 'profiledit/:id', component: UserEditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
