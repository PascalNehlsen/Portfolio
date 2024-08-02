import { Component, HostListener, Input } from '@angular/core';
import { PortfolioService } from '../../../portfolio.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(public PortfolioService: PortfolioService) {}

  @Input() singleproject!: {
    name: string;
    tools: string[];
    description: string;
    symbols: string[];
    image: string;
    imageDialog?: string;
  };

  closeDialog() {
    const projectDialog = document.getElementById(
      'projectDialog'
    ) as HTMLDialogElement;
    projectDialog.style.display = 'none';
  }

  nextProject() {
    const projectNumber = document.getElementById('projectNumber')
      ?.innerHTML as string;
    let number = parseInt(projectNumber, 10);
    if (number == 3) {
      number = 0;
    }
    this.PortfolioService.openDialog(number);
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dialog = document.getElementById('dialogContainer');

    if (dialog && dialog.contains(target)) {
      this.closeDialog();
    }
  }
}
