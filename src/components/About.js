import React from 'react'
import '../styles/about.sass'
import camera from '../../public/img/008-video-camera.png'
import drone from '../../public/img/033-drone.png'
import edit from '../../public/img/018-editing-2.png'
import Curve from './Curve'
import TrustedClients from "./TrustedClients"
export default function About() {
    const pics= [camera, drone, edit]

    const display = pics.map((pic, i=0) => {
        i++
        return (
            <div data-aos="fade-up" key={i}>
            <img className='aboutIcons' src={pic}  alt='camera'/>
            </div>
        )
    })
    return (
        <section className='about' id='about'>
            <div className="curve">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>
            <div className='icons'>
            {display}
            </div>
            <h3 className='aboutBlurb'>We provide a wide variety of services, both video and photography, including: Weddings,
                Commercial Advertising, Aerial Video & Photography, Corporate, Real Estate, Live Events,
                Short Films and Documentaries. Come to us with an idea and we will make it into a reality.</h3>
            <TrustedClients />
            <Curve />
    </section>
    )
}
