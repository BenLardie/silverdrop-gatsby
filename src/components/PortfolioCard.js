import React from 'react'
import Img from "gatsby-image"
import '../styles/portfolioCard.sass'

export default function PortfolioCard({ still, embed, title, client }) {
    return (
        <div className='portfolioCard'>
            <h2>{title}</h2>
            <Img fluid={still} alt={client} className='portfolioStill' />
            <p className='portfolioBlurb'>{client}</p>
            <i class="far fa-play-circle"></i>
        </div>
    )
}
