import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Carousel } from './carousel';

@Component({
  imports: [Carousel],
  template: `<app-carousel [count]="3" label="Plans"><div>A</div><div>B</div><div>C</div></app-carousel>`
})
class Host {}

describe('Carousel', () => {
  it('renders one dot per item and marks the start item as current', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const dots = fixture.nativeElement.querySelectorAll('.dot') as NodeListOf<HTMLButtonElement>;
    expect(dots.length).toBe(3);
    expect(dots[1].getAttribute('aria-current')).toBe('true');
    expect(dots[1].getAttribute('aria-label')).toBe('Show item 2');
  });
});
