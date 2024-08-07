import { Component, inject } from '@angular/core';
import { ImprintSiteComponent } from './imprint-site/imprint-site.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    ImprintSiteComponent,
    PrivacyPolicyComponent,
    RouterModule,
    TranslateModule,
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  translate = inject(TranslationService);
}
