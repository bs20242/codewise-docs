// sidebars.js

const sidebars = {
  tutorialSidebar: [
    'intro', // Link para docs/intro.md
    {
      type: 'category',
      label: 'Instalar e Usar', // Categoria
      items: [
        'guia-de-uso/instalacao',    // Link para docs/guia-de-uso/instalacao.md
        'guia-de-uso/uso-diario',    // Link para docs/guia-de-uso/uso-diario.md
      ],
    },
    {
      type: 'category',
      label: 'Dicas e Extras', // Outra Categoria
      items: [
        'dicas-e-extras/comandos-uteis', // Link para docs/dicas-e-extras/comandos-uteis.md
      ],
    },
  ],
};

export default sidebars;