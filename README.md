# Astera Studio — Institutional Website

Site institucional da **Astera Studio**, um estúdio criativo independente que une estratégia, design e tecnologia para criar experiências digitais.

Este repositório apresenta a implementação front-end do projeto, desenvolvido a partir de uma proposta visual criada no Figma e posteriormente estruturado e refatorado em **React + TypeScript**, com foco em arquitetura de componentes, responsividade, acessibilidade e qualidade de código.

## Sobre o projeto

A primeira versão da interface foi desenvolvida com apoio do **Figma Make** e exportada para React. A partir dessa base, o projeto passou por um processo de refatoração para transformar o código gerado em uma aplicação mais organizada, reutilizável e preparada para manutenção e evolução.

O trabalho envolveu revisão da arquitetura, criação de componentes reutilizáveis, centralização de tokens visuais, melhorias de semântica e acessibilidade, otimização de assets e validação do comportamento da interface em diferentes tamanhos de tela.

## Stack

* React 19
* TypeScript
* Vite
* Tailwind CSS 4
* HTML5
* CSS3
* Git & GitHub
* Vercel

## Principais implementações

### Arquitetura e componentização

* Organização dos componentes por responsabilidade e domínio.
* Separação entre componentes de interface, layout e seções da página.
* Criação de componentes reutilizáveis para elementos recorrentes da interface.
* Centralização de tokens e constantes para reduzir valores dispersos pelo código.
* Uso de tipos compartilhados com TypeScript.

### Responsividade

A interface foi adaptada para diferentes tamanhos de viewport, incluindo desktop, tablet e mobile.

Entre os ajustes estão:

* navegação adaptativa;
* reorganização de elementos da Hero Section;
* grids responsivos;
* ajustes tipográficos;
* espaçamentos fluidos;
* adaptação das seções e cards para diferentes breakpoints.

### Acessibilidade

O projeto recebeu uma revisão específica de acessibilidade e semântica, incluindo:

* landmarks semânticos;
* `main` único para o conteúdo principal;
* skip link para navegação por teclado;
* hierarquia de headings;
* elementos decorativos removidos da árvore de acessibilidade;
* navegação por teclado;
* tratamento de foco;
* suporte a `prefers-reduced-motion`.

### Performance e otimização

Durante a etapa de refinamento foram realizadas otimizações como:

* conversão e compressão de assets;
* uso de WebP para imagens;
* otimização do carregamento de fontes;
* redução de recursos desnecessários;
* validação de build de produção;
* análise da interface com Lighthouse.

## Estrutura

```text
src/
├── assets/
├── components/
├── constants/
├── theme/
├── types/
├── App.tsx
├── index.css
└── main.tsx
```

A estrutura foi organizada para manter responsabilidades separadas e facilitar a manutenção e evolução da aplicação.

## Executando localmente

Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
```

Entre na pasta:

```bash
cd astera-studio-website
```

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Para validar os tipos:

```bash
npm run typecheck
```

Para gerar o build de produção:

```bash
npm run build
```

## Deploy

O projeto está disponível em produção em:

**https://goastera.com.br/**

## Contexto

Este projeto faz parte do desenvolvimento da presença digital da **Astera Studio**.

O repositório público foi preparado como uma versão de apresentação técnica do projeto. O desenvolvimento operacional da Astera é mantido separadamente em um repositório privado.

---

Desenvolvido por **Ruth Emilly dos Anjos Paulino**
Front-end Developer