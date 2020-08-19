import React from "react"
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"

import DyatlovBanner from "../assets/dyatlov-banner.png"
import MidHikers from "../assets/mid-fi-dyatlov-hikers.png"
import MidInvestigation from "../assets/mid-fi-dyatlov-investigation.png"

export default () => (
  <div id="outercontainer">
    <Nav />
    <Banner
      image={DyatlovBanner}
      rgb="65,60,88"
      title="Dyatlov Pass"
      link="https://mesilves.github.io/assign7"
      callToAction="Visit the Site"
      projectLength="Timeline: November 2019 - December 2019"
      role="Role: Programmer"
      team="Languages used: React, HTML, CSS"
    />
    <div className="content">
    <div className="content-container">


      <h2>Overview:</h2>

I wanted to design a website that told a complex story through the power of the DOM. In the HCII department, one thing our instructors stress time and time again is to “embrace ambiguity”. For this project, I thought a fun way to play around with this phrase was to tell the story of an unsolved mystery. With unsolved mysteries, you’re only given facts after the event happened and it’s up to your interpretation of that data to posit a theory of what occured. Through this website, I wanted to see how I could utilize both the objective information about what we know of this event at Dyatlov Pass, and what people perceived about it to generate a comprehensive exploration of this mystery.

    <h2>Lo-Fi Prototypes and Sketching:</h2>
<img src="/dp-lofi-prototype.png" alt="lofi prototype of website" />
Before designing anything on the computer, I sketched out some ideas of potential pages for the website. I also did some research on interesting sites accomplishing similar things, such as this history on the St. Louis Browns https://thestlbrowns.com/#/history. I decided on a few components that were essential to telling this story: hiker biographies, a timeline of the events, and theories.

<h2>Mid-Fidelity Prototype</h2>
<img src={MidHikers} alt="midfi prototype of hikers page" />
<img src={MidInvestigation} alt="midfi prototype of hikers page" />

I translated my sketches to a mid-fidelity prototype on Figma. I tried going for a design that complemented the harsh, mountainous terrain of the story as well as using Garamond for a more vintage look. I shared this prototype with some peers, and the feedback I got was that they liked the flow, but that the navigations competed with each other that made it difficult to navigate to the different “chapters” of the story.

<h2>Programming the Website</h2>

I wanted to use this project as an opportunity to learn ReactJS, so I spent a large portion of my time getting better acquainted with the framework. To compliment it, I used React Router and Bootstrap. While I have had experience with HTML and CSS, I’ve never actually forced myself to think about how websites work across different devices as I code, so it was really important to me to create a truly responsive website. I had to figure out how to display information in a manner that could create a pleasant experience even on an iPhone, despite how information-rich I was planning this website to be.

<h2>Next Steps</h2>
The biggest logistical hurdles with this project were learning React and figuring out how to configure a React app for Github pages. As a trade-off, I did not have an opportunity to really dig in to creating a deeper storytelling experience for the website. In the coming months, I plan on developing this site further to help build on that aspect of this site.
</div>
</div>
<Footer />
  </div>
)
