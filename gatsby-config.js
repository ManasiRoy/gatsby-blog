require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `Gatsby`,
        siteUrl: `https://www.gatsbyjs.com`,
        description: `Blazing fast modern site generator for React`,
    },

    plugins: [
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass')
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `sgp2xqf9azmr`,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
    ]
}