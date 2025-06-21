---
sidebar_position: 2
title: Como usar 
---

# Usando o CodeWise 
Com a configuração concluída, você já tem acesso aos comandos **codewise-lint** e **codewise-pr** de forma manual e automatizada após instalar os hooks.

1.  **Adicione suas alterações**

    * Após modificar seus arquivos, adicione-os à "staging area":
    ```bash
    git add .
    ```
    * Aqui você já pode usar o comando `codewise-lint` para analisar os arquivos e você poder fazer ajustes antes de commitar.

2.  **Faça o commit**
    ```bash
    git commit -m "implementa novo recurso "
    ```
    * Neste momento, o **hook `pre-commit` será ativado**, e o `codewise-lint` fará a análise rápida no seu terminal.

3.  **Envie para o GitHub**
    ```bash
    git push
    ```
    * Agora, o **hook `pre-push` será ativado**. O `codewise-pr` irá criar um novo/atualizar seu Pull Request com título, descrição e análise técnica gerados pela IA.