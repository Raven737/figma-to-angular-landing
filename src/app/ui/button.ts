import { Component, input } from '@angular/core';

/** Button styles from the design: primary (blue), accent (yellow) and outline. */
@Component({
  selector: 'a[appButton], button[appButton]',
  template: `
    <ng-content />
    @if (arrow()) {
      <svg class="arrow" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M1 7h12M7.5 1.5 13 7l-5.5 5.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    }
  `,
  host: { '[class]': '"btn btn--" + variant()' },
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 20px 40px;
      border: 1px solid transparent;
      border-radius: var(--radius);
      font: 500 18px/23px var(--font);
      letter-spacing: -0.02em;
      text-decoration: none;
      white-space: nowrap;
      cursor: pointer;
      transition: background-color .2s, color .2s, transform .2s, box-shadow .2s;
    }
    :host(:hover) { transform: translateY(-1px); box-shadow: 0 6px 16px rgb(4 56 115 / 0.18); }
    :host(.btn--primary) { background: var(--btn-bg); color: var(--white); }
    :host(.btn--primary:hover) { background: #3d8ae8; }
    :host(.btn--accent) { background: var(--yellow); color: var(--navy); }
    :host(.btn--outline) { background: var(--white); color: var(--text); border-color: var(--yellow); padding: 16px 40px; font-size: 16px; line-height: 19px; }
    :host(.btn--small) { padding: 16px 24px; background: var(--btn-bg); color: var(--white); }
    :host(.btn--small:hover) { background: #3d8ae8; }
    .arrow { flex-shrink: 0; }
    @media (prefers-reduced-motion: reduce) { :host { transition: none; } :host(:hover) { transform: none; } }
  `
})
export class Button {
  readonly variant = input<'primary' | 'accent' | 'outline' | 'small'>('primary');
  readonly arrow = input(true);
}
