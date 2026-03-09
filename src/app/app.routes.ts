import { Routes } from '@angular/router';
import { PokemartComponent } from './pokemart/pokemart.component';
import { CartComponent } from './cart/cart.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


export const routes: Routes = [
  { path: 'pokemart', component: PokemartComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pokemon-list', component: PokemonListComponent }
];