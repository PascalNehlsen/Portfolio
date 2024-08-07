import { Component, AfterViewInit, inject } from '@angular/core';
import Splide from '@splidejs/splide';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent implements AfterViewInit {
  translate = inject(TranslationService);

  ngAfterViewInit(): void {
    var splide = new Splide('.splide', {
      type: 'loop',
      gap: '6rem',
      focus: 'center',
      pagination: true,
      padding: {
        left: '20%',
        right: '20%',
      },

      breakpoints: {
        960: {
          gap: '2rem',
        },
        768: {
          gap: '0.1rem',
          padding: {
            left: '3%',
            right: '5%',
          },
        },
      },
    });

    splide.mount();
  }
}
