import React from 'react'
import { Link } from "gatsby"
import '../styles/nav.sass'

export default function Nav() {
    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
      }
    return (
        <nav>
            <Link
                to={'/#about'}
                className='navLink'
            >
                About
            </Link>
            <Link
                to={'/#portfolio'}
            >
                Portfolio
            </Link>
            <Link
                to={'/#contact'}
            >
                Contact
            </Link>
        </nav>
    )
}
