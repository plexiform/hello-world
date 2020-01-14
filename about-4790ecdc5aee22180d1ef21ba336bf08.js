import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Clever quip about the quirky panda website.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
     }
    }
  }
`
