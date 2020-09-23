import React, { useState } from 'react'
import { Link } from "gatsby"
import '../styles/nav.sass'
import Burger from './Burger'

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
    return (
        <nav className={navOpen}>
            {links.map((link, i=0) => {
                i++
                return (
                    <Link to={link.to} className={`navLink ${navState}`} key={i}>{link.displayAddress}</Link>
                )
            } )}
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
