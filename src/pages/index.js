import React from "react"
import Hero from "../components/Hero"
import Albums from "../components/Albums"
import TrustedClients from "../components/TrustedClients"
import { Helmet } from "react-helmet";

const BlogIndex = () => {

  return (
    <>
    <Helmet>
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Hero />
    <Albums />
    <TrustedClients />
    </>
  )
}

export default BlogIndex

