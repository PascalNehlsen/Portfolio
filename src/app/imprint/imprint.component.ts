import { Component } from '@angular/core';
import { ImprintSiteComponent } from './imprint-site/imprint-site.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ImprintSiteComponent, PrivacyPolicyComponent, RouterModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
