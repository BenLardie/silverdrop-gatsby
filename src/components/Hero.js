import React from 'react'
import logo from '../../static/img/SDM_white.png'
import '../styles/hero.sass'



export default function Hero() {
    return (
        <section className='heroBox'>
            <img src={logo} alt='logo' className='logo'/>
        </section>
    )
}

