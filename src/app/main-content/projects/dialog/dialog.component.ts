import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
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
    let number = parseInt(projectNumber, 10) + 1;
    if (number > 3) {
      number = 1;
    }
  }
}
