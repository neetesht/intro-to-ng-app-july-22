import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { RouterModule, Routes } from '@angular/router';

export const pokemonRoutes: Routes = [
  {
    path: '',
    component: PokemonComponent,
  },
];

@NgModule({
  declarations: [PokemonComponent],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
})
export class PokemonModule {}
