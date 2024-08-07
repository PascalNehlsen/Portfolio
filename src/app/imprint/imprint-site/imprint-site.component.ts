import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-site',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint-site.component.html',
  styleUrl: './imprint-site.component.scss',
})
export class ImprintSiteComponent {
  translate = inject(TranslationService);
}
