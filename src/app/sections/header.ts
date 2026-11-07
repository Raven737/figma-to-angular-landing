import { Component, signal } from '@angular/core';
import { Button } from '../ui/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  template: `
    <header class="header">
      <div class="container inner">
        <a href="#top" class="logo"><img src="images/logo.svg" width="191" height="34" alt="whitepace home" /></a>

        <button
          type="button"
          class="burger"
          [attr.aria-expanded]="open()"
          aria-controls="main-nav"
          (click)="toggle()">
          <span class="visually-hidden">{{ open() ? 'Close menu' : 'Open menu' }}</span>
          <span class="lines" [class.x]="open()"><i></i><i></i><i></i></span>
        </button>

        <div id="main-nav" class="menu" [class.open]="open()">
          <nav aria-label="Main">
            <ul>
              @for (item of nav; track item.label) {
                <li>
                  <a [href]="item.href" (click)="close()">
                    {{ item.label }}
                    <svg width="9" height="5" viewBox="0 0 9 5" aria-hidden="true"><path d="m1 1 3.5 3L8 1" fill="none" stroke="currentColor" stroke-linecap="round" /></svg>
                  </a>
                </li>
              }
            </ul>
          </nav>
          <div class="actions">
            <a appButton variant="accent" [arrow]="false" href="#pricing" (click)="close()">Login</a>
            <a appButton variant="small" href="#free-trial" (click)="close()">Try Whitepace free</a>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.scss',
  host: { '(document:keydown.escape)': 'close()' }
})
export class Header {
  readonly open = signal(false);
  protected readonly nav = [
    { label: 'Products', href: '#features' },
    { label: 'Solutions', href: '#extension' },
    { label: 'Resources', href: '#apps' },
    { label: 'Pricing', href: '#pricing' }
  ];

  toggle(): void { this.open.update(v => !v); }
  close(): void { this.open.set(false); }
}
