import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DialogComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  static openDialog(number: number) {
    throw new Error('Method not implemented.');
  }
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

  showProject(i: number): void {
    this.PortfolioService.openDialog(i);
  }
}
