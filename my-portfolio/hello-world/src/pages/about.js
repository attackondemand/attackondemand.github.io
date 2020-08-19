import React from "react"
import Nav from "../components/Navbar"
import MyFace from "../assets/msilvestre.jpg"
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
  <Nav />
  <div className="content">
  <div className="about">
    <div class="about-photo">
      <img src={MyFace} alt="this is my face"/>
    </div>
    <div class="about-text">
      <h1>Hi, I'm Michael</h1>
      <p>Based in Pittsburgh, PA, I'm a product designer that wants to use technology to help people live their best lives. I will be graduating from Carnegie Mellon University's Masters of Human-Computer Interaction in August 2020.<br/><br/>
      Previously I worked in marketing and community management for startups in educational technology. Somewhere in between that and CMU, I also worked retail in auto repair and supermarkets. There is a zen to cutting cabbage unlike any Headspace session. <br/><br/>
      In my free time, I like to DJ ambient records, teach myself to program, and go running when it's not too cold outside.</p>
    </div>
  </div>
  </div>
  </div>
)
