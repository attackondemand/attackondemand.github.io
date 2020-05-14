import React from "react"
import Nav from "../components/Navbar"
import MyFace from "../assets/msilvestre.jpg"

export default ()=> (
  <div id="outercontainer">
  <Nav />
  <div className="content">
  <div className="content-container">
  <div className="content-photo-left">
    <div class="col">
      <img src={MyFace} alt="this is my face"/>
    </div>
    <div class="col about-text">
      <h1>Hi, I'm Michael</h1>
      <p>I am a product designer located out of Pittsburgh, PA looking for work that uses empathy and technology to solve real user needs. I will be graduating from Carnegie Mellon University's Masters of Human-Computer Interaction in August 2020.<br/><br/>
      Previously I worked in marketing and community management for startups in educational technology. Somewhere in between that and CMU, I also worked retail in auto repair and supermarkets. There is a zen to cutting cabbage unlike any Headspace session. <br/><br/>
      In my free time, I like to DJ ambient records, teach myself to program, and go running when it's not too cold outside.</p>
    </div>
  </div>
  </div>
  </div>
  </div>
)
