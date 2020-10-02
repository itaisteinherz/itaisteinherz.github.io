import React, {Component} from "react";
import {graphql} from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class NotFoundPage extends Component {
	render() {
		const {data} = this.props;
		const siteTitle = data.site.siteMetadata.title;

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="404: Not Found"/>
				{/* TODO: Use `PageHeading` instead of a plain `h1`. */}
				<h1>Not Found</h1>
				<p>
					You just hit a route that doesn&#39;t exist <span role="img" aria-label="sad">😕</span>
				</p>
			</Layout>
		);
	}
}

export default NotFoundPage;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
