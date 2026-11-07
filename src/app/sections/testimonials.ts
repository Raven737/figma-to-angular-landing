import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Carousel } from '../ui/carousel';

@Component({
  selector: 'app-testimonials',
  imports: [Carousel, NgOptimizedImage],
  template: `
    <section class="section" aria-labelledby="clients-title">
      <div class="container">
        <h2 id="clients-title" class="h-section title">What Our Clients <span class="hl">Say</span></h2>
        <app-carousel [count]="clients.length" [start]="0" label="Client testimonials">
          @for (c of clients; track c.photo; let i = $index) {
            <figure class="client" [class.blue]="i > 0">
              <svg class="quote" width="86" height="62" viewBox="0 0 86 62" aria-hidden="true">
                <path fill="currentColor" d="M86 12.7 83.2 0C63.4.9 49.6 9.2 49.6 33.5v28h34.7V26.3H71.2c0-7.8 4.9-12.4 14.8-13.6ZM36.4 12.7 33.6 0C13.8.9 0 9.2 0 33.5v28h34.7V26.3H21.6c0-7.8 4.9-12.4 14.8-13.6Z" />
              </svg>
              <blockquote>Whitepace is designed as a collaboration tool for businesses that is a full project management solution.</blockquote>
              <figcaption>
                <img [ngSrc]="'images/' + c.photo" width="95" height="95" alt="" />
                <span><strong>{{ c.name }}</strong>{{ c.role }}</span>
              </figcaption>
            </figure>
          }
        </app-carousel>
      </div>
    </section>
  `,
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  protected readonly clients = [
    { name: 'Oberon Shaw, MCH', role: 'Head of Talent Acquisition, North America', photo: 'avatar-1.webp' },
    { name: 'Oberon Shaw, MCH', role: 'Head of Talent Acquisition, North America', photo: 'avatar-2.webp' },
    { name: 'Oberon Shaw, MCH', role: 'Head of Talent Acquisition, North America', photo: 'avatar-3.webp' }
  ];
}
