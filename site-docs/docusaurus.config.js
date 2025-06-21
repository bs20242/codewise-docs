// docusaurus.config.js
import {themes as prismThemes} from 'prism-react-renderer';
const config = {
  title: 'CodeWise',
  tagline: 'Análise de código e automação de PRs com IA',
  favicon: 'img/favicon.ico',
  url: 'https://bs20242.github.io',
  baseUrl: '/codewise-docs/',
  organizationName: 'bs20242',
  projectName: 'codewise-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'pt-BR', locales: ['pt-BR'] },
  presets: [
    ['classic', ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bs20242/codewise-docs/tree/main/',
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
    })],
  ],
  themeConfig: ({

      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false, 
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CodeWise',
        logo: { alt: 'CodeWise Logo', src: 'img/logo.svg' },
        items: [
          { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentação' },
          { href: 'https://github.com/bs20242/cwb', label: 'Código Fonte da Ferramenta', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          { title: 'Documentação', items: [{ label: 'Introdução', to: '/docs/intro' }, { label: 'Instalação', to: '/docs/guia-de-uso/instalacao' }] },
          { title: 'Mais', items: [{ label: 'GitHub da Ferramenta', href: 'https://github.com/bs20242/cwb' }] },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodeWise. Construído com Docusaurus.`,
      },
      prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    }),
};
export default config;