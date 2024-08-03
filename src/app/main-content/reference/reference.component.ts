import { Component, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    var splide = new Splide('.splide', {
      type: 'loop',
      padding: '5rem',
    });

    splide.mount();
  }
}
