module.exports = {
  siteMetadata: {
    title: "Kate Sylvester",
    url: "explore.katesylvester.com",
    navConfig: {
      navItems: [
        {
          title: "Kate",
          internal: true,
          link: "/#kate",
        },
        {
          title: "archive",
          internal: true,
          link: "/archive/",
        },
        {
          title: "contact",
          internal: true,
          link: "/contact/",
        },
        {
          title: "retail",
          internal: true,
          link: "/retail/",
        },
        {
          title: "store",
          internal: false,
          link: "https://katesylvester.com",
        },
        {
          title: "instagram",
          internal: false,
          link: "https://www.instagram.com/kate_sylvester/",
        },
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kate Sylvester`,
        short_name: `Kate Sylvester`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
        crossOrigin: `use-credentials`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `main`,
        path: `${__dirname}/src/images/main`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/src/images/archive`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `retail`,
        path: `${__dirname}/src/images/retail`,
      },
    },
  ],
}
