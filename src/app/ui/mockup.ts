import { Component, input } from '@angular/core';

/**
 * The image areas in the community Figma file are empty placeholders,
 * so they are filled with lightweight product mockups built in HTML/CSS (no images to download).
 */
@Component({
  selector: 'app-mockup',
  host: { 'role': 'img', '[attr.aria-label]': 'label()' },
  template: `
    <div class="window" aria-hidden="true">
      <div class="bar"><i></i><i></i><i></i>
        @if (variant() === 'clipper') { <span class="url">example.com/article</span> }
      </div>
      @switch (variant()) {
        @case ('dashboard') {
          <div class="body dash">
            <div class="side"><b></b><b></b><b></b><b></b></div>
            <div class="main">
              <div class="kpis"><span><em>128</em>Tasks</span><span><em>86%</em>On time</span><span><em>12</em>Projects</span></div>
              <div class="chart">
                @for (h of bars; track $index) { <span [style.height.%]="h"></span> }
              </div>
            </div>
          </div>
        }
        @case ('board') {
          <div class="body board">
            @for (col of columns; track col.title) {
              <div class="col">
                <span class="col-title">{{ col.title }}</span>
                @for (card of col.cards; track card) {
                  <div class="card"><span class="tag" [style.background]="card"></span><b></b><b class="short"></b></div>
                }
              </div>
            }
          </div>
        }
        @case ('clipper') {
          <div class="body page">
            <b class="title"></b><b></b><b></b><b class="short"></b><b></b><b class="short"></b>
            <div class="popup">
              <strong>Clip to whitepace</strong>
              <span class="opt active">Full page</span><span class="opt">Screenshot</span>
              <span class="save">Save note</span>
            </div>
          </div>
        }
        @case ('themes') {
          <div class="body themes">
            <div class="swatches">
              @for (c of swatches; track c) { <span [style.background]="c"></span> }
            </div>
            @for (p of plugins; track p.name) {
              <div class="row">{{ p.name }}<span class="toggle" [class.on]="p.on"></span></div>
            }
          </div>
        }
      }
    </div>
  `,
  styleUrl: './mockup.scss'
})
export class Mockup {
  readonly variant = input.required<'dashboard' | 'board' | 'clipper' | 'themes'>();
  readonly label = input('');

  protected readonly bars = [45, 70, 55, 90, 65, 80, 100];
  protected readonly columns = [
    { title: 'To do', cards: ['#ffe492', '#4f9cf9'] },
    { title: 'In progress', cards: ['#4f9cf9', '#8abdfb', '#ffe492'] },
    { title: 'Done', cards: ['#a7cdfc'] }
  ];
  protected readonly swatches = ['#043873', '#4f9cf9', '#ffe492', '#212529', '#c4defd'];
  protected readonly plugins = [
    { name: 'Markdown editor', on: true },
    { name: 'Rich text editor', on: false },
    { name: 'Dark theme', on: true }
  ];
}
