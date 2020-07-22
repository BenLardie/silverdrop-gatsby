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
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
        <Hero />
        </>
      )}
    />
  )
}