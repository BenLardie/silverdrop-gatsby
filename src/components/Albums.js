import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AlbumCover from './AlbumCover'

export default function Albums() {
    const data = useStaticQuery(graphql`
    query albumsQuery   {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/albums/"}}) {
          edges {
            node {
              frontmatter {
                title
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 700) {
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
  const albumData = data.allMarkdownRemark.edges

    return (
        <section className='comedyAlbums'>
          {albumData.map(album => console.log(album))}
            {albumData.map((album, i=0) => {
                const image = album.node.frontmatter.thumbnail.childImageSharp.fluid
                const title = album.node.frontmatter.title
                i++
                console.log(image)
                return(
                    <AlbumCover image={ image } title={ title }key={i} />
                )
            })}
        </section>
    )
}

