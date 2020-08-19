import React from 'react';
import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import { withPrefix } from 'gatsby'
import Resume from "../assets/Resume06-14.png"
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"

export default () => (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Michael Silvestre - Resume" />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
    <Nav />
    <div className="content">
    <div className="resume-link">
    <a href={withPrefix('/Resume06-14.pdf')}>
      <img className="resume" src={Resume} alt="resume" />
    </a>
    </div>
    </div>
    <Footer />
  </div>
)
