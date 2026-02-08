# Memória do Projeto - vtori.ink

Este arquivo serve como a camada de memória e contexto para os agentes de IA que trabalham neste projeto.

## Contexto do Projeto
- **Cliente**: Vitória Lima (@vtori.ink)
- **Localização**: Juiz de Fora, MG
- **Nicho**: Tatuagem Artística (Fineline, Blackwork, Geek)
- **Objetivo**: Landing page conversiva com portfólio e agendamento.

## Decisões Arquiteturais (ADRs)
1. **Estilização**: Uso de Vanilla CSS isolado por componente para máxima performance e controle.
2. **Componentização**: Divisão rigorosa em componentes menores (< 200-300 linhas).
3. **Estado**: Hooks customizados para gerenciar lógica persistente e complexa.
4. **Animações**: Framer Motion para uma experiência premium e fluida.

## Estado Atual do Refactoring
- [x] Criação de `GUIDELINES.md`.
- [x] Refatoração do `SchedulingForm.jsx` (Hook `useSchedulingForm`, Subcomponente `SuccessView`, Estilos isolados).
- [ ] Refatoração do `Portfolio.jsx` (Próximo passo).
- [ ] Refatoração do `Hero.jsx` (Próximo passo).
- [ ] Migração completa de classes utilitárias para CSS isolado.

## Histórico de Mudanças Relevantes
- **2026-02-08**: Inicialização das diretrizes do projeto e início da migração para Vanilla CSS isolado. Criada estrutura de pastas `styles` e `hooks`.
