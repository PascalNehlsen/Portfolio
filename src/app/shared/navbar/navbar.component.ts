import { Component, HostListener, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  engVisible = true;
  gerVisible = false;

  constructor(public PortfolioService: PortfolioService) {}

  translate = inject(TranslationService);

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

    if (this.engVisible) {
      this.translate.switchLanguage('en');
    } else {
      this.translate.switchLanguage('de');
    }
  }

  showBurgerMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.toggle('active');
    }
  }

  closeMenu(): void {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.closeMenu();
  }
}
