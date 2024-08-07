import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    public PortfolioService: PortfolioService,
    private router: Router
  ) {}

  translate = inject(TranslationService);

  imprint: string = '/imprint';

  showImage(imageName: string) {
    this.PortfolioService.showImage(imageName);
  }

  hideImage() {
    this.PortfolioService.hideImage();
  }

  get activeImage(): string {
    return this.PortfolioService.getActiveImage();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlFragment = this.router.parseUrl(this.router.url).fragment;
        if (!urlFragment) {
          window.scrollTo(0, 0);
        }
      }
    });
  }
}
