# vtori.ink — Landing Page Vitória Lima

Uma landing page premium desenvolvida para a artista tatuadora Vitória Lima, especializada em Fineline, Blackwork e temática Geek. O projeto prioriza a estética visual, performance e uma experiência de usuário imersiva.

## 🚀 Tecnologias
- **React 19**: Biblioteca core para a interface.
- **Vite**: Build tool ultra-rápida.
- **Framer Motion**: Animações fluidas e interações premium.
- **Lucide React**: Kit de ícones vetoriais.
- **Vanilla CSS**: Estilização purista focada em performance e controle.

## 🎨 Design e Estética
- **Paleta Dark**: Fundo preto profundo (`#0B0B0B`), detalhes em Berinjela (`#6B2E6B`) e CTAs em Coral (`#FF6B6B`).
- **Tipografia**: 
  - *Títulos*: Playfair Display (Elegância e Sofisticação).
  - *Corpo*: Inter (Legibilidade e Modernidade).
- **Interações**:
  - Cursor personalizado em forma de agulha de tatuagem.
  - Efeito parallax suave em seções de destaque.
  - Barra de rolagem estilizada.
  - Micro-animações em botões e cards.

## 🧩 Estrutura de Componentes
- `Navbar`: Navegação fixa com scroll suave.
- `Hero`: Seção de impacto com animação de entrada.
- `About`: Biografia e selo de localização.
- `Portfolio`: Galeria filtrável por estilos com lightbox.
- `InstagramFeed`: Slider integrado com as últimas postagens.
- `SchedulingForm`: Formulário dinâmico com upload de referências.
- `Flashs`: Projetos autorais disponíveis para tatuagem imediata.
- `FixedCTA`: Botão flutuante para agendamento rápido.

## 🛠️ Configuração e Execução
1. Instale as dependências: `npm install`
2. Execute em ambiente de desenvolvimento: `npm run dev`
3. Gere o build de produção: `npm run build`
4. Verifique o linting: `npm run lint`

## 📏 Padrões de Desenvolvimento
- Arquivos limitados a 200-300 linhas.
- Estilos isolados por componente.
- Lógica de negócios em hooks customizados.
- SEMPRE utilize o `task-master-ai` para gerenciar novas tarefas.

## 📁 Organização do Projeto
```text
/src
  /assets      # Imagens e SVGs estáticos
  /components  # Componentes modulares da interface
  /context     # Provedores de estado global (Tema, etc.)
  /hooks       # Lógica compartilhada
  /styles      # Arquivos CSS globais e utilitários
  App.jsx      # Componente raiz
  main.jsx     # Ponto de entrada
```

---
© 2026 vtori.ink — Vitória Lima. Desenvolvido com foco em excelência artística.
