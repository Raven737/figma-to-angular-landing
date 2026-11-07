import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  template: `
    <section class="section" aria-labelledby="sponsors-title">
      <div class="container inner">
        <h2 id="sponsors-title" class="h-section">Our <span class="hl">sponsors</span></h2>
        <ul>
          @for (s of sponsors; track s.name) {
            <li><img [src]="'images/sponsor-' + s.file + '.svg'" [width]="s.w" [height]="s.h" [alt]="s.name" loading="lazy" /></li>
          }
        </ul>
      </div>
    </section>
  `,
  styles: `
    @use 'tokens' as *;
    .inner { display: flex; flex-direction: column; align-items: center; gap: 100px; text-align: center; }
    ul { list-style: none; margin: 0; padding: 0; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 64px; }
    img { height: auto; max-width: 70vw; }
    @include desktop { ul { flex-direction: row; justify-content: space-between; } }
  `
})
export class Sponsors {
  protected readonly sponsors = [
    { name: 'Apple', file: 'apple', w: 55, h: 68 },
    { name: 'Microsoft', file: 'microsoft', w: 287, h: 62 },
    { name: 'Slack', file: 'slack', w: 280, h: 71 },
    { name: 'Google', file: 'google', w: 211, h: 70 }
  ];
}
