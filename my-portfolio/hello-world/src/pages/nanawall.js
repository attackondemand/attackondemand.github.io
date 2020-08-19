import React from "react"
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"
import NanaThumb from "../assets/NanaWallThumb.png"
import NanaBanner from "../assets/NanaBanner.png"
import NanaScreen from "../assets/Nanawallscreen.png"
import NanaMeasure from "../assets/nanawall-measure.gif"
import NanaTry from "../assets/nanawall-tryon.gif"
import NanaTry2 from "../assets/nanawall-tryon2.gif"
import NanaProject from "../assets/nanawall-project.gif"

import Tiles from "../assets/tiles.png"
import NanaMap from "../assets/nanawall-mockup.png"
import favicon from "../assets/favicon.png"

var background = {
  height: "500px",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${NanaMap})`,
  backgroundPosition: "center"
}
export default ()=> (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Nanawall AR: Using augmented reality to shorten product selection times." />
    <meta property="og:image" content={NanaBanner} />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
  <Nav />
  <Fade duration={3000}>
  <Banner
    image={NanaBanner}
    color="#7A9E91"
    title="Nanawall AR"
    description= 'Using augmented reality to shorten product selection times.'
    team="Team: Danielle Shoshani, Roxanne Zhang, Rachel Jones, Celine Chang"
    role="Focus: Service Design, Native App, Brand Identity"
    projectLength="Timeline: January 2020 - February 2020"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
  <div className="section-header"> THE CLIFF'S NOTES</div><br/><br/>

  <div className="left-content">
  <div className="left-image"><img src={NanaScreen} alt="Screen from Nanawall AR" /></div>
  <div className="left-text">
  <strong>Problem</strong>
  <div className="serif-header">Residential projects for Nanawall representatives require significant time and emotional investment. Resources are often far away from their offices.</div><br/><br/>

  <strong>Solution</strong><br/>
  <div className="serif-header">Allow Nanawall customers to visualize projects directly within their homes.</div>
Nanawall AR allows customers to take on the role of designer. Providing customers with the tools and language to make selections away from their conversations with Nanawall representatives means they can have richer, more efficient conversations about their design needs.
</div>
  </div>
  <div className="center-content">
  <div className="section-header">AND NOW FOR SOME CONTEXT</div><br/><br/>
    <strong>About the project:  </strong>
  This project came about through my spring Interaction Design Studio class at CMU. Teams were assigned a company to research, identify an opportunity within their value flow, and create a native mobile app solution that could enhace company services, be that internal or external.<br/><br/>

    <strong>My role:  </strong><br/>
    <strong>Background Research and Synthesis</strong> - I studied Nanawall's services and company culture to understand complex stakeholder needs and opportunity areas.<br/><br/>

    <strong>Ideation</strong> - Used stakeholder mapping to generate potential services that could help Nanawall bring value to their customers.<br/><br/>

    <strong>Information Architecture and Wireframing</strong> - mapped out possible user flows through design and created wireframes to better prototype these solutions.<br/><br/>

    <strong>Brand Identity</strong> - Used background research on Nanawall's current messaging and visuals to create an updated look that aligned with their core values.

  </div>
</div>

<div className="pale-green image-box" style={background}>
</div>
<div className="section-header"> DESIGN DECISIONS</div>

<div className="img-text-box">

<div className="img-text-text"><span className="serif-header">Measurement Tool</span><br/>
The Nanawall AR experience is initiated with a two-step measurement tool. For each dimension, users simply tap and drag to calcuate the measurements of their new Nanawall doors. As Nanawall doors are an expensive investment, we wanted to allow customers to be thorough with their measurements as needed. Though we calculate these dimensions, we allow customers the opportunity to verify and edit for extra precaution.</div>
  <div><img src={NanaMeasure} alt="preview of measurement tool" /></div>
</div>
<div className="pale-green img-text-box">
<div><img src={NanaTry2} alt="preview of try on experience" /></div>

<div className="img-text-text">
<span className="serif-header">Try-on Experience</span><br/>
Nanawall products come in a variety of combinations, which can be overwhelming for customers to process. We created an AR try-on experience that allows users to easily test out different materials, featuring gradual transitions that allow customers to compare differences between products.</div>
</div>
<div className="img-text-box">
<div className="img-text-text"><span className="serif-header">Project Creation</span><br/>
Once Nanawall customers find a product they are interested to learn more about, they can save it to their projects board. From here, customers can share their AR designs with their Nanawall representatives, as well as their friends, can start getting feedback on their designs before having to arrange an in-person consultation.</div>
  <div><img src={NanaProject} alt="preview of creating project" /></div>
</div>
</div>
<Footer />
</div>
)
