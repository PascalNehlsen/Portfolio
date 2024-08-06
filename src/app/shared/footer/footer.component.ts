import { Component } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(
    public PortfolioService: PortfolioService,
    private router: Router
  ) {}

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
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
