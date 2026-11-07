import { TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  it('opens and closes the mobile menu and keeps aria-expanded in sync', async () => {
    const fixture = TestBed.createComponent(Header);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    const burger = el.querySelector('.burger') as HTMLButtonElement;

    burger.click();
    await fixture.whenStable();
    expect(burger.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('.menu')?.classList).toContain('open');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(burger.getAttribute('aria-expanded')).toBe('false');
  });
});
