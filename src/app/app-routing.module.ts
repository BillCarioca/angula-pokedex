import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'pokemon/:name', component: PokemonComponent, pathMatch:'prefix'},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
