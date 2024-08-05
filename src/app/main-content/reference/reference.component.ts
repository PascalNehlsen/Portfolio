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
      gap: '6rem',
      focus: 'center',
      pagination: true, // Aktiviert die Pagination
      padding: {
        left: '20%', // Padding an den Seiten, um mehr von den äußeren Slides sichtbar zu machen
        right: '20%',
      },

      breakpoints: {
        960: {
          gap: '2rem',
        },
        768: {
          gap: '0.1rem',
          padding: {
            left: '3%', // Padding an den Seiten, um mehr von den äußeren Slides sichtbar zu machen
            right: '5%',
          },
        },
      },
    });

    splide.mount();
  }
}
