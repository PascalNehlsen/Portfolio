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
      image: './assets/img/projects/join-dialog.png',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/firebase-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      tools: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    },
    {
      name: 'elpolloloco',
      image: './assets/img/projects/elpolloloco-dialog.png',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'pokedex',
      image: './assets/img/projects/pokedex-dialog.png',
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      tools: ['JavaScript', 'HTML', 'CSS'],
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
    const project = this.projects[i];
    const projectDialog = document.getElementById(
      'projectDialog'
    ) as HTMLDialogElement;
    const projectNumber = document.getElementById(
      'projectNumber'
    ) as HTMLSpanElement;
    const projectTitle = document.getElementById(
      'projectTitle'
    ) as HTMLSpanElement;
    const projectDescription = document.getElementById(
      'projectDescription'
    ) as HTMLParagraphElement;
    const projectImg = document.getElementById(
      'projectImg'
    ) as HTMLImageElement;
    const skillsContainer = document.getElementById(
      'projectSkills'
    ) as HTMLDivElement;

    skillsContainer.innerHTML = '';
    const toolsAndSymbols = project.tools.map((tool, index) => ({
      tool,
      symbol: project.symbols[index] || '',
    }));

    toolsAndSymbols.forEach(({ tool, symbol }) => {
      const skillDiv = document.createElement('div');
      if (symbol) {
        skillDiv.innerHTML = `<img src="${symbol}" alt=""> ${tool}`;
      } else {
        skillDiv.innerHTML = `${tool}`;
      }
      skillsContainer.appendChild(skillDiv);
    });

    let number = i + 1;
    projectImg.src = project.image;
    projectNumber.innerHTML = number.toString().padStart(2, '0');
    projectTitle.innerHTML =
      project.name === 'elpolloloco' ? 'el Pollo Loco' : project.name;
    projectDescription.innerHTML = project.description;
    projectDialog.style.display = 'flex';
  }
}
