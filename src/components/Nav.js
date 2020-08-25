import React from 'react'
import { Link } from "gatsby"
import '../styles/nav.sass'

export default function Nav() {
    const handleLinkClick = (e, target) => {
        if (typeof window !== 'undefined') {

            if (window.location.pathname === '/') {
                if (e) e.preventDefault()
                scrollToElement(target, {
                    offset: -95, // Offset a fixed header if you please
                    duration: 1000,
                })
            }
        }
    }
    return (
        <nav>
            <Link
                onClick={e => handleLinkClick(e, '#about')}
                to={'/#about'}
            >
                About
            </Link>
            <Link
                onClick={e => handleLinkClick(e, '#experience')}
                to={'/#portfolio'}
            >
                Portfolio
            </Link>
            <Link
                onClick={e => handleLinkClick(e, '#work')}
                to={'/#contact'}
            >
                Contact
            </Link>
        </nav>
    )
}
