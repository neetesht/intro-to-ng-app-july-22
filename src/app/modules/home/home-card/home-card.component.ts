import { Component, Input, OnInit } from '@angular/core';
import { lorem30 } from '../utils/text';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  // add tour of hero component
  // add an exp component
  // add an pokemon component
  // add routing at the route
  // make home cards clickable and route

  // add routing

  @Input() title: string = 'Feature';
  @Input() icon: string = 'science';
  @Input()
  description: string = lorem30;

  constructor() {}

  ngOnInit(): void {}
}
