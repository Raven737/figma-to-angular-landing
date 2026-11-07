import { Component } from '@angular/core';
import { Button } from '../ui/button';
import { Mockup } from '../ui/mockup';

@Component({
  selector: 'app-hero',
  imports: [Button, Mockup],
  template: `
    <section class="section section--dark hero" id="top" aria-labelledby="hero-title">
      <img class="waves" src="images/waves-hero.svg" alt="" aria-hidden="true" />
      <div class="container grid">
        <div class="text">
          <h1 id="hero-title">Get More Done with whitepace</h1>
          <p class="lead">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
          <a appButton href="#free-trial">Try Whitepace free</a>
        </div>
        <app-mockup variant="dashboard" label="Whitepace dashboard with task statistics and a weekly chart" />
      </div>
    </section>
  `,
  styleUrl: './hero.scss'
})
export class Hero {}
