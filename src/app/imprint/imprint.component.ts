import { Component, EventEmitter } from '@angular/core';
import { ImprintSiteComponent } from './imprint-site/imprint-site.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ImprintSiteComponent, PrivacyPolicyComponent, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {}
