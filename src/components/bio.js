/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import {StaticQuery, graphql} from "gatsby";
import Image from "gatsby-image";

import {rhythm} from "../utils/typography";

function Bio() {
	return (
		<StaticQuery
			query={bioQuery}
			render={data => {
				const {author, social} = data.site.siteMetadata;

				return (
					<div
						style={{
							display: "flex",
							marginBottom: rhythm(1)
						}}
					>
						<Image
							fixed={data.avatar.childImageSharp.fixed}
							alt={author}
							style={{
								marginRight: rhythm(1 / 2),
								marginBottom: 0,
								maxHeight: 100,
								minWidth: 100,
								maxWidth: 100,
								borderRadius: "100%"
							}}
							imgStyle={{
								borderRadius: "50%"
							}}
						/>
						<p
							style={{
								// Center text verticallly (relative to the image) - http://jsfiddle.net/Mori/Qtng7
								marginTop: "auto",
								marginBottom: "auto"
							}}
						>
                            I&apos;m <strong>{author}</strong>, a software developer from Israel, high-school and university student.
                            You can follow me on
							{" "}
							<a href={`https://twitter.com/${social.twitter}`}>
                                 Twitter
							</a>
							{" "}
                            and
							{" "}
							<a href={`https://github.com/${social.github}`}>
                                GitHub
							</a>.
						</p>
					</div>
				);
			}}
		/>
	);
}

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
            childImageSharp {
                fixed(width: 400, height: 400) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
                social {
					twitter
					github
                }
            }
        }
    }
`;

export default Bio;
