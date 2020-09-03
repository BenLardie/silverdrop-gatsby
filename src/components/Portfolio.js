import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/portfolio.sass'

export default function Portfolio() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/portfolio/"}}) {
          edges {
            node {
              frontmatter {
                client
                embed
                title
              }
            }
          }
        }
      }
  `)

const clientData = data.allMarkdownRemark.edges
    console.log(clientData)
    return (
        <section className='portfolio' id='portfolio'>

        </section>
    )
}
