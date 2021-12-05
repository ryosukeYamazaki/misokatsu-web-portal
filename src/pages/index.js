import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        id
        html
      }
    }
  }
`

const IndexPage = ({data}) => (
  <Layout>
    <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.nodes[0].html}}></div>
  </Layout>
)

export default IndexPage
