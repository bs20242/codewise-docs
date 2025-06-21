// @ts-check
// Arquivo: docusaurus.config.js 

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // --- INFORMAÇÕES BÁSICAS DO SITE ---
  title: 'CodeWise',
  tagline: 'Análise de código e automação de PRs com IA',
  favicon: 'img/favicon.ico', 

  // --- CONFIGURAÇÃO DE PUBLICAÇÃO NO GITHUB PAGES ---
  url: 'https://bs20242.github.io', 
  baseUrl: '/CWTutorial/',
  
  organizationName: 'bs20242', 
  projectName: 'tutorialCW',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // --- CONFIGURAÇÃO DE IDIOMA ---
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Altere para o link real da sua pasta de documentação no GitHub
          editUrl: 'https://github.com/bs20242/cwb/tree/main/site-docs/', 
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      
      navbar: {
        title: 'CodeWise',
        logo: {
          alt: 'CodeWise Logo',
          src: 'img/logo.svg', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação e Instalação',
          },
          {
            href: 'https://github.com/bs20242/cwb',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // 
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Introdução',
                to: '/docs/intro', // Link para a página inicial da sua documentação
              },
              {
                label: 'Instalação',
                to: '/docs/passo-a-passo/instalacao', // Link para a página de instalação
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/bs20242/cwb', // Link para o seu repositório
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeWise. Construído com Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;