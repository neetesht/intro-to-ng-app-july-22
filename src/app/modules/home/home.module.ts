import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HomeCardComponent } from './home-card/home-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
