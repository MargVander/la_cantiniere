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
import { LoginComponent } from './login/login.component';
import { MenuSemaineComponent } from './menu-semaine/menu-semaine.component';
import { PanierComponent } from './panier/panier.component';
import { PlatComponent } from './plat/plat.component';
import { NewIngredientComponent } from './new-ingredient/new-ingredient.component';


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
  { path: 'login', component: LoginComponent },
  { path: 'menu-semaine', component: MenuSemaineComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'plat', component: PlatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
