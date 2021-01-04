import React from "react"
import Nav from "../components/Navbar-copy"
import MyFace from "../assets/msilvestre.jpg"
import Footer from "../components/Footer"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

export default ()=> (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Michael Silvestre - Product Designer: About Me" />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />
  </Helmet>
  <Nav
  logoColor="black"
  color="grey"/>
  <div className="content">
  <div className="about">
    <div class="about-photo">
      <img src={MyFace} alt="this is my face"/>
    </div>
    <div class="about-text">
      <div className="serif-header">I am a product designer that finds centering people and stakeholders within the design process leads to powerful outcomes. </div>
      <p>I came into product design through working in marketing and communications for educational technology companies. My experiences engaging with customers and product teams inspired me to transition to the UX field. <br/> <br/>

Most recently, I graduated from Carnegie Mellon University’s Masters in <a className="internal-link" href="https://hcii.cmu.edu/" target="_blank" rel="noopener noreferrer">Human-Computer Interaction</a> program where I worked with   <Link className="internal-link" to="/honda"> Honda R&D Americas to build design thinking tools</Link>. I’m currently looking for Product Design roles that blend research, design, and strategy. I love to wear many hats and learn new things (for instance, I taught myself React JS to code this very portfolio), a curiosity which extends to how I enter every problem space I enter as a designer. <br/> <br/>

When I’m not in Figma or testing prototypes with users, I like to DJ ambient records, watch Wong Kar Wai movies, and get ever more closer to cooking the perfect tomato sauce.

</p>
    </div>
  </div>
  </div>
  <Footer />

  </div>
)
