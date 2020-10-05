import React, { useState } from 'react'
import Img from "gatsby-image"
import '../styles/portfolioCard.sass'
import Video from './Video'

export default function PortfolioCard({ still, embed, title, client }) {
    const [open, setOpen] = useState('closed')
    return (
        <div className='portfolioCard'>
            <h2>{title}</h2>
            <Img fluid={still} alt={client} className='portfolioStill' />
            <p className='portfolioBlurb'>{client}</p>
            <i class="far fa-play-circle" id='play'></i>
            <Video embed={embed} open={open} />
        </div>
    )
}
