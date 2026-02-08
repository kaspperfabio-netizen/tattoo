# Memória do Projeto - vtori.ink

Este arquivo serve como a camada de memória e contexto para os agentes de IA que trabalham neste projeto.

## Contexto do Projeto
- **Cliente**: Vitória Lima (@vtori.ink)
- **Localização**: Juiz de Fora, MG
- **Nicho**: Tatuagem Artística (Fineline, Blackwork, Geek)
- **Objetivo**: Landing page conversiva com portfólio e agendamento.

## Documentação de Referência
1. [GUIDELINES.md](./GUIDELINES.md) - Regras de código e arquitetura.
2. [BUSINESS_RULES.md](./BUSINESS_RULES.md) - Lógica de negócios e objetivos.
3. [README.md](./README.md) - Visão geral do projeto.

## Decisões Arquiteturais (ADRs)
1. **Estilização**: Migração obrigatória de Tailwind para Vanilla CSS isolado.
2. **Componentização**: Divisão rigorosa em componentes menores (< 200-300 linhas).
3. **Estado**: Hooks customizados para gerenciar lógica persistente e complexa.
4. **Animações**: Framer Motion para uma experiência premium e fluida.

## Análise de Conformidade (Gap Analysis)
| Componente | Status CSS | Tamanho | Observações |
| :--- | :--- | :--- | :--- |
| `SchedulingForm` | ✅ Vanilla | OK | Já refatorado com hook `useSchedulingForm`. |
| `Portfolio` | ❌ Tailwind | OK (208 lines) | Precisa migrar classes para `Portfolio.css`. |
| `Hero` | ❌ Tailwind | OK (127 lines) | Precisa migrar classes para `Hero.css`. |
| `About` | ❌ Tailwind | - | Pendente análise detalhada. |
| `Navbar` | ❌ Tailwind | - | Pendente análise detalhada. |

## Estado Atual do Refactoring
- [x] Criação de `GUIDELINES.md`.
- [x] Criação de `BUSINESS_RULES.md`.
- [x] Refatoração do `SchedulingForm.jsx`.
- [ ] Refatoração do `Portfolio.jsx` (Próximo passo).
- [ ] Refatoração do `Hero.jsx`.
- [ ] Migração completa de classes utilitárias para CSS isolado.

## Histórico de Mudanças Relevantes
- **2026-02-08**: Auditoria geral do projeto. Consolidação das Regras de Negócio e mapeamento de lacunas de conformidade (CSS Isolation).
- **2026-02-08**: Inicialização das diretrizes do projeto e início da migração para Vanilla CSS isolado.

