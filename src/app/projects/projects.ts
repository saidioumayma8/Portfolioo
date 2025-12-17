import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MoveTrip.ma',
      description: 'Full-stack web application for caravan reservations. Features a secure admin dashboard, RESTful API for reservation workflows, and real-time analytics.',
      techStack: ['Angular', 'Spring Boot', 'MySQL', 'Docker', 'Git'],
      github: 'https://github.com/saidioumayma8'
    },
    {
      title: 'Trecktrouve',
      description: 'Platform for excursions, discovering remote areas, and offering tips for beginner hikers. Simplified Mountain Exploration in Morocco.',
      techStack: ['Laravel', 'MySQL', 'Tailwind', 'HTML', 'JavaScript', 'ReactJS'],
      github: 'https://github.com/saidioumayma8'
    },
    {
      title: 'EventEase',
      description: 'Web application to browse, filter, and book events, with an admin interface for managing users and events.',
      techStack: ['Angular', 'Angular Material', 'Spring Boot', 'Docker', 'Git'],
      github: 'https://github.com/saidioumayma8'
    },
    {
      title: 'ConstructionXpert',
      description: 'Web application for planning, tracking, and managing construction projects, tasks, and resources.',
      techStack: ['Java EE', 'MySQL', 'Tailwind', 'Apache Tomcat'],
      github: 'https://github.com/saidioumayma8'
    }
  ];
}
