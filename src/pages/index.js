import React from "react"
import Layout from "../components/layout.js"
import { graphql, Link } from "gatsby"

export default ({ data }) =>
  <Layout>
    <h1><a href="https://www.beeminder.com/excursos/">beeminder</a></h1>
    <h1><a href="https://dribbble.com/excursos">dribbble</a></h1>
    <h1><a href="https://github.com/plexiform">github</a></h1>
  </Layout>

export const query = graphql`
  {
    allFile {
      edges {
        node {
          base
        }
      }
    }
  }
`
