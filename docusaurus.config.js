// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Multidata',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/multi-favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      '@docusaurus/preset-classic', // Ensure this is '@docusaurus/preset-classic'
      {
        docs: {
          routeBasePath: '/', // Set this to '/' to make docs the root
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          // If you want "Edit this page" links, set your repo URL here
          editUrl: 'https://github.com/yourusername/your-repo',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          // If you want "Edit this page" links for the blog, set your repo URL here
          editUrl: 'https://github.com/yourusername/your-repo',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        // If you don't want a separate landing page, disable it
        pages: false, // Disable the 'pages' plugin
      },
    ],
  ],  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'My Site Logo',
          src: 'img/multi_logo_2.png',
          className: 'navbar__logo',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            className: 'custom-docs-item',            
            label: 'Docs',
          },
          {
            label: 'Blog',     
            className: 'custom-blog-item',                  
            to: '/blog',
          }, 
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
