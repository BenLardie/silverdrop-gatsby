import React from 'react'
import '../styles/about.sass'
import camera from '../../public/img/008-video-camera.png'
import drone from '../../public/img/033-drone.png'
import edit from '../../public/img/018-editing-2.png'

export default function About() {
    return (
        <section className='about' id='about'>
            <img class='aboutIcons' src={camera}  alt='camera'/>
            <img class='aboutIcons' src={drone}  alt='drone'/>
            <img class='aboutIcons' src={edit}  alt='editing'/>
        </section>
    )
}
