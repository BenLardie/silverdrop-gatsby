import React from 'react'
import '../styles/video.sass'

export default function Video({ embed, open }) {
    const url = embed
    console.log(url)
    return (
        <div className={`videoModule ${open}`}>
            <iframe 
                width="560" 
                height="315" 
                src={url} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                />
        </div>
    )
}
