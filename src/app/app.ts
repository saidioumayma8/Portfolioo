import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';
import { ScrollAnimation } from './shared/directives/scroll-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ScrollAnimation
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'portfolio';
}