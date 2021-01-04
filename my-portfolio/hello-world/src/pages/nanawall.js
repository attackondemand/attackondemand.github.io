import React from "react"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

import Nav from "../components/Navbar-copy"
import Banner from "../components/Experimental-banner-copy"
import Footer from "../components/Footer"
import Image from "../components/Image"


import NanaBanner from "../assets/NanaBanner.png"
import NanaScreen from "../assets/Nanawallscreen.png"
import NanaMeasure from "../assets/nanawall-measure.gif"
import NanaTry2 from "../assets/nanawall-tryon2.gif"
import NanaProject from "../assets/nanawall-project.gif"
import NanaStakeholders from "../assets/nanawall-stakeholder-map.png"
import NanaMap from "../assets/nanawall-mockup.png"
import LoFi1 from "../assets/nanawall-lo-fi-prototypes.png"
import LoFi2 from "../assets/nanawall-lo-fi-prototypes-2.png"
import LoFi3 from "../assets/nanawall-lo-fi-prototypes-3.png"
import UserFlow from "../assets/nanawall-user-flow.png"
import Architecture from "../assets/nanawall-ia.jpg"
import Branding from "../assets/nanawall-branding.png"
import Roadmap from "../assets/nanawall-roadmap.png"
import HiFi1 from "../assets/nanawall-hi-fi-prototypes-1.png"
import HiFi2 from "../assets/nanawall-hi-fi-prototypes-2.png"
import HiFi3 from "../assets/nanawall-hi-fi-prototypes-3.png"
import HiFi4 from "../assets/nanawall-hi-fi-prototypes-4.png"
import HiFi5 from "../assets/nanawall-hi-fi-prototypes-5.png"
import HiFi6 from "../assets/nanawall-hi-fi-prototypes-6.png"


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
    <title>Nanawall AR: An AR app to encourage product discovery | Michael Silvestre | Product Designer</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
  <Nav
  logoColor="white"
  color="white"
  />
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
  <div className="serif-header">Residential projects for Nanawall representatives require significant time and emotional investment with a long onboarding process.</div><br/><br/>

  <strong>Solution</strong><br/>
  <div className="serif-header">Allow Nanawall customers to visualize projects directly within their homes.</div>
Nanawall AR allows customers to take on the role of designer. Providing customers with the tools and language to make selections away from their conversations with Nanawall representatives means they can have richer, more efficient conversations about their design needs.
</div>
  </div>
  <div className="center-content">
  <div className="section-header">AND NOW FOR SOME CONTEXT</div><br/><br/>
    <strong>About the project:  </strong>
  This project came about through my spring Interaction Design Studio class at Carnegie Mellon. Teams were assigned a company to research, identify an opportunity within their value flow, and create a native mobile app solution that could enhace company services, be that internal or external.<br/><br/>

    <strong>My role:  </strong><br/>
    <strong>Background Research and Synthesis</strong> - Studied Nanawall's services and company culture to understand complex stakeholder needs and opportunity areas.<br/><br/>

    <strong>Ideation</strong> - Used stakeholder mapping and reverse assumptions to generate potential services that could help Nanawall bring value to their customers.<br/><br/>

    <strong>Information Architecture and Wireframing</strong> - Mapped out possible user flows through design and created wireframes to better prototype these solutions.<br/><br/>

    <strong>Brand Identity</strong> - Used background research on Nanawall's current messaging and visuals to create an updated look that aligned with their core values.

  </div>

  <div className="pale-green image-box" style={background}>
  </div>
  <div className="section-header"> DESIGN DECISIONS</div>

  <div className="img-text-box">

  <div className="img-text-text"><span className="serif-header">Use native measurement functionality to give customers product estimates</span><br/>
  The Nanawall AR experience is initiated with a two-step measurement tool. For each dimension, users simply tap and drag to calcuate the measurements of their new Nanawall doors. As Nanawall doors are an expensive investment, we wanted to allow customers to be thorough with their measurements as needed. Though we calculate these dimensions, we allow customers the opportunity to verify and edit for extra precaution.</div>
    <div><img src={NanaMeasure} alt="preview of measurement tool" /></div>
  </div>
  <div className="pale-green img-text-box">
  <div><img src={NanaTry2} alt="preview of try on experience" /></div>

  <div className="img-text-text">
  <span className="serif-header">Explore product offerings through augmented reality</span><br/>
  Nanawall products come in a variety of combinations, which can be overwhelming for customers to process. We created an AR try-on experience that allows users to easily test out different materials, featuring gradual transitions that allow customers to compare differences between products.</div>
  </div>
  <div className="img-text-box">
  <div className="img-text-text"><span className="serif-header">Share projects with others</span><br/>
  Once Nanawall customers find a product they are interested to learn more about, they can save it to their projects board. From here, customers can share their AR designs with their Nanawall representatives, as well as their friends, can start getting feedback on their designs before having to arrange an in-person consultation.</div>
    <div><img src={NanaProject} alt="preview of creating project" /></div>
  </div>
  <div className="pale-green image-box">
  <div className="section-header">UNDERSTANDING THE PROBLEM SPACE</div><br/><br/>
  <div className="box-content">
  <span className="serif-header">“What is a glass wall system?”</span>
  When my team began this project, this was a problem space that none of us were familiar with. As a result, our team first tackled this project by doing important background research. We needed to be able to understand Nanawall’s business value, and how that made them a competitor within the market. <br/><br/>

  For our team, this meant not only studying Nanawall’s product offerings through their site, but also doing a competitive analysis and understanding their brand identity. How could we utilize Nanawall’s current product ecosystem to create an application that would further connect them to their stakeholders?<br/><br/>

    <span className="serif-header">We used stakeholder mapping to identify where value flows through Nanawall’s product ecosystem.</span>
    <Image img={NanaStakeholders} alt="stakeholder map showing value flow between customers and representatives"></Image>

    Nanawall has two main audiences: commercial and residential customers. Rather than selling within retail environments, Nanawall uses independent representatives to sell their products. For someone to view Nanawall doors, they often must visit a showroom, which could be miles away from their house.<br/><br/>

