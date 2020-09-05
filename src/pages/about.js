import React from "react";
import {graphql} from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading";
import {rhythm} from "../utils/typography";

const PAGE_TITLE = "About";
// TODO: Automatically format the date using the same format as the one used in `blog-post.js` (instead of manually
// doing it).
const LAST_UPDATED_ON = "September 05, 2020";

class AboutPage extends React.Component {
	render() {
		const {data} = this.props;
		const {title, author, social} = data.site.siteMetadata;

		return (
			<Layout location={this.props.location} title={title}>
				<SEO
					title={PAGE_TITLE}
					description="About page explaining who Itai Steinherz is."
				/>
				<PageHeading
					title={PAGE_TITLE}
					date={LAST_UPDATED_ON}
					datePrefix="Last updated: "
				/>
				<div
					style={{
						marginTop: rhythm(1)
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
							borderRadius: "100%",
							float: "left"
						}}
						imgStyle={{
							borderRadius: "50%"
						}}
					/>
					{/* eslint-disable react/jsx-child-element-spacing */}
					<p>
						My name is Itai Steinherz, and I&apos;m a young software developer from Israel. I&apos;ve been developing software for nearly 9 years, ranging from CLIs and desktop apps to full-stack mobile and backend apps. Aside coding, I also play the piano, run, and travel.
					</p>
					<p>
						I&apos;ve been contributing to and maintaining <a href="https://en.wikipedia.org/wiki/Open-source_software">OSS</a> projects for the last 5 years, and love collaborating with cool and smart people from all around the world.
						<br/>
						One of the more popular projects I maintain (along with the awesome Sindre Sorhus and Sam Verschueren) is <a href="https://github.com/sindresorhus/np"><code>np</code></a>, which is a CLI for Node.js developers that simplifies your entire publishing workflow to a single command, and includes many best practices and useful features built-in. I usually triage issues, review PRs and contribute to different parts of the codebase, while continuously working with others and maintaing a high level of code quality and architecture standards.
						<br/>
						I also made other cool projects such as <a href="https://github.com/itaisteinherz/videos"><code>videos</code></a> and <a href="https://github.com/itaisteinherz/MChat">MChat</a>.
					</p>
					<p>
						Almost 2 years ago, I participated in a <a href="https://chingu.io">Chingu</a> collaborative coding cohort. I led a team of 5 developers from Israel, Italy, Greece, and the US. Together, we developed <a href="http://github.com/chingu-voyage7/Bears-Team-22">Knowledge</a>, an online platform for asking questions and getting answers. During the cohort I got to learn about leading a team of developers, working around deadlines, quickly iterating over ideas, and collaborating with people coming from different backgrounds and places.
					</p>
					<p>
						Apart from high-level programming, I also have experience with low-level programming using C and Assembly, and like to fiddle with information security and play CTFs.
					</p>
					<p>
						I currently work as a software developer at <a href="https://flytrex.com">Flytrex</a>, an Israeli startup focused on making drone deliveries a reality. At work, I mostly use Python, TypeScript, Docker, and AWS (as well as other technologies and services).
					</p>
					<p>
						If you&apos;d like to contact me, feel free to do so via <a href={`mailto:${social.email}`}>email</a> or <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>. You can also find my CV <a href="/cv.pdf">here</a> (last updated August 2019).
					</p>
					{/* eslint-enable react/jsx-child-element-spacing */}
				</div>
			</Layout>
		);
	}
}

export default AboutPage;

export const pageQuery = graphql`
    query {
		avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
			childImageSharp {
				fixed(width: 400, height: 400) {
					...GatsbyImageSharpFixed
				}
			}
		}
		site {
			siteMetadata {
				title
				author
				social {
					twitter
					email
				}
			}
		}
	}
`;
