# Projeto Banestes: protótipo de gerenciamento de clientes

Protótipo front-end feito para um processo seletivo do Banestes. Não é um produto pronto nem um sistema oficial do banco, e não tem vínculo com os sistemas dele.

**Todos os dados são fictícios.** Nomes e endereços são inventados, CPFs e CNPJs têm dígitos verificadores inválidos e os e-mails usam o domínio reservado `.invalid`. Os registros ficam em [`src/data/mockData.ts`](src/data/mockData.ts), e o app roda sem backend nem serviço externo.

## Funcionalidades

- Lista de clientes com paginação (10 por página)
- Busca em tempo real por nome ou CPF/CNPJ
- Detalhes do cliente, com dados pessoais, agência e contas
- Clientes pessoa física e jurídica
- Layout responsivo

## Stack

- React 18 e TypeScript
- Vite 5
- Tailwind CSS 3
- Lucide React (ícones)
- ESLint

## Como rodar

Requer Node.js 18 ou superior.

```bash
git clone https://github.com/gustavofiorotti/projetoBanestes.git
cd projetoBanestes
npm install
npm run dev
```

O Vite mostra o endereço no terminal: por padrão, `http://localhost:5173/projetoBanestes/`.

## Scripts

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: build de produção
- `npm run preview`: serve a build localmente
- `npm run lint`: verificação com ESLint
- `npm run deploy`: publica a pasta `dist` no GitHub Pages

## Estrutura

```
src/
├── components/   # Componentes React
├── data/         # Dados fictícios
├── services/     # Acesso aos dados e formatação de valores
├── types/        # Tipos TypeScript
├── utils/        # Formatação de CPF/CNPJ
├── App.tsx
└── main.tsx
```

## Autor

**Gustavo Fiorotti**: [@gustavofiorotti](https://github.com/gustavofiorotti)
