import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>Hello world</div>
      <table>
      <thead><tr>
          <th>absolutePath</th>
          <th>birthTime</th>
          <th>base</th></tr>
        </thead>
       <tbody>
        {data.allFile.edges.map (({ node }, index) => (
            <tr>
              <td>{node.absolutePath}</td>
              <td>{node.birthTime}</td>
              <td>{node.base}</td>
            </tr>
        ))}
       </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          absolutePath
          birthTime
          base
        }
      }
    }
  }
`
