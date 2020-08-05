import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Hero from './Hero'
export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
        <header>
          <title>{data.site.siteMetadata.title}</title>
        </header>
        <Hero />
        </>
      )}
    />
  )
}