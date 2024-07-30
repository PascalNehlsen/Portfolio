import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AtfComponent } from './atf/atf.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutMeComponent,
    AtfComponent,
    ContactComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
