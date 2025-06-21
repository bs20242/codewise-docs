---
sidebar_position: 1
title: 'Guia de Uso do CodeWise'
---

#  CodeWise

* Ferramenta instalável via pip que usa IA para analisar o código e automatizar a documentação de Pull Requests através de hooks do Git.

## Funcionalidades Principais
- **Geração de Título:** Cria títulos de PR claros e concisos seguindo o padrão *Conventional Commits*.
- **Geração de Descrição:** Escreve descrições detalhadas baseadas nas alterações do código.
- **Análise Técnica:** Posta um comentário no PR com um resumo executivo de melhorias de arquitetura, aderência a princípios S.O.L.I.D. e outros pontos de qualidade.
- **Automação com hooks:** Integra-se ao seu fluxo de trabalho Git para rodar automaticamente a cada `git commit` e `git push`.

---

## Guia de Instalação e Primeiro Uso

### Pré-requisitos (Instalar antes de tudo)

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas em seu sistema:

1.  **Python** (versão 3.11 ou superior).
2.  **Git**.
3.  **GitHub CLI (`gh`)**: Após instalar, logue com sua conta do GitHub executando `gh auth login` no seu terminal (só precisa fazer isso uma vez por PC).
---

# Resumo dos passos que serão melhor detalhados:

1. **Logue com seu gh cli no pc que for usar.**
2. **Crie o ambiente virtual no repositório que irá usar a ferramenta**
3. **Crie o arquivo .env para configurar sua key do gemini**
4. **Instale a lib do codewise.**
5. **Use o comando para ativar a automação de hooks.**
 