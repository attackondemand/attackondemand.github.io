import React from "react"
import Fade from "react-reveal/Fade"
import Nav from "../components/Navbar-copy"
import Banner from "../components/Experimental-banner"
import Thumbnail from "../components/Thumbnail"
import Footer from "../components/Footer"
import "bootstrap/dist/css/bootstrap.css";
import { Helmet } from "react-helmet"

import StateraThumb from "../assets/statera-v2.png"
import HomeBanner from "../assets/homebanner.png"
import HomeBanner2 from "../assets/homebanner2.jpg"
import HomeBanner3 from "../assets/medotme.png"

import UCREThumb from "../assets/ucre-thumb2.png"
import NanaThumb from "../assets/NanaWallThumb.png"
import PUIThumb from "../assets/pui-thumb.png"
import HondaThumb from "../assets/hondathumb2.png"
import favicon from "../assets/favicon.png"

import { motion } from "framer-motion"

export default () => (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />
<script src="../../navscroll.js"></script>
  </Helmet>
    <Nav
    logoColor="white"
    color="white"
    />
    <Fade duration={2000}>

    <Banner
      image={HomeBanner}
      color="#9dadbc"
      title="Access Granted."
      description="I'm Michael. I'm a product designer that thrives on understanding people's stories and creating experiences around their needs."
    />
    </Fade>
    <div className="top-of-site-anchor"></div>
    <Fade duration={3000}>
    <div id="projects">

    <Thumbnail
      link="/honda"
      image={HondaThumb}
      alt="Honda Thumbnail"
      title="Salmon"
      subhead="A research synthesis tool for design thinkers and user researchers."
      category="Capstone Project"
    />

    <Thumbnail
      link="/statera"
      image={StateraThumb}
      alt="Statera Thumbnail"
      title="Statera"
      subhead="Helping student athletes communicate stress to coaches and reduce burnout"
      category="Responsive Web Design"
    />

    <Thumbnail
      link="/artcircuit"
      image={UCREThumb}
      alt="Art Circuit Thumbnail"
      title="Art + Human Circuit"
      subhead="Bringing communities together to play and engage with art through IoT solutions."
      category="User Research"
    />
    <Thumbnail
      link="/nanawall"
      image={NanaThumb}
      alt="Nanawall Thumbnail"
      title="Nanawall AR"
      subhead="Using augmented reality to shorten product selection times."
      category="Native App"
    />



    </div>
    </Fade>
    <Footer />
  </div>
)
