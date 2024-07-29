import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss',
})
export class AtfComponent {
  constructor(public PortfolioService: PortfolioService) {}

  showImage(imageName: string) {
    this.PortfolioService.showImage(imageName);
  }

  hideImage() {
    this.PortfolioService.hideImage();
  }

  get activeImage(): string {
    return this.PortfolioService.getActiveImage();
  }
}
