import React, { useState } from 'react'
import Img from "gatsby-image"
import '../styles/portfolioCard.sass'
import Video from './Video'
import CurveTwo from './CurveTwo'


export default function PortfolioCard({ still, embed, title, client }) {
    const [open, setOpen] = useState('hidden')
    const openModule = () => {
        if (open === 'hidden') {
            setOpen('open')
            document.querySelector("body").style.overflow = 'hidden';
        } else {
            setOpen('hidden')
            document.querySelector("body").style.overflow = 'visible';
        }
    }
    return (
        <>
        <div className='portfolioCard'>
            <h2>{title}</h2>
            <Img fluid={still} alt={client} className='portfolioStill' />
            <p className='portfolioBlurb'>{client}</p>
            <button onClick={openModule}>
            <i className="far fa-play-circle" id='play'></i>
            </button>
            <button onClick={openModule}>
            <i className={`fas fa-window-close ${open}`} id='close'></i>
            </button>
            <CurveTwo />
        </div>
        <Video embed={embed} open={open} />
        </>
    )
}