For residential customers, there is a higher need for investment within Nanawall projects. Home designs are incredibly personal, and as a result, mean Nanawall’s residential customers want to be more involved in the process. Being able to provide this level of service is not always easy for Nanawall representatives. As third party companies, they have other projects they work on, so being able to meet customer needs can be challenging.
  </div>




</div>
<div className="image-box">
<div className="section-header">IDEATION</div><br/><br/>
<div className="flex-box">    <Image img={LoFi1} alt="stakeholder map showing value flow between customers and representatives"></Image>
<Image img={LoFi2} alt="stakeholder map showing value flow between customers and representatives"></Image>
<Image img={LoFi3} alt="stakeholder map showing value flow between customers and representatives"></Image>
</div>
<div className="box-content">
Our team wanted to create a tool that would allow Nanawall’s residential customers the ability to get familiar with their products earlier on in the process. Perhaps they might not be readily able to go visit a showroom, but they could get an understanding of what wall systems Nanawall has to offer. Aligned on which outcomes we wanted to transform, our team generated ideas for addressing them using a reverse assumptions activity. We ultimately landed on creating an AR app that would allow Nanawall’s customers an opportunity to visualize and receive estimates on installations right within their home.
</div>
<div className="section-header">USER FLOWS</div><br/><br/>
<Image img={UserFlow} alt="user flow for how nanawall customers can browse products"></Image>
<div className="box-content">
Through this exercise, our team was able to come to a consensus on the flow for the Nanawall AR app. Through user testing, we chose to minimize the onboarding process and allow customers to get straight to measuring their projects and looking at products.

</div>

<div className="section-header">ITERATION OF PRODUCT SELECTION </div><br/><br/>
<Image img={Architecture} alt="user flow for how nanawall customers can browse products"></Image>
<div className="box-content">
The biggest challenge within our experience was creating an information hierarchy for product selection and filtering. With a browsing feature that we wanted to mantain as inobstrusive, and with model numbers that did not provide detailed information about the products, we needed a way to align product discovery with users' mental models. To simplify the experience, we chose to focus on highlighting functionality of walls and materials created. As a trade off, we chose to eliminate color section from product exploration, as choices were too varied and also would lack accuracy using current AR technology.
</div>
</div>
<div className="pale-green image-box">
<div className="section-header">BRAND IDENTITY </div><br/><br/>
<Image img={Branding} alt="user flow for how nanawall customers can browse products"></Image>
<div className="box-content">
As part of my role on the team, one of my biggest accomplishments was leading the team in developing a brand identity that reflected Nanawall’s core values and aesthetic, while envisioning a new future for the company with the rollout of this app. We wanted to highlight both Nanawall’s reputation as a luxury component in a customer’s home, while also highlighting the company’s commitment to being eco-conscious.<br/><br/>

To accomplish this, I had my teammates create moodboards that represented what the team felt represented Nanawall. After this, we shared our thoughts and came to a consensus on these key traits to our app:<br/><br/>

<strong>Emphasize nature:</strong> Green is already part of Nanawall’s official branding and we wanted to preserve that; however, we wanted to change this to an earthier green that spoke to Nanawall’s elegance and it’s commitment to sustainability.<br/><br/>

<strong>Empower the customer:</strong> The main goal of Nanawall AR is to help bring the customer into the project process. We wanted to make them feel as though they were designers building their homes, not just clients needing to be walked through their projects.<br/><br/>

<strong>Speak with sophistication:</strong> Ensure all language within app feels professional and clean, while also emphasizing the powerful functionality of these doors.
</div>
<div className="section-header">HI-FIDELITY PROTOTYPE </div><br/><br/>
<div className="gridRow">
<Image img={HiFi1} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
<Image img={HiFi2} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
<Image img={HiFi3} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
</div>
<div className="gridRow">
<Image img={HiFi4} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
<Image img={HiFi5} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
<Image img={HiFi6} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
</div>
</div>
<div className="image-box">
<div className="section-header">ROADMAP</div><br/><br/>
<Image img={Roadmap} alt="roadmap we created to outline potential functionality for nanawall app"></Image>
<div className="box-content">
Our design addressed just one phase of the Nanawall customer journey; however, we envisioned the Nanawall AR app to further address the needs of customers and representatives once customers choose their products. We think that an app like this could streamline communication between representatives and their customers, and help make the installation process more transparent.
</div>
</div>
</div>
</div>
<Footer />
</div>
)
