import React from 'react'
import { graphql } from "gatsby"

export default function Hero({data}) {
  console.log(data)
    return (
        <>
            {/* <h1>{data.markdownRemark.frontmatter.title}</h1>
            <h2>{data.markdownRemark.frontmatter.slogan}</h2> */}
            <h1>balls</h1>
        </>
    )
}

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/home.md/" }) {
      frontmatter {
        title
        slogan
      }
    }
  }
`