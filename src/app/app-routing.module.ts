import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabComponent } from './modules/experiment/lab/lab.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PokemonComponent } from './modules/pokemon/pokemon/pokemon.component';
import { MainComponent } from './modules/tour-of-heros/main/main.component';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pokemon',
        loadChildren: () =>
          import('./modules/pokemon/pokemon.module').then(
            (m) => m.PokemonModule
          ),
      },
      {
        path: 'tour-of-heros',
        loadChildren: () =>
          import('./modules/tour-of-heros/tour-of-heros.module').then(
            (m) => m.TourOfHerosModule
          ),
      },
      {
        path: 'experiment/lab',
        loadChildren: () =>
          import('./modules/experiment/experiment.module').then(
            (m) => m.ExperimentModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
