import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e55'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '26c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '444'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '8c9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'dba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '32a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'b7f'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b63'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '5d7'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '8e2'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '2fd'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'b94'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '9ea'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fc3'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'ef8'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '892'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '452'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a29'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '715'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0af'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '9f5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '53c'),
            routes: [
              {
                path: '/docs/category/in-depth-overview',
                component: ComponentCreator('/docs/category/in-depth-overview', '0d1'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/category/super-agreements',
                component: ComponentCreator('/docs/category/super-agreements', '3bc'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/category/use-cases',
                component: ComponentCreator('/docs/category/use-cases', 'c4e'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/glossary',
                component: ComponentCreator('/docs/concepts/glossary', 'd62'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/super-agreements/constant-flow-agreement-cfa',
                component: ComponentCreator('/docs/concepts/in-depth-overview/super-agreements/constant-flow-agreement-cfa', '591'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/super-agreements/instant-distribution-agreement-ida',
                component: ComponentCreator('/docs/concepts/in-depth-overview/super-agreements/instant-distribution-agreement-ida', '222'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/super-agreements/streaming-distributions-coming-soon',
                component: ComponentCreator('/docs/concepts/in-depth-overview/super-agreements/streaming-distributions-coming-soon', 'd75'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/super-apps',
                component: ComponentCreator('/docs/concepts/in-depth-overview/super-apps', '3a7'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/super-tokens',
                component: ComponentCreator('/docs/concepts/in-depth-overview/super-tokens', '6c0'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/in-depth-overview/superfluid-host',
                component: ComponentCreator('/docs/concepts/in-depth-overview/superfluid-host', '8c4'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/intro',
                component: ComponentCreator('/docs/concepts/intro', '18b'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/use-cases/defi',
                component: ComponentCreator('/docs/concepts/use-cases/defi', 'd17'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/use-cases/gaming',
                component: ComponentCreator('/docs/concepts/use-cases/gaming', '901'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/use-cases/recurring-payments',
                component: ComponentCreator('/docs/concepts/use-cases/recurring-payments', '132'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/concepts/use-cases/social-and-community',
                component: ComponentCreator('/docs/concepts/use-cases/social-and-community', 'ad7'),
                exact: true,
                sidebar: "Concepts"
              },
              {
                path: '/docs/developers/intro',
                component: ComponentCreator('/docs/developers/intro', '86e'),
                exact: true,
                sidebar: "Developers"
              },
              {
                path: '/docs/products/intro',
                component: ComponentCreator('/docs/products/intro', '9e0'),
                exact: true,
                sidebar: "Products"
              },
              {
                path: '/docs/technical-reference/intro',
                component: ComponentCreator('/docs/technical-reference/intro', '5ff'),
                exact: true,
                sidebar: "TechnicalReference"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '37f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
