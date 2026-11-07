import { Component, input } from '@angular/core';

/**
 * Text + media split used by six sections of the design.
 * Content is projected: [heading], [body], [action] and [media].
 */
@Component({
  selector: 'app-feature',
  template: `
    <section class="section" [class.section--dark]="theme() === 'dark'" [attr.id]="anchor()" [attr.aria-label]="label()">
      <ng-content select="[decor]" />
      <div class="container grid" [class.reverse]="mediaFirst()">
        <div class="text">
          <ng-content select="[heading]" />
          <ng-content select="[body]" />
          <div class="action"><ng-content select="[action]" /></div>
        </div>
        <div class="media"><ng-content select="[media]" /></div>
      </div>
    </section>
  `,
  styleUrl: './feature.scss',
  host: { '[class.media-top]': 'mediaOnTop()' }
})
export class Feature {
  readonly theme = input<'light' | 'dark'>('light');
  /** On desktop the media column comes first (left) */
  readonly mediaFirst = input(false);
  /** On mobile and tablet the media goes above the text */
  readonly mediaOnTop = input(false);
  readonly anchor = input<string | null>(null);
  readonly label = input<string | null>(null);
}
