// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@kainstar/typescript-react-library-package-template',
  tagline: 'A template for creating react library packages using TypeScript',
  url: 'https://kainstar.github.io',
  baseUrl: isDev ? '/' : '/typescript-react-library-package-template/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'kainstar', // Usually your GitHub org/user name.
  projectName: 'typescript-react-library-package-template', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/kainstar/typescript-react-library-package-template/tree/main/site',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '@kainstar/typescript-react-library-package-template',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorial',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },
          {
            href: 'https://github.com/kainstar/typescript-react-library-package-template',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} kainstar. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'top',
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          '@kainstar/typescript-react-library-package-template$': path.resolve(__dirname, '../src/index.tsx'),
        },
      },
    ],
    'docusaurus-plugin-sass',
  ],
};

module.exports = config;
