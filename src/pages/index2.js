import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Dru Paul's Design Bazaar"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./IMG_1933-web.jpg" alt="Dru Paul" />
        <h1>
          Hi, <span role="img" aria-label="wave emoji">
            👋
          </span> this is Dru and I think about design.{" "}

        </h1>
        <p></p>
        <p>
          I've been designing digital products and experiences for over 10 years now. This will eventually be a collection of some thoughts about design.
        </p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
