import { describe, expect, it } from 'vitest';
import { agencias, clientes, contas } from './mockData';

const checkDigit = (digits: string, weights: number[]) => {
  const remainder = weights.reduce((sum, weight, i) => sum + Number(digits[i]) * weight, 0) % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

const CPF_WEIGHTS = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
const CNPJ_WEIGHTS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

const hasValidCheckDigits = (doc: string) => {
  const weights = doc.length === 11 ? CPF_WEIGHTS : CNPJ_WEIGHTS;
  return (
    checkDigit(doc, weights.slice(1)) === Number(doc[doc.length - 2]) &&
    checkDigit(doc, weights) === Number(doc[doc.length - 1])
  );
};

describe('mockData', () => {
  it('recognizes a document with valid check digits', () => {
    expect(hasValidCheckDigits('52998224725')).toBe(true);
    expect(hasValidCheckDigits('11222333000181')).toBe(true);
  });

  it('only has documents with invalid check digits', () => {
    clientes.forEach((cliente) => {
      expect([11, 14]).toContain(cliente.cpfCnpj.length);
      expect(hasValidCheckDigits(cliente.cpfCnpj)).toBe(false);
    });
  });

  it('only has e-mails under the reserved domain', () => {
    clientes.forEach((cliente) => expect(cliente.email).toMatch(/@exemplo\.invalid$/));
  });

  it('has more clients than one page and unique ids', () => {
    expect(clientes.length).toBeGreaterThan(10);
    expect(new Set(clientes.map((cliente) => cliente.id)).size).toBe(clientes.length);
  });

  it('links accounts and clients to existing records', () => {
    const documentos = new Set(clientes.map((cliente) => cliente.cpfCnpj));
    const codigos = new Set(agencias.map((agencia) => agencia.codigo));

    contas.forEach((conta) => expect(documentos.has(conta.cpfCnpjCliente)).toBe(true));
    clientes.forEach((cliente) => expect(codigos.has(cliente.codigoAgencia)).toBe(true));
  });
});
