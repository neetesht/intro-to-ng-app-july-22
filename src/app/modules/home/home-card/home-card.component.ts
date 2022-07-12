import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  @Input() title: string = 'Feature';
  @Input() icon: string = 'science';
  @Input()
  description: string = `Lorem ipsum dolor sit amet consectetur ${this.icon} adipisicing elit. Libero at sit
  placeat iure error? Optio ullam id et quos iure, sequi, magnam beatae
  ea, officia quasi delectus repellat molestias. Reprehenderit.`;

  constructor() {}

  ngOnInit(): void {}
}
