import React, { useState } from 'react'
import { Link } from "gatsby"
import '../styles/nav.sass'

export default function Nav() {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }
    const [navState, setNavState] = useState('')
    const [navOpen, setNavOpen] = useState('')
    const links = [{
        to: '/#about',
        displayAddress: 'About'
    }, { to: '/#portfolio', displayAddress: 'Portfolio' }, { to: '/#contact', displayAddress: 'Contact' },]


    const navClick = () => {
        if (navState === '') {
            setNavState('open')
            setNavOpen('navOpen')
        } else {
            setNavState('')
            setNavOpen('')
        }
    }

    const menuClick = () => {
        if (navState === 'open') {
            setNavState('')
            setNavOpen('')
            console.log('click')
        } 
    }
    return (
        <nav className={navOpen}>
            <ul>
            {links.map((link, i=0) => {
                i++
                return (
                    <li onClick={menuClick} key={i}>
                    <Link to={link.to} className={`navLink ${navState}`}>{link.displayAddress}</Link>
                    </li>
                )
            } )}
            </ul>
            <div className='hamburger'>
                <div id="navIcon" className={navState} onClick={navClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
