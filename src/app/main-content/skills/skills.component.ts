import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { TranslationService } from '../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
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
}
