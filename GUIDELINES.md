# Guia de Desenvolvimento e Padrões do Projeto - vtori.ink

Este documento estabelece as diretrizes, padrões e fluxos de trabalho para o projeto da landing page da tatuadora Vitória Lima. Todos os desenvolvedores e agentes de IA devem seguir estas regras rigorosamente.

## 1. Escopo de Trabalho
O projeto consiste em uma landing page responsiva built com React 19 e Vite, focada na conversão de novos clientes através de um portfólio visual impactante e um sistema de agendamento intuitivo.
- **Desenvolvimento**: Criação de componentes modulares e reutilizáveis.
- **Análise**: Revisão constante de performance (Lighthouse) e acessibilidade.
- **Testes**: Cobertura de testes unitários para lógica de negócios e integração para fluxos críticos (formulário).

## 2. Padrões de Qualidade de Código
- **Simplicidade**: Prefira soluções simples em vez de complexidades desnecessárias.
- **Leitura**: O código deve ser autoexplicativo (Clean Code).
- **SOLID**: Aplicar os princípios SOLID, especialmente Responsabilidade Única (SRP).
- **Styles**: Utilizar **Vanilla CSS**. Isolar estilos em arquivos separados por componente (ex: `Hero.css` ou CSS Modules). **Evitar Tailwind CSS** no código final, migrando as classes utilitárias existentes para CSS puro.

## 3. Auditoria de Duplicação
- Sempre verifique se uma lógica ou componente já existe antes de criar um novo.
- Refatore caminhos duplicados integrando-os em utilitários ou hooks compartilhados.

## 4. Consciência de Ambiente
- O código deve se adaptar a `dev`, `test` e `prod`.
- Variáveis de ambiente devem ser usadas via `import.meta.env`.

## 5. Disciplina de Mudança
- Implementar apenas mudanças solicitadas ou plenamente compreendidas.
- Documentar a fundamentação (rationale) de cada mudança significativa nos comentários do código ou commits.

## 6. Protocolo de Correção de Bugs
- Esgotar as opções da implementação atual antes de introduzir novos padrões ou tecnologias.
- Ao substituir código legado, remova-o completamente para evitar "zombies".

## 7. Arquitetura e Padrões
- **Modularização**: Componentes em `src/components`, hooks em `src/hooks`, contextos em `src/context`.
- **Ações**: Business logic isolada em hooks customizados.
- **Design Patterns**: Utilizar padrões como *Container/Presenter* ou *Hook Pattern* para manter a UI pura.

## 8. Organização de Arquivos
- **Limite de Linhas**: NENHUM arquivo deve ultrapassar **200-300 linhas**. Se ultrapassar, deve ser refatorado em subcomponentes ou hooks.
- **Coesão**: Cada arquivo deve ter uma única responsabilidade.

## 9. Gestão de Scripts
- Evite scripts isolados no código fonte. Automações reutilizáveis devem estar em ferramentas dedicadas ou scripts no `package.json`.

## 10. Estratégia de Testes
- **Comprometimento**: Sempre criar testes para novos recursos.
- **Mocks**: Usar mocks exclusivamente em testes automatizados.
- **Dados Fake**: NUNCA injetar dados fakes ou stubs em ambientes de `dev` ou `prod`.

## 11. Configuração de Ambiente
- **Proteção .env**: Nunca sobrescrever o arquivo `.env` sem permissão explícita e backup.

## 12. Requisitos de Documentação
- Manter o `README.md` (versões completa e resumida) atualizado.
- Documentar especificações de API e versões de bibliotecas.
- Comentar blocos de lógica complexa seguindo os padrões do projeto.

---

## Regras Específicas para Frontend (React)
1. **Isolamento de Estilos**: Cada componente deve ter seu arquivo de estilo correspondente.
2. **Subcomponentes**: Dividir componentes grandes em subcomponentes menores no mesmo diretório ou em uma pasta `subcomponents`.
3. **Hooks Customizados**: Extrair lógica de estado e efeitos para hooks.
4. **Confirmação**: Sempre pedir confirmação antes de realizar refatorações estruturais de pastas.

## MCPs do Projeto
- **Task Master AI**: Utilizado para organizar tarefas e diretrizes (`task-master-ai`).
- **Chrome DevTools**: Utilizado para depuração e análise de erros no navegador (`chrome-devtools`).
- **Playwright**: Utilizado para automação de testes E2E e web scraping.
