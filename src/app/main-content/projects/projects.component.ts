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
  constructor(public PortfolioService: PortfolioService) {}

  projects: {
    name: string;
    tools: string[];
    description: string;
    symbols: string[];
    image: string;
    imageDialog?: string;
  }[] = [
    {
      name: 'join',
      image: './assets/img/projects/join-small.png',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      symbols: [
        './assets/img/icons/css-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/firebase-green.png',
      ],
      tools: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
    },
    {
      name: 'elpolloloco',
      image: './assets/img/projects/elpolloloco-small.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      symbols: [
        './assets/img/icons/css-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/firebase-green.png',
      ],
      tools: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
    },
    {
      name: 'pokedex',
      image: './assets/img/projects/pokedex-small.png',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      symbols: [
        './assets/img/icons/css-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/firebase-green.png',
      ],
      tools: ['CSS', 'HTML', 'JavaScript', 'Firebase'],
    },
  ];

  showImage(imageName: string) {
    this.PortfolioService.showImage(imageName);
  }

  hideImage() {
    this.PortfolioService.hideImage();
  }

  get activeImage(): string {
    return this.PortfolioService.getActiveImage();
  }

  openDialog(i: number) {
    i = 0;
  }
}
