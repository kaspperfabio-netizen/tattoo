# Regras de Negócio - vtori.ink

Este documento consolida as regras de negócio e objetivos estratégicos da landing page para a tatuadora Vitória Lima.

## 1. Identidade e Marca
- **Artista**: Vitória Lima (@vtori.ink).
- **Localização**: Juiz de Fora, MG.
- **Nicho**: Tatuagem Artística Minimalista e Autoral.
- **Estilos Principais**: 
  - **Fineline**: Traços finos e delicados.
  - **Blackwork**: Contraste alto e preenchimentos sólidos.
  - **Geek**: Temáticas de animes, jogos e cultura pop.

## 2. Objetivos da Landing Page
- **Conversão**: O objetivo primário é converter visitantes em leads (agendamentos de orçamentos).
- **Portfólio**: Exibir a qualidade técnica e versatilidade da artista.
- **Credibilidade**: Demonstrar profissionalismo através de depoimentos e FAQ.
- **Conveniência**: Oferecer um canal direto para agendamento e dúvidas.

## 3. Fluxo de Agendamento (Business Logic)
- **Campos Obrigatórios**: Nome, E-mail, WhatsApp, Descrição da Ideia, Estilo Desejado.
- **Upload de Referência**: O formulário permite o envio de imagens para ajudar no orçamento.
- **Persistência**: Os dados devem ser validados antes do "envio".
- **Feedback**: O usuário deve receber uma confirmação visual clara após o envio de um formulário.
- **Integração**: Redirecionar ou notificar via WhatsApp/E-mail (conforme implementação do hook `useSchedulingForm`).

## 4. Portfólio e Galeria
- **Filtros**: Deve permitir filtrar as artes por *Fineline*, *Blackwork* e *Geek*.
- **Interação**: Cada item do portfólio deve ser expansível (Lightbox) para visualização detalhada.
- **Contexto**: Exibir título e categoria em cada arte.
- **CTA**: Possibilidade de iniciar agendamento diretamente a partir de um projeto visualizado.

## 5. Feed Social (Instagram)
- **Sincronização**: Exibir as postagens mais recentes de @vtori.ink.
- **Navegação**: O feed deve ser interativo, permitindo ver detalhes dos posts sem sair da página.
- **Engajamento**: Links diretos para o Instagram para aumentar o número de seguidores.

## 6. Flash Tattoos (Disponíveis)
- **Catálogo**: Exibir desenhos autorais prontos para tatuar (Flashs).
- **Disponibilidade**: Indicar claramente se um flash ainda está disponível ou já foi reservado.

## 7. Experiência do Usuário (UX)
- **Mobile-First**: A maioria dos clientes acessa via Instagram (mobile).
- **Acessibilidade**: Contraste adequado, navegação por teclado nos modais.
- **Performance**: Carregamento rápido (WebP, Lazy loading) para evitar perda de clientes.
- **Suporte ao Tema**: Modo escuro como padrão (estética premium), com suporte a toggle (opcional).
