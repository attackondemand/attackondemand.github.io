import React from "react"
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

import Tiles from "../assets/tiles.png"
import PosterSession from "../assets/postersession.png"
import Solution from "../assets/solution.png"
import ExperiencePrototype from "../assets/experience-prototype.png"
import ThinkAloud from "../assets/thinkaloud.png"
import KatzEyes from "../assets/katz-image.png"
import Magnolias from "../assets/mags-image.png"
import HondaBanner from "../assets/hondathumb2.png"
import CrazyEight from "../assets/crazyeight.png"
import SpeedDating from "../assets/speeddating-me.jpg"
import NorthShore from "../assets/northshore-playground.jpg"
import Storyboard from "../assets/storyboard.png"
import favicon from "../assets/favicon.png"

export default ()=> (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Art + Human Circuit: Bringing communities together to play and engage with art through IoT solutions." />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
  <Nav />
  <Fade duration={3000}>
  <Banner
    image={HondaBanner}
    color="#FFD4C8"
    title="Salmon"
    description= 'Creating tools to push forward Design Thinking and innovation'
    team="Team: Margot Henderson, Matt Franklin, Haley Park, Caitlin Coyiuto"
    role="Role: Product Designer"
    projectLength="Timeline: January - August 2020"
    mode="dark"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
  <div className="center-content">
  <div className="section-header"> THE CLIFF'S NOTES</div><br/><br/>
  <strong>Problem</strong>
  <div className="serif-header">Evidence and observations collected during user research are lost in a stream of tools that make it challenging to utilize while synthesizing findings. </div><br/><br/>

  <strong>Solution</strong><br/>
  <div className="serif-header">Streamline researcher workflows to help them focus on crafting user-driven insights.</div>
  Salmon is a research synthesis tool for design thinkers and user researchers that connects annotation, synthesis, and delivery of findings in the research process to help professionals and students focus on the work they're passionate about.
  </div>
  <div class="button-wrapper">
    <a class="button cta-button" href="http://cmu-pitt-crew.webflow.io/" target="_blank">Product Website</a>
  </div>
  </div>
  </div>


<Footer />
</div>
)
