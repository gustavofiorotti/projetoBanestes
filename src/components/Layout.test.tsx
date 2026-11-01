import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Layout from './Layout';

describe('Layout', () => {
  it('shows the logo from the project base path', () => {
    render(<Layout>content</Layout>);
    const logo = screen.getByAltText('Logo Banestes');
    expect(logo.getAttribute('src')).toBe(`${import.meta.env.BASE_URL}logo-banestes.svg`);
  });

  it('keeps the prototype notice next to the logo', () => {
    render(<Layout>content</Layout>);
    expect(screen.getByText('Protótipo · dados fictícios')).toBeTruthy();
  });
});
