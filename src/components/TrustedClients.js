import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Client from './Client'
import Slider from "react-slick";

export default function TrustedClients() {
    const data = useStaticQuery(graphql`
    query clientsQuery   {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/markdown/trusted/"}}) {
          edges {
            node {
              frontmatter {
                name
                thumbnail {
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

  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]
  }

  return (
    <div className='slideWrapperTwo'>
    <Slider {...setting}>
      {clientData.map((client, i = 0) => {
        const image = client.node.frontmatter.thumbnail.childImageSharp.fluid
        const name = client.node.frontmatter.name
        i++
        return (
          <Client image={image} title={name} key={i} />
        )
      })}
    </Slider>
    </div>
  )
}



