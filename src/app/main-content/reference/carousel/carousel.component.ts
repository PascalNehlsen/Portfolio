import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  constructor() {
    setTheme('bs5');
  }
}
