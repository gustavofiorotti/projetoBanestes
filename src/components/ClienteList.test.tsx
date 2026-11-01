import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ClienteList from './ClienteList';
import { clientes } from '../data/mockData';

const search = (value: string) =>
  fireEvent.change(screen.getByPlaceholderText(/Buscar/), { target: { value } });

describe('ClienteList', () => {
  afterEach(cleanup);

  const renderList = (onSelectCliente = vi.fn()) =>
    render(<ClienteList clientes={clientes} onSelectCliente={onSelectCliente} />);

  it('paginates ten clients per page', () => {
    renderList();
    expect(screen.getByText(`Mostrando 1-10 de ${clientes.length} clientes`)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: 'Página 2' }));
    expect(screen.getByText(`Mostrando 11-20 de ${clientes.length} clientes`)).toBeTruthy();
  });

  it('filters by name without matching every client', () => {
    renderList();
    search('Helena');
    expect(screen.getByText('Mostrando 1-1 de 1 clientes')).toBeTruthy();
    expect(screen.getByText('Helena Exemplo Prado')).toBeTruthy();
  });

  it('filters by a formatted document', () => {
    renderList();
    search('000.000.001-00');
    expect(screen.getByText('Mostrando 1-1 de 1 clientes')).toBeTruthy();
  });

  it('shows the empty state when nothing matches', () => {
    renderList();
    search('zzzz');
    expect(screen.getByText('Nenhum cliente encontrado.')).toBeTruthy();
  });

  it('returns to the first page when the search is cleared', () => {
    renderList();
    fireEvent.click(screen.getByRole('button', { name: 'Página 2' }));
    search('Helena');
    search('');
    expect(screen.getByText(`Mostrando 1-10 de ${clientes.length} clientes`)).toBeTruthy();
  });

  it('notifies the selected client', () => {
    const onSelectCliente = vi.fn();
    renderList(onSelectCliente);
    fireEvent.click(screen.getByText(clientes[0].nome));
    expect(onSelectCliente).toHaveBeenCalledWith(clientes[0]);
  });
});
