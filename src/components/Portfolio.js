import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/portfolio.sass'

export default function Portfolio() {
    const data = useStaticQuery(graphql`
query clientsQuery   {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/portfolio/"}}) {
      edges {
        node {
          frontmatter {
            title
            client
            embed
            still {
              childImageSharp {
                fluid(maxWidth: 700){
                  src
                  aspectRatio 
                  src 
                  srcSet 
                  sizes 
          }
        }
            }
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
