import { Component, HostListener, inject, Input } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { TranslationService } from '../../../services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(public PortfolioService: PortfolioService) {}

  translate = inject(TranslationService);

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
    if (number == 4) {
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
