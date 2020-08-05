import React from 'react'
import Img from "gatsby-image"
import '../styles/albums.sass'

export default function AlbumCover({image, title}) {
    return (
        <div>
            <Img fluid={image} alt={title} className='comedyCover' />
        </div>
    )
}
