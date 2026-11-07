import { Component } from '@angular/core';
import { Button } from '../ui/button';

@Component({
  selector: 'app-free-trial',
  imports: [Button],
  template: `
    <section class="section section--dark" id="free-trial" aria-labelledby="trial-title">
      <div class="container inner">
        <h2 id="trial-title" class="h-section">Try Whitepace today</h2>
        <p class="sub">Get started for free.<br />Add your whole team as your needs grow.</p>
        <a appButton href="#pricing">Try Whitepace free</a>
        <p class="sub">On a big team? <a href="mailto:sales@example.com">Contact sales</a></p>
        <img src="images/platforms.svg" width="260" height="60" alt="Available for macOS, Windows and Android" loading="lazy" />
      </div>
    </section>
  `,
  styles: `
    @use 'tokens' as *;
    .section { padding-bottom: 0; }
    .inner { display: flex; flex-direction: column; align-items: center; gap: 40px; text-align: center; }
    h2 { max-width: 608px; margin-bottom: -16px; }
    .sub { font-size: 24px; line-height: 32px; }
    .sub a { text-decoration: none; border-bottom: 1px solid var(--yellow); &:hover { color: var(--yellow); } }
    img { width: 208px; height: auto; }
    @include desktop { img { width: 260px; } }
  `
})
export class FreeTrial {}
