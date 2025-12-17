import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimation implements OnInit, OnDestroy {
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('visible');
          // Optional: Stop observing once visible if you want it to animate only once
          // this.observer?.unobserve(this.el.nativeElement); 
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Offset a bit so it triggers before bottom
    });

    this.observer.observe(this.el.nativeElement);
    this.el.nativeElement.classList.add('scroll-hidden');
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
