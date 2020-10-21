const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://vironix.ai',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title:
      "<a href='https://vironix.ai/'><img class='img-responsive' src='/static/icon.png' alt='Vironix logo' /></a>  <span>Vironix</span>",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/getting_started', // add trailing slash if enabled above
      '/members',
      '/organization_management',
      '/organization_monitoring',
    ],
    collapsedNav: [
      // '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Vironix', link: 'https://vironix.ai' }],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Vironix | Documentation',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'src/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Vironix Documentation',
      short_name: 'VironixDocs',
      start_url: '/',
      background_color: '#993333',
      theme_color: '#993333',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/favicon.png',
          sizes: `32x32`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
