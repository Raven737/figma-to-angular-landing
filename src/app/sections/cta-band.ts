import { Component } from '@angular/core';
import { Button } from '../ui/button';

@Component({
  selector: 'app-cta-band',
  imports: [Button],
  template: `
    <section class="section section--dark" aria-labelledby="everywhere-title">
      <img class="lines" src="images/lines-side.svg" alt="" aria-hidden="true" />
      <div class="container inner">
        <h2 id="everywhere-title" class="h-section">Your work, everywhere <span class="hl--blue">you are</span></h2>
        <p class="lead">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        <a appButton href="#free-trial">Try Whitepace</a>
      </div>
    </section>
  `,
  styles: `
    @use 'tokens' as *;
    .lines { position: absolute; left: -12%; top: -10%; width: 40%; opacity: .2; pointer-events: none; }
    .inner { position: relative; display: flex; flex-direction: column; align-items: center; gap: 24px; text-align: center; }
    p { max-width: 1064px; }
    a { margin-top: 36px; }
  `
})
export class CtaBand {}
