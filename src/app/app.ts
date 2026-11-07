import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Button } from './ui/button';
import { Mockup } from './ui/mockup';
import { CtaBand } from './sections/cta-band';
import { Feature } from './sections/feature';
import { Footer } from './sections/footer';
import { FreeTrial } from './sections/free-trial';
import { Header } from './sections/header';
import { Hero } from './sections/hero';
import { Pricing } from './sections/pricing';
import { Sponsors } from './sections/sponsors';
import { Testimonials } from './sections/testimonials';

@Component({
  selector: 'app-root',
  imports: [Button, Mockup, NgOptimizedImage, Header, Hero, Feature, Pricing, CtaBand, Sponsors, Testimonials, FreeTrial, Footer],
  templateUrl: './app.html',
  styles: `
    @use 'tokens' as *;
    .topo { position: absolute; left: -110px; top: -40px; width: 570px; opacity: .2; pointer-events: none; }
    .apps-waves { position: absolute; left: -3%; top: 1%; width: 106%; max-width: none; opacity: .3; pointer-events: none; }
    .apps-title { max-width: 694px; }
    img.art { width: auto; max-width: 100%; height: auto; }
    .joined { --section-pad-top: 0px; }
  `
})
export class App {}
