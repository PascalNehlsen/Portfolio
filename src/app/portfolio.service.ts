import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}

  private activeImage: string = '';

  showImage(imageName: string) {
    this.activeImage = imageName;
  }

  hideImage() {
    this.activeImage = '';
  }

  getActiveImage(): string {
    return this.activeImage;
  }

  projects: {
    name: string;
    tools: string[];
    description: string;
    symbols: string[];
    image: string;
    target: string;
    targetDemo: string;
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
      target: 'https://github.com/PascalNehlsen/Join',
      targetDemo: '',
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
      target: 'https://github.com/PascalNehlsen/El-Pollo-Loco',
      targetDemo: '',
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'pokedex',
      image: './assets/img/projects/pokedex-dialog.png',
      description:
        "Pokedex Red Edition is a Pokémon enthusiast's dream. It enhances Pokémon exploration with its intuitive drag-and-drop functionality, dynamic Pokémon display, and engaging flip card feature. Users can effortlessly organize and view Pokémon details, making it a must-have tool for fans and collectors alike.",
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/Pokedex-Red',
      targetDemo: '',
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  openDialog(i: number) {
    const project = this.projects[i];
    const projectDialog = document.getElementById(
      'projectDialog'
    ) as HTMLDialogElement;
    const githubLink = document.getElementById(
      'githubLink'
    ) as HTMLAnchorElement;
    const demoLink = document.getElementById('demoLink') as HTMLAnchorElement;
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
    githubLink.href = project.target;
    projectDialog.style.display = 'flex';
  }
}
