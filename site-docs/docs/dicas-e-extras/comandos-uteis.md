---
sidebar_position: 1
title: Comandos Úteis
---

# Dicas e Comandos Úteis do GitHub CLI

### Criar um novo repositório do zero com `gh CLI`
1.  `mkdir MeuNovoProjeto && cd MeuNovoProjeto`
2.  `git init`
3.  `gh repo create MeuNovoProjeto --public --source=. --remote=origin`
4.  `echo "# Meu Título" > README.md`
5.  `git add . && git commit -m "Primeiro commit"`
6.  `git push --set-upstream origin main`

### Dicas para o `git push`
* **Primeiro `push` de uma branch nova:** Para enviar e já vincular a branch ao repositório remoto, use:
    ```bash
    git push --set-upstream origin nome-da-branch
    ```
* **Pular a análise do CodeWise:** Se por algum motivo, você quiser fazer um push sem acionar os hooks, use a flag `--no-verify`:
    ```bash
    git push --no-verify
    ```

### Desativar o Ambiente Virtual
Quando terminar de usar a ferramenta, para voltar ao seu terminal normal, simplesmente digite:
```bash
deactivate
```
