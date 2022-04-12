import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from "./views/theme/base/base.component";

const routes: Routes = [{
  path: '',
  component: BaseComponent,
  children: [
    {
      path: 'pokedex',
      loadChildren: () => import('./views/pages/main-page/main-page.module').then(m => m.MainPageModule)
    },
    {
      path: 'caught-pokemons',
      loadChildren: () => import('./views/pages/caught-pokemons-page/caught-pokemons-page.module').then(m => m.CaughtPokemonsPageModule)
    },
    {
      path: 'details/:id',
      loadChildren: () => import('./views/pages/details-page/details-page.module').then(m => m.DetailsPageModule)
    },
    {path: '', redirectTo: 'pokedex', pathMatch: 'full'},
    {path: '**', redirectTo: 'pokedex', pathMatch: 'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
