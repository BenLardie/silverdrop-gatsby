import React, { useState } from 'react'
import Img from "gatsby-image"
import '../styles/portfolioCard.sass'
import Video from './Video'

export default function PortfolioCard({ still, embed, title, client }) {
    const [open, setOpen] = useState('hidden')
    const openModule = () => {
        if (open === 'hidden') {
            setOpen('open')
            console.log('open')
        } else {
            setOpen('hidden')
        }
    }
    return (
        <div className='portfolioCard'>
            <h2>{title}</h2>
            <Img fluid={still} alt={client} className='portfolioStill' />
            <p className='portfolioBlurb'>{client}</p>
            <span onClick={openModule}>
            <i className="far fa-play-circle" id='play'></i>
            </span>
            <Video embed={embed} open={open} />
        </div>
    )
}
