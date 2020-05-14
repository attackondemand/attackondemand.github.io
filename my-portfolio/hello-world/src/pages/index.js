import React from "react"
import Fade from "react-reveal/Fade"
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Thumbnail from "../components/Thumbnail"
import Footer from "../components/Footer"
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet"

import StateraThumb from "../assets/statera-v2.png"
import HomeBanner from "../assets/homebanner.jpg"
import HomeBanner2 from "../assets/homebanner2.jpg"
import HomeBanner3 from "../assets/homebanner3.jpg"

import UCREThumb from "../assets/ucre-v2.png"
import PUIThumb from "../assets/pui-thumb.png"
import HondaThumb from "../assets/hondathumb.png"
import favicon from "../assets/favicon.png"

import { motion } from "framer-motion"

export default () => (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
    <Nav />
    <Banner
      image={HomeBanner3}
      color="#441A36"
      title="Access Granted."
    />
    <Fade duration={3000}>
    <div id="projects">

      <Thumbnail
        link="/dyatlovpass"
        image={PUIThumb}
        alt="Dyatlov Pass Thumbnail"
        title="Dyatlov Pass"
        category="Interactive Storytelling"
      />

      <Thumbnail
        link="/artcircuit"
        image={UCREThumb}
        alt="Art Circuit Thumbnail"
        title="Art + Human Circuit"
        category="User Research"
      />
      <Thumbnail
        link="/statera"
        image={StateraThumb}
        alt="Statera Thumbnail"
        title="Statera"
        category="Responsive Web Design"
      />

      <Thumbnail
        link="https://mhci-honda-capstone.netlify.com"
        image={HondaThumb}
        alt="Statera Thumbnail"
        title="Honda Project"
        category="MHCI Capstone Project"
      />
    </div>
    </Fade>
    <Footer />
  </div>
)
