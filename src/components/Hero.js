import React from 'react'
import logo from '../../static/img/SDM_white.png'
import sample from '../../static/img/2019_SDM_Promo_2019_30sec.mp4'
import '../styles/hero.sass'



export default function Hero() {
    return (
        <section className='heroBox'>
            <img src={logo} alt='logo' className='logo' />
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
            <div className='overlay'></div>
            <h1 className='heroText'>Video and Photography Services <br/>for Small Communities with Big Ideas.</h1>
        </section>
    )
}

