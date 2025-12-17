import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class NavbarComponent implements OnInit {
  activeSection = 'about';
  isMenuOpen = false;

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['about', 'skills', 'projects', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= -100 && rect.top <= 300) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollTo(sectionId: string) {
    this.activeSection = sectionId;
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}