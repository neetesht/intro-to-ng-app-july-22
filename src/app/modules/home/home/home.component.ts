import { Component } from '@angular/core';
import { HomeCardData } from './models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  homeCardsData: HomeCardData[] = [
    {
      title: 'Pokemon',
      icon: 'catching_pokemon',
    },
    {
      title: 'Tour of Heroes',
      icon: 'bolt',
    },
    {
      title: 'Experiment',
    },
  ];
  constructor() {}
}
