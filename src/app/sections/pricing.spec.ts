import { TestBed } from '@angular/core/testing';
import { Pricing } from './pricing';

describe('Pricing', () => {
  it('renders three plans with the Personal plan highlighted', async () => {
    const fixture = TestBed.createComponent(Pricing);
    await fixture.whenStable();
    const plans = fixture.nativeElement.querySelectorAll('.plan') as NodeListOf<HTMLElement>;
    expect([...plans].map(p => p.querySelector('h3')?.textContent)).toEqual(['Free', 'Personal', 'Organization']);
    expect(plans[1].classList).toContain('featured');
    expect(plans[1].querySelectorAll('li').length).toBe(6);
  });
});
