import React from 'react'
import '../styles/about.sass'
import camera from '../../public/img/008-video-camera.png'
import drone from '../../public/img/033-drone.png'
import edit from '../../public/img/018-editing-2.png'

export default function About() {
    return (
        <section className='about' id='about'>
            <div className='icons'>
            <div data-aos="fade-up">
                    <img class='aboutIcons' src={camera}  alt='camera'/>
            </div>
            <div data-aos="fade-up">
            <img class='aboutIcons' src={drone}  alt='drone'/>
            </div>
            <div data-aos="fade-up">
            <img class='aboutIcons' src={edit}  alt='editing'/>
            </div>
            </div>
            <h3 class='aboutBlurb'>We provide a wide variety of services, both video and photography, including: Weddings,
                Commercial Advertising, Aerial Video & Photography, Corporate, Real Estate, Live Events,
                Short Films and Documentaries. Come to us with an idea and we will make it into a reality.</h3>
    </section>
    )
}
