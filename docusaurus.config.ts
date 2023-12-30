import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Superfluid Docs',
  tagline: 'Docs but they hyper super fluid',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock'],

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Concepts',
          position: 'left',
          label: 'Concepts',
        },
        {
          type: 'docSidebar',
          sidebarId: 'UseCases',
          position: 'left',
          label: 'Use Cases',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Protocol',
          position: 'left',
          label: 'Protocol',
        },
        {
          type: 'docSidebar',
          sidebarId: 'SDK',
          position: 'left',
          label: 'SDK',
        },
        {
          type: 'docSidebar',
          sidebarId: 'TechnicalReference',
          position: 'left',
          label: 'Technical Reference',
        },
        {
          href: 'https://console.superfluid.finance/',
          position: 'right',
          label: 'Console',
        },
        {
          href: 'https://github.com/superfluid-finance',
          position: 'right',
          label: 'Github',
        },
        {
          href: 'https://discord.gg/pPzPEDMVua',
          position: 'right',
          label: 'Discord',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Concepts',
              to: '/docs/concepts/superfluid',
            },
            {
              label: 'UseCases',
              to: '/docs/products/intro',
            },
            {
              label: 'Protocol',
              to: '/docs/protocol/quickstart',
            },
            {
              label: 'SDK',
              to: '/docs/sdk/overview',
            },
            {
              label: 'Technical Reference',
              to: '/docs/technical-reference/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/superfluid-finance',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/pPzPEDMVua',
            },
            {
              label: 'X/Twitter',
              href: 'https://twitter.com/intent/follow?screen_name=Superfluid_HQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              href: 'https://www.superfluid.finance/about',
            },
            {
              label: 'Blog',
              href: 'https://www.superfluid.finance/blog',
            },
            {
              label: 'Terms of Use',
              href: 'https://www.superfluid.finance/terms',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.iubenda.com/privacy-policy/34415583/legal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Superfluid Finance LTD. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },
    plugins:
      ['@saucelabs/theme-github-codeblock', {}],
  } satisfies Preset.ThemeConfig,
};

export default config;
