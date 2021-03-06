const path = require("path");

/* eslint-disable camelcase */
module.exports = {
	siteMetadata: {
		title: "netoani.com",
		author: "Itai Steinherz",
		description: "Itai Steinherz's website",
		siteUrl: "https://netoani.com",
		social: {
			twitter: "https://twitter.com/itaisteinherz",
			github: "https://github.com/itaisteinherz",
			email: "mailto:itai.steinherz@gmail.com"
		}
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: path.join(__dirname, "content", "blog"),
				name: "blog"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: path.join(__dirname, "content", "assets"),
				name: "assets"
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-images",
					{
						resolve: "gatsby-remark-responsive-iframe",
						options: {
							wrapperStyle: "margin-bottom: 1.0725rem"
						}
					},
					"gatsby-remark-prismjs",
					"gatsby-remark-copy-linked-files",
					"gatsby-remark-smartypants"
				]
			}
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: "UA-142187776-1",
				respectDNT: true
			}
		},
		"gatsby-plugin-feed",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Itai Steinherz's blog",
				short_name: "netoani.com",
				start_url: "/",
				background_color: "#ffffff",
				theme_color: "#4b9d87",
				display: "minimal-ui"
			}
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "src/utils/typography"
			}
		}
	]
};
/* eslint-enable camelcase */
