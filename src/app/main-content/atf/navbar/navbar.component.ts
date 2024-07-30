import { Component } from '@angular/core';
import { PortfolioService } from './../../../portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  engVisible = true;
  gerVisible = false;

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

  translateToggle() {
    this.engVisible = !this.engVisible;
    this.gerVisible = !this.gerVisible;
  }
}
