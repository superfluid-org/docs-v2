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
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
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
          sidebarId: 'Products',
          position: 'left',
          label: 'Products',
        },
        {
          type: 'docSidebar',
          sidebarId: 'Developers',
          position: 'left',
          label: 'Developers',
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
          href: 'https://twitter.com/intent/follow?screen_name=Superfluid_HQ',
          html: '<img src="/img/twitter.png" alt="Twitter" width="35" height="35" /> _x/twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/superfluid-finance',
          html: '<img src="/img/github.png" alt="Github" width="35" height="35" /> _github',
          position: 'right',
        },
        {
          href: 'https://discord.gg/pPzPEDMVua',
          html: '<img src="/img/discord.png" alt="Discord" width="35" height="35" /> _discord',
          position: 'right',
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
              to: '/docs/concepts/overview',
            },
            {
              label: 'Products',
              to: '/docs/products/intro',
            },
            {
              label: 'Developers',
              to: '/docs/concepts/quickstart',
            },
            {
              label: 'SDK',
              to: '/docs/concepts/overview',
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
