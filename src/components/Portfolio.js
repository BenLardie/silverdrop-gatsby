import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PortfolioCard from './PortfolioCard'
import '../styles/portfolio.sass'

export default function Portfolio() {
  const data = useStaticQuery(graphql`
  query portfolioQuery   {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/portfolio/"}}) {
        edges {
          node {
            frontmatter {
              title
              embed
              client
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
const portfolioData = data.allMarkdownRemark.edges

    return (
        <section className='portfolio' id='portfolio'>
                {portfolioData.map((piece, i = 0) => {
        const still = piece.node.frontmatter.still.childImageSharp.fluid
        const client = piece.node.frontmatter.title
        const description = piece.node.frontmatter.client
        const embed = piece.node.frontmatter.embed
        i++
        return (
          <PortfolioCard still={still} title={client} description={description} client={description} embed={embed} key={i} />
        )
      })}

        </section>
    )
}
