import { Component, Input, OnInit } from '@angular/core';
import { lorem30 } from '../utils/text';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  @Input() title: string = 'Feature';
  @Input() icon: string = 'science';
  @Input()
  description: string = lorem30;

  constructor() {}

  ngOnInit(): void {}
}
