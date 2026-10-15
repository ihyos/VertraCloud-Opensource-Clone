# VertraCloud — Open-Source UI Clone

<div align="center">

![VertraCloud Clone Preview](./preview-vertracloud.png)

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

**Uma reconstrução de alta fidelidade visual e funcional da plataforma VertraCloud, criada exclusivamente para estudos de engenharia de interface e design systems modernos.**

</div>

---

## ⚠️ Aviso Legal e Propósito Educacional (Disclaimer)

> **AVISO IMPORTANTE:**  
> Este projeto é uma **iniciativa independente de estudo e engenharia reversa de interface de usuário (UI/UX)**.  
> 
> - **Não Autorizado / Sem Vínculo Oficial:** Este repositório **não é autorizado, patrocinado ou afiliado** à Vertra Cloud ou à Vertra Cloud LTDA.
> - **Sem Finalidade Comercial ou Prejudicial:** Não há qualquer intenção de competir comercialmente, substituir serviços, infringir direitos de propriedade intelectual ou causar prejuízos técnicos, operacionais ou à reputação da plataforma original.
> - **Finalidade Exclusivamente Educacional:** O código foi desenvolvido estritamente como **material de aprendizado prático** para a comunidade de desenvolvedores front-end, demonstrando técnicas avançadas de renderização com Next.js 15, micro-interações, acessibilidade, animações CSS de alta precisão e construção de design systems com paletas de baixa luminância.
> - **Direitos Reservados:** Todas as marcas, logotipos, nomes comerciais e ativos visuais originais pertencem aos seus respectivos titulares de direitos.

---

## 🌟 Visão Geral do Projeto

A meta deste repositório é dissecar e reproduzir os padrões de design mais refinados da web contemporânea para serviços de nuvem e PaaS:
- **Tema Escuro de Alto Contraste**: Fundo em carvão escuro (`#121212` / `#1a1a1a`), bordas sutis com delimitações geométricas (`#2a2a2a`) e acentos vibrantes em **Flame Orange** (`#ff6100`) e **Status Green** (`#4cc26b`).
- **Micro-Interações e Animações**: Efeito sheen (`.vc-sheen`), linhas de commit animadas, pulsos de radar e medidores de escala vivos.
- **Controles Interativos Avançados**: Implementação completa de sliders com padrão Radix (sem depender de elementos brutos e sem estilização do navegador).

---

## 🔍 Anatomia e Explicação de Cada Componente

Abaixo está o detalhamento técnico e conceitual de cada seção da aplicação:

### 1. Barra de Navegação (`src/components/Navbar.tsx`)
- **Fidelidade Visual**: Réplica do cabeçalho oficial com o logotipo em nuvem da Vertra em gradiente laranja e tipografia Geist.
- **Menu e Links**: Navegação rápida para *Preços*, *Produto*, *Linguagens*, *Bancos* e *Docs*.
- **Ações Rápidas**: Botão de login ("Entrar") com visual limpo e estados ativos sem emblemas ou tags arbitrárias.

### 2. Seção Hero (`src/components/Hero.tsx`)
- **Composição Visual**: Integração da arte em perspectiva do pilar central (`/artifacts/pillar.webp`) com máscara gradiente vertical.
- **Divisor Geométrico (`.vc-hero-divider`)**: Divisor horizontal com marcadores em formato de diamante em 45 graus.
- **Grade de Métricas (`.vc-stats`)**: Exibição dos 4 pilares de desempenho da infraestrutura:
  - `4.2s` — Tempo de build com cache inteligente
  - `2.8s` — Deploy rápido na região principal (nyc1)
  - `99,99%` — SLA de disponibilidade garantido
  - `R$ 1,99` — Ponto de entrada acessível por mês

### 3. Fluxo Git / Deploy em 3 Passos (`src/components/GitWorkflow.tsx`)
- **Estágios 01, 02 e 03**: Guia passo a passo ilustrando *Push*, *Build* e *Live*.
- **Terminal Mockup**: Bloco de código simulando o comando `git push vertra main`, com indicador de cache hit e indicador luminoso vivo em laranja flamejante (`#ff6100`).

### 4. Grade de Recursos Bento (`src/components/FeaturesBento.tsx`)
- **Layout Bento Grid (`.vc-bento`)**: Estrutura modular que organiza recursos arquiteturais com divisórias sutis de 1px.
- **Barras Animadas (`.vc-fbars`)**: Gráfico de colunas ilustrando a redução drástica de tempo de build com animação escalonada.
- **Commit Track (`.vc-commit`)**: Linha de fluxo Git interligada com nós de histórico de versão.
- **Monitoramento em Tempo Real**: Card com visualização SVG de métricas de rede e uptime de 99,99%.

### 5. Observabilidade ao Vivo (`src/components/LiveObservability.tsx`)
- **Dashboard Card**: Demonstração de logs de build em tempo real (instância nyc1 online, alocação de RAM e vCPU).
- **Indicador de Status**: Tag de implantação ativa com pulso luminoso para `vexor-bot.vertraweb.app`.

### 6. Bancos de Dados Gerenciados (`src/components/Databases.tsx`)
- **Suporte Multi-Engine**: Apresentação de cartões dedicados para **PostgreSQL**, **MongoDB**, **Redis** e **MySQL**.
- **Mesh Styling (`.vc-mesh-list` e `.vc-db-row`)**: Linhas com ícones técnicos, especificações mínimas de RAM e armazenamento NVMe dedicado.

