import React from 'react';
import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import { withPrefix } from 'gatsby'
import Resume from "../assets/Resume.png"

export default () => (
  <div id="outercontainer">
    <Nav />
    <div className="content">
    <div className="resume-link">
    <a href={withPrefix('/Resume02-21.pdf')}>
      <img className="resume" src={Resume} alt="resume" />
    </a>
    </div>
    </div>
    <Footer />
  </div>
)
