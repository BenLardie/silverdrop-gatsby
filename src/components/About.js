import React from 'react'
import '../styles/about.sass'
import camera from '../../public/img/008-video-camera.png'
import drone from '../../public/img/033-drone.png'
import edit from '../../public/img/018-editing-2.png'

export default function About() {
    return (
        <section className='about' id='about'>
            <div class="curve">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
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