### 7. Infraestrutura Global NYC1 (`src/components/GlobalInfra.tsx`)
- **Mapa Vetorial com Pontilhamento**: Utiliza o asset oficial de alta fidelidade `world-map-dots.svg`.
- **Arcos de Rede Animados**: Traçados SVG com `stroke-dasharray` e `stroke-dashoffset` dinâmicos simulando rotas transatlânticas otimizadas do Brasil à Ásia com latência < 120ms.

### 8. Tabela de Planos & Capacity Slider (`src/components/PricingSection.tsx` e `src/components/CapacitySlider.tsx`)
- **Segmented Control**: Alternador de ciclo de faturamento entre *Mensal*, *Trimestral (-5%)* e *Anual (-15%)*.
- **Cards dos Planos**: *Economy* (R$ 1,99), *Pro* (R$ 5,99) e *Scale* (R$ 10,99).
- **Slider Profissional de Capacidade Sob Medida**:
  - 15 níveis dinâmicos (de **4 GB** a **32 GB** de memória e até **12.8 vCPU**).
  - Controle com captura de ponteiro (`setPointerCapture`) para arraste contínuo e responsivo via mouse e touch.
  - Suporte completo a navegação acessível por teclado (setas direcionais, Home e End).
  - Cálculo instantâneo do valor mensal em verde `#4cc26b` e atualização das métricas de instâncias.

### 9. FAQ Acordeão (`src/components/FAQAccordion.tsx`)
- **Semântica HTML5 Nativa**: Perguntas frequentes construídas com tags `<details>` e `<summary>`.
- **Interação Fluida**: Expansão com rotação de ícones e espaçamento com padding equilibrado.

### 10. Seção de Chamada para Ação (CTA) (`src/components/CTASection.tsx`)
- **Aura Gradiente Dinâmica (`.vc-cta-art`)**: Campo de gradiente em múltiplos pontos de dispersão com efeito blur de 40px para criar um ambiente imersivo.
- **Link para Comunidade**: Botão de entrada com link direto para o Discord oficial da comunidade.

### 11. Rodapé Corporativo (`src/components/Footer.tsx`)
- **Slogan Animado**: Efeito dinâmico alternando entre *"Sustentando Ideias"* e *"Construindo o Futuro"*.
- **Mapa de Links**: Navegação segmentada por Produto, Linguagens, Motores de Banco, Documentação e Empresa.
- **Alternador de Tema & Informações**: Botões de tema (Sistema, Claro, Escuro) e identificação cadastral e legal.

### 12. Telas de Autenticação (`/login` e `/register`)
- **Formulários Modernos**: Layout centrado com inputs estilizados para credenciais e recuperação de senha.
- **OAuth Providers**: Botões prontos para integração com Google, GitHub e Discord.

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Islands)
- **Biblioteca Base**: [React 19](https://react.dev/)
- **Linguagem**: [TypeScript 5](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) combinado com design tokens em Vanilla CSS (`globals.css` e `vertra.css`)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Padronização**: ESLint 9 (regras Next.js Core Web Vitals)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** versão 18.18+ ou superior instalada
- **npm**, **yarn** ou **pnpm**

### Passo a Passo

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/ihyos/VertraCloud-Opensource-Clone.git
   cd VertraCloud-Opensource-Clone
   ```

2. **Instalar as Dependências:**
   ```bash
   npm install
   ```

3. **Executar o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar a Aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Compilação de Produção
Para validar e servir o bundle estático otimizado:
```bash
npm run build
npm start
```

---

## 📁 Estrutura de Diretórios

```plaintext
├── public/
│   ├── artifacts/               # Assets visuais originais (pillar, colunas, etc.)
│   ├── icons/                   # Ícones de bancos de dados e linguagens
│   ├── logos/                   # Logotipos oficiais em alta definição
│   ├── preview-vertracloud.png  # Captura de preview do projeto
│   └── world-map-dots.svg       # Mapa vetorial global
├── src/
│   ├── app/
│   │   ├── globals.css          # Variáveis CSS raiz, tokens e efeitos globais
│   │   ├── vertra.css           # Classes oficiais e animações do ecossistema Vertra
│   │   ├── layout.tsx           # Layout principal e metadados SEO
│   │   ├── page.tsx             # Página inicial (Landing page)
│   │   ├── pricing/page.tsx     # Página de preços e capacidade sob medida
│   │   ├── login/page.tsx       # Tela de autenticação
│   │   └── register/page.tsx    # Tela de cadastro
│   └── components/
│       ├── CapacitySlider.tsx   # Slider interativo profissional de capacidade
│       ├── CTASection.tsx       # Seção CTA com aura ambiente
│       ├── Databases.tsx        # Seção de bancos de dados gerenciados
│       ├── FAQAccordion.tsx     # Acordeão de perguntas frequentes
│       ├── FeaturesBento.tsx    # Grade bento com gráficos e micro-interações
│       ├── Footer.tsx           # Rodapé corporativo com slogan animado
│       ├── GitWorkflow.tsx      # Terminal simulado e fluxo Git de 3 passos
│       ├── GlobalInfra.tsx      # Mapa de rotas e regiões de baixa latência
│       ├── Hero.tsx             # Seção de apresentação de alto impacto
│       ├── LiveObservability.tsx# Painel de métricas e logs ao vivo
│       ├── Navbar.tsx           # Barra de navegação e menu responsivo
│       └── PricingSection.tsx   # Grade de planos com seletor de ciclo
├── tailwind.config.ts           # Configuração de temas, cores e extensões Tailwind
├── tsconfig.json                # Configuração do compilador TypeScript
└── package.json                 # Dependências e scripts de execução
```

---

## 📄 Licença

Este projeto é disponibilizado sob a licença [MIT](./LICENSE), com ênfase em sua destinação **estritamente pedagógica e acadêmica**.
