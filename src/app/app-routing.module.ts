import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabComponent } from './modules/experiment/lab/lab.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PokemonComponent } from './modules/pokemon/pokemon/pokemon.component';
import { MainComponent } from './modules/tour-of-heros/main/main.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pokemon',
    component: PokemonComponent,
  },
  {
    path: 'tour-of-heros',
    component: MainComponent,
  },
  {
    path: 'experiment/lab',
    component: LabComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
