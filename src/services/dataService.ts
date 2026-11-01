import { Cliente, Conta, Agencia } from '../types';
import { clientes, contas, agencias } from '../data/mockData';


export const fetchClientes = async (): Promise<Cliente[]> => clientes;


export const fetchContas = async (): Promise<Conta[]> => contas;


export const fetchAgencias = async (): Promise<Agencia[]> => agencias;


export const getAgenciaByCodigo = (agencias: Agencia[], codigo: number): Agencia | undefined => {
  return agencias.find(agencia => agencia.codigo === codigo);
};


export const getContasForCliente = (contas: Conta[], cpfCnpj: string): Conta[] => {
  return contas.filter(conta => conta.cpfCnpjCliente === cpfCnpj);
};


export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};


export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR');
};