import { Component } from '@angular/core';
import { Button } from '../ui/button';

@Component({
  selector: 'app-footer',
  imports: [Button],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="cols">
          <div class="about">
            <img src="images/logo.svg" width="191" height="34" alt="whitepace" loading="lazy" />
            <p>whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
          </div>
          @for (col of columns; track col.title) {
            <nav [attr.aria-label]="col.title">
              <h3>{{ col.title }}</h3>
              <ul>
                @for (link of col.links; track link; let first = $first) {
                  <li><a href="#top" [class.current]="col.title === 'Product' && first">{{ link }}</a></li>
                }
              </ul>
            </nav>
          }
          <div class="try">
            <h3 class="try-title">Try It Today</h3>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <a appButton variant="small" href="#free-trial">Start today</a>
          </div>
        </div>

        <div class="bottom">
          <div class="legal">
            <span class="lang">
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" /><path d="M2.5 12h19M12 2.5c3 3.3 3 15.7 0 19M12 2.5c-3 3.3-3 15.7 0 19" fill="none" stroke="currentColor" /></svg>
              English
            </span>
            <a href="#top">Terms &amp; privacy</a>
            <a href="#top">Security</a>
            <a href="#top">Status</a>
            <span>©2021 Whitepace LLC.</span>
          </div>
          <img src="images/social.svg" width="105" height="17" alt="Facebook, Twitter and LinkedIn" loading="lazy" />
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly columns = [
    { title: 'Product', links: ['Overview', 'Pricing', 'Customer stories'] },
    { title: 'Resources', links: ['Blog', 'Guides & tutorials', 'Help center'] },
    { title: 'Company', links: ['About us', 'Careers', 'Media kit'] }
  ];
}
