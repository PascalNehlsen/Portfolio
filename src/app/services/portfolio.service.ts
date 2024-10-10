import { inject, Injectable } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor() {}
  translate = inject(TranslationService);

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
      name: 'devsecops-blog',
      image: './assets/img/projects/devsecops-blog.png',
      description:
        "On this page, you'll find an overview of my recent DevSecOps projects. I focus on integrating security into CI/CD pipelines and automating compliance and monitoring to create secure and scalable solutions. Explore my work to see how I enhance software delivery while maintaining a strong security posture.",
      symbols: [
        './assets/img/icons/docusaurus.svg',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/devsecops-blog/',
      targetDemo: 'https://pascalnehlsen.github.io/devsecops-blog/',
      tools: ['Docusaurus', 'HTML', 'CSS'],
    },
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
      targetDemo: 'https://pascal-nehlsen.de/join/',
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
      targetDemo: 'https://pascal-nehlsen.de/el-pollo-loco/',
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
      targetDemo: 'https://pascal-nehlsen.de/pokedex/',
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  projectsDe: {
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
      name: 'devsecops-blog',
      image: './assets/img/projects/devsecops-blog.png',
      description:
        'Auf dieser Seite findest du eine Übersicht über meine aktuellen Projekte im DevSecOps-Bereich. Ich konzentriere mich darauf, Sicherheit in CI/CD-Pipelines zu integrieren und Compliance sowie Monitoring zu automatisieren, um sichere und skalierbare Lösungen zu schaffen. Entdecke meine Arbeiten, um zu sehen, wie ich die Softwarebereitstellung verbessere und gleichzeitig eine starke Sicherheitslage aufrechterhalte.',
      symbols: [
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/devsecops-blog/',
      targetDemo: 'https://pascalnehlsen.github.io/devsecops-blog/',
      tools: ['Docusaurus', 'HTML', 'CSS'],
    },
    {
      name: 'join',
      image: './assets/img/projects/join-dialog.png',
      description:
        'Manager nach dem Vorbild eines Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/firebase-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/Join',
      targetDemo: 'https://pascal-nehlsen.de/join/',
      tools: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
    },
    {
      name: 'elpolloloco',
      image: './assets/img/projects/elpolloloco-dialog.png',
      description:
        'Jump `n Run Spiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/El-Pollo-Loco',
      targetDemo: 'https://pascal-nehlsen.de/el-pollo-loco/',
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'pokedex',
      image: './assets/img/projects/pokedex-dialog.png',
      description:
        'Pokedex Rot ist der Traum eines jeden Pokémon-Liebhabers. Mit der Drag-and-Drop-Funktionalität, der dynamischen Pokémon-Anzeige und Klappkartenfunktion verbessert es die Pokémon-Erkundung. Die Benutzer können mühelos Pokémon-Details organisieren, was es zu einem unverzichtbaren Werkzeug für Fans macht.',
      symbols: [
        './assets/img/icons/javascript-green.png',
        './assets/img/icons/html-green.png',
        './assets/img/icons/css-green.png',
      ],
      target: 'https://github.com/PascalNehlsen/Pokedex-Red',
      targetDemo: 'https://pascal-nehlsen.de/pokedex/',
      tools: ['JavaScript', 'HTML', 'CSS'],
    },
  ];

  openDialog(i: number) {
    const project = this.translate.langDe
      ? this.projectsDe[i]
      : this.projects[i];

    const elements = this.getElements();
    this.updateDialogContent(elements, project, i);
    this.populateSkills(
      elements.skillsContainer,
      project.tools,
      project.symbols
    );

    elements.projectDialog.style.display = 'flex';
  }

  getElements() {
    return {
      projectDialog: document.getElementById(
        'projectDialog'
      ) as HTMLDialogElement,
      githubLink: document.getElementById('githubLink') as HTMLAnchorElement,
      demoLink: document.getElementById('demoLink') as HTMLAnchorElement,
      projectNumber: document.getElementById(
        'projectNumber'
      ) as HTMLSpanElement,
      projectTitle: document.getElementById('projectTitle') as HTMLSpanElement,
      projectDescription: document.getElementById(
        'projectDescription'
      ) as HTMLParagraphElement,
      projectImg: document.getElementById('projectImg') as HTMLImageElement,
      skillsContainer: document.getElementById(
        'projectSkills'
      ) as HTMLDivElement,
    };
  }

  updateDialogContent(
    elements: ReturnType<typeof this.getElements>,
    project: any,
    i: number
  ) {
    elements.projectImg.src = project.image;
    elements.projectNumber.innerHTML = (i + 1).toString().padStart(2, '0');

    if (project.name === 'elpolloloco') {
      elements.projectTitle.innerHTML = 'el Pollo Loco';
    } else if (project.name === 'devsecops-blog') {
      elements.projectTitle.innerHTML = 'devSecOps Blog';
    } else {
      elements.projectTitle.innerHTML = project.name;
    }

    elements.projectDescription.innerHTML = project.description;
    elements.githubLink.href = project.target;
    elements.demoLink.href = project.targetDemo;
  }

  populateSkills(
    skillsContainer: HTMLDivElement,
    tools: string[],
    symbols: string[]
  ) {
    skillsContainer.innerHTML = '';
    tools.forEach((tool, index) => {
      const skillDiv = document.createElement('div');
      const symbol = symbols[index] || '';
      skillDiv.innerHTML = symbol
        ? `<img src="${symbol}" alt=""> ${tool}`
        : tool;
      skillsContainer.appendChild(skillDiv);
    });
  }
}
