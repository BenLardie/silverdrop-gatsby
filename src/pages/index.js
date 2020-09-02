import React, { useEffect } from "react"
import Nav from '../components/Nav'
import Hero from "../components/Hero"
import Albums from "../components/Albums"
import { Helmet } from "react-helmet";
import About from "../components/About"
import AOS from 'aos'
import 'aos/dist/aos.css';

const BlogIndex = () => {

useEffect(()=> {
  AOS.init({
    duration : 1500
  })
  AOS.refresh()
},[])

  return (
    <>
    <Helmet>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Nav />
    <Hero />
    <About />
    <Albums />
    </>
  )
}

export default BlogIndex

