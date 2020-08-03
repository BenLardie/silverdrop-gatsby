import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function Albums() {
    const data = useStaticQuery(graphql`
    query albumsQuery   {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/albums/"}}) {
          edges {
            node {
              frontmatter {
                title
                thumbnail
              }
            }
          }
        }
      }
  `)
  console.log(data.allMarkdownRemark.edges)
    return (
        <div>
        </div>
    )
}

