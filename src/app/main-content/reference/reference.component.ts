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
      padding: {
        left: '20%', // Padding an den Seiten, um mehr von den äußeren Slides sichtbar zu machen
        right: '20%',
      },
    });

    splide.mount();
  }
}
