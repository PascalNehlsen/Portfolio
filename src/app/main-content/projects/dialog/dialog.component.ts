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
}
