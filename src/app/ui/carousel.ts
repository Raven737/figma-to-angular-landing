import { Component, ElementRef, computed, input, signal, viewChild } from '@angular/core';

/**
 * A grid of cards on desktop, a swipeable scroll-snap carousel with dots below 1152px
 * (the mobile and tablet versions of the pricing and testimonial sections).
 */
@Component({
  selector: 'app-carousel',
  template: `
    <div #track class="track" (scroll)="onScroll()" tabindex="0" [attr.aria-label]="label()" role="region">
      <ng-content />
    </div>
    <div class="dots">
      @for (dot of dots(); track dot) {
        <button
          type="button"
          class="dot"
          [class.active]="dot === active()"
          [attr.aria-label]="'Show item ' + (dot + 1)"
          [attr.aria-current]="dot === active()"
          (click)="goTo(dot)"></button>
      }
    </div>
  `,
  styleUrl: './carousel.scss'
})
export class Carousel {
  readonly count = input.required<number>();
  readonly label = input('Carousel');
  /** Item shown first, the middle one by default like in the design */
  readonly start = input(1);

  private readonly track = viewChild.required<ElementRef<HTMLElement>>('track');
  private readonly scrolled = signal<number | null>(null);

  readonly active = computed(() => this.scrolled() ?? this.start());
  readonly dots = computed(() => Array.from({ length: this.count() }, (_, i) => i));

  ngAfterViewInit(): void {
    // Start on the highlighted card without animating the jump
    this.goTo(this.start(), 'instant');
  }

  onScroll(): void {
    const el = this.track().nativeElement;
    const item = el.firstElementChild as HTMLElement | null;
    if (!item || el.scrollWidth <= el.clientWidth) return;
    const step = item.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0');
    this.scrolled.set(Math.round(el.scrollLeft / step));
  }

  goTo(index: number, behavior: ScrollBehavior = 'smooth'): void {
    const el = this.track().nativeElement;
    const item = el.children[index] as HTMLElement | undefined;
    if (!item || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({ left: item.offsetLeft - el.offsetLeft - (el.clientWidth - item.offsetWidth) / 2, behavior });
    this.scrolled.set(index);
  }
}
