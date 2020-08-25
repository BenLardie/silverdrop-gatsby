import React from 'react'
import { Link } from "gatsby"
import '../styles/nav.sass'

export default function Nav() {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    const links = [{
        to: '/#about',
        displayAddress: 'About'
    }, { to: '/#portfolio', displayAddress: 'Portfolio' }, { to: '/#contact', displayAddress: 'Contact' },]
    return (
        <nav>
            {links.map(link => <Link to={link.to} className='navLink'>{link.displayAddress}</Link>)}
        </nav>
    )
}
