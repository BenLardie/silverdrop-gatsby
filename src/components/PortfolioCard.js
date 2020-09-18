import React from 'react'
import Img from "gatsby-image"
import '../styles/portfolioCard.sass'

export default function PortfolioCard({ still, embed, client }) {
    return (
        <div className='portfolioCard'>
            <h2>{client}</h2>
            <Img fluid={still} alt={client} className='portfolioStill' />
            <div className='portfolioOverlay'></div>
        </div>
    )
}
