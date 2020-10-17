// All Of Your Site Conifuration

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Inicio",
    titleTemplate: `London Technology`,
    description: `Diseño y marketing digital.`,
    author: `@londontechnology`,
    twitterUsername: `@londontechnology`,
    image: 'landing.png',
    siteUrl: 'https://londontechnology.com.co',
    getform: ".",
    copyright: "London Technology <a href='https://londontechnology.com.co' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '(+57) 300 485-9118',
      address: "Cra 41 #960 Medellin Antioquia",
      email: 'contacto@londontechnology.com.co',
      website: "https://londontechnology.com.co",
      rating: "5",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "med-antioquia",
          "state": "Medellin",
          "address": "Cra 41 #960 Poblado - Medellin Antioquia",
          "email": "contacto@londontechnology.com.co",
          "phone": "(+57) 300 485-9118"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "London Technology",
        "short_name": "londontechnology",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/favicon-72_x_72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-96_x_96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-128_x_128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-144_x_144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-152_x_152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-192_x_192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-384_x_384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/favicon-512_x_512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://themesmummy.com/mitech',
        sitemap: 'http://themesmummy.com/mitech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about-us/`,
          `/case-studies/`,
          `/contact-us/`,
          `/index-appointment/`,
          `/index-infotechno/`,
          `/index-processing/`,
          `/index-resolutions/`,
          `/index-services/`,
          `/it-services/`,
          `/it-solutions/`,
          `/leadership/`,
          `/it-service/*`,
          `/case-study/*`,
          `/case-study/*`,
          `/blogs/*`
        ]
      }
    }
  ]
}
