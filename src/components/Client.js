import React from 'react'
import Img from "gatsby-image"
import '../styles/client.sass'

export default function Client({image, name}) {
    return (
        <div>
            <Img fluid={image} alt={name} className='clientCard' />
        </div>
    )
}
