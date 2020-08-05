import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AlbumCover from './AlbumCover'
import Slider from "react-slick";

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

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

  }

  return (
    <div className='slideWrapper'>
    <Slider {...setting}>
      {albumData.map((album, i = 0) => {
        const image = album.node.frontmatter.thumbnail.childImageSharp.fluid
        const title = album.node.frontmatter.title
        i++
        return (
          <AlbumCover image={image} title={title} key={i} />
        )
      })}
    </Slider>
    </div>
  )
}

