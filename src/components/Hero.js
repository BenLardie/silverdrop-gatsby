import React from 'react'
import logo from '../../static/img/SDM_white.png'
import '../styles/hero.sass'



export default function Hero() {
    return (
        <>
            <img src={logo} alt='logo' className='heroLogo'/>
        </>
    )
}

