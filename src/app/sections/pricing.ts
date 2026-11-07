import { Component } from '@angular/core';
import { Button } from '../ui/button';
import { Carousel } from '../ui/carousel';

interface Plan {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  featured?: boolean;
}

const FEATURES = [
  'Sync unlimited devices',
  '10 GB monthly uploads',
  '200 MB max. note size',
  'Customize Home dashboard and access extra widgets',
  'Connect primary Google Calendar account',
  'Add due dates, reminders, and notifications to your tasks'
];

@Component({
  selector: 'app-pricing',
  imports: [Button, Carousel],
  template: `
    <section class="section" id="pricing" aria-labelledby="pricing-title">
      <div class="container">
        <header class="intro">
          <h2 id="pricing-title" class="h-section">Choose Your <span class="hl">Plan</span></h2>
          <p class="lead">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Whitepace has the right plan for you.</p>
        </header>

        <app-carousel [count]="plans.length" label="Pricing plans">
          @for (plan of plans; track plan.name) {
            <article class="plan" [class.featured]="plan.featured">
              <h3>{{ plan.name }}</h3>
              <p class="price">{{ plan.price }}</p>
              <p class="tagline">{{ plan.tagline }}</p>
              <ul>
                @for (feature of plan.features; track feature) {
                  <li>
                    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M19 9.2v.8a9 9 0 1 1-5.3-8.2M19 2.8l-9 9-2.7-2.7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    {{ feature }}
                  </li>
                }
              </ul>
              <a appButton [variant]="plan.featured ? 'primary' : 'outline'" [arrow]="false" href="#free-trial">Get Started</a>
            </article>
          }
        </app-carousel>
      </div>
    </section>
  `,
  styleUrl: './pricing.scss'
})
export class Pricing {
  protected readonly plans: Plan[] = [
    { name: 'Free', price: '$0', tagline: 'Capture ideas and find them quickly', features: FEATURES },
    { name: 'Personal', price: '$11.99', tagline: 'Keep home and family on track', features: FEATURES, featured: true },
    { name: 'Organization', price: '$49.99', tagline: 'Capture ideas and find them quickly', features: FEATURES }
  ];
}
