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
import ArtCircuitBanner from "../assets/ucre-banner2.png"
import CrazyEight from "../assets/crazyeight.png"
import SpeedDating from "../assets/speeddating-me.jpg"
import NorthShore from "../assets/northshore-playground.jpg"
import Storyboard from "../assets/storyboard.png"
import favicon from "../assets/favicon.png"

export default ()=> (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
  <Nav />
  <Fade duration={3000}>
  <Banner
    image={ArtCircuitBanner}
    color="black"
    title="Art + Human Circuit"
    description= 'Bringing communities together to play and engage with art through IoT solutions.'
    team="Team: Amy Lu, Katie McTigue, Matthew Fang, Rissa Lee"
    role="Role: User Research, Archiving and Documentation"
    projectLength="Timeline: August 2019 - December 2019"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
<div className="center-content">
<div className="section-header"> THE CLIFF'S NOTES</div><br/><br/>
<strong>Problem</strong><br/>
People enjoy public art as an escape from their daily routines, but rarely engage or interact with the art installations in their neighborhoods.<br/><br/>


<strong>Solution</strong><br/>
The Art + Human Circuit is an interactive life-size “circuit” that empowers citizens to connect with public art and each other. Combining Pittsburgh’s cultural and historical identity with its technology-enriched future, the Circuit explores how public art can provide people the opportunity to break away from their daily routines, and to share those moments with the people around them.
</div>

<div className="image-box">
<Fade duration={3000}>
  <img src={KatzEyes} />
  <img src={Magnolias} />
  </Fade>
</div>

<div className="center-content">
<div className="section-header"> AND NOW FOR SOME CONTEXT</div><br/><br/>
<strong>About the project</strong><br/>
As part of our User Research Methods and Evaluation class, we teamed up with the Metro21 Smart Cities Institute to address the topic of engagement with public art in Downtown Pittsburgh. The first half of our research was individually focused, exploring the pre-existing research completed by Metro21, then we worked within teams to build off the insights we gained to identify a new solution for the project.<br/><br/>


<strong>What I did</strong><br/>
While our group focused on splitting user research evenly so that we would get differing perspectives on interviews and questions, I also took on the role as Archiver for the group. I chose this position as I wanted to improve my ability at documenting my processes within groups. For each activity, I took photographs and video for us to use within our interpretation sessions and deliverable materials.
</div>
<div className="center-content">
<div className="section-header"> DISCOVERY AND UNDERSTANDING<br/><br/>Observe and Intercept | Think Aloud Protocol | Speed Dating | Experience Prototyping</div><br/><br/>
<strong>What we saw</strong><br/>
Public art is an expensive endeavor for a city to undertake and maintain. Though it can be well-intentioned, these installations often exist in the background of people’s lives. Many people might recognize an installation as a landmark within their daily commute, there is little encouragement for Pittsburgh residents to further engage or seek out information regarding these pieces.<br/><br/>

To get a better sense of how people interacted with public art (and since we were all transplants to Pittsburgh, actually get an opportunity to check it out), we headed to Downtown Pittsburgh. Here we were able to witness the different ways people ignored, photographed, climbed on top of the various installations peppered throughout the city. In addition to observing people, we also interviewed people to find what did or didn’t attract them to downtown’s public art.
</div>
<div className="quote-box"><Fade duration={3000}><div className="quote">"It's important for space to have purpose to draw people to it, whether its for people taking a break from work to be on their phones or listening to music, it provides people an opportunity to interact with space rather than sitting in their urban silo."
-Tourist from Vermont</div></Fade>
</div>
<div className="center-content">
<strong>What we learned</strong><br/>
From our early interviews, we noticed few people seemed extremely intent on learning about the art. Their direct experience engaging with the art was most valuable. To supplement this, we chose to explore how integral art education was with regard to public art engagement. We ran competitive analysis to see how people interacted with public art databases, and we speed dated storyboards testing needs around social interaction, escapism, and being able to “create” your own public art.
</div>
<div className="center-content">
<div className="section-header">EARLY SOLUTION</div><br/><br/>
<strong>What we made:</strong><br/>

Through our previous interiews and clustering, we found three paths that were the most memorable to our participants:<br /><br />

<ol>
<li>Novelty</li>
<li>Interaction</li>
<li>Collaboration</li></ol>
</div>
<div className="image-box">
<Fade duration={3000}>
  <img src={Storyboard} />
  <img src={ExperiencePrototype} />
  </Fade>
</div>
<div className="center-content">

We then created 15 storyboards testing out ideas around these three general pathways. Users reacted most strongly to the need for social interaction while interacting with public art.<br /><br />

Building off this need, we created an early experience prototype that focused on building collaboration into existing public artworks. The concept was to create puzzles using sensing circuits that allowed people to light up the art depending on how many people stepped on to the tiles. <br /><br />

We took to the streets of Oakland and tested out our prototype with random passerby. While we originally had in mind that this would be a multiperson experience, we saw that participants took control of the experience to interact with it on their own. Single persons would actually set their backpack down on one tile to see if they could make it light up.
</div>
<div className="quote-box">
"It is a collaboration for 2 people, or a puzzle for 1 person!"
</div>
<div className="center-content">
<div className="section-header">ROADMAP</div><br/><br/>
In the future, we want to create a complimentary mobile app that converts activity within the circuits into graphic visualizations to promote further interactions happening even away from the installation.

</div>
</div>



</div>
<Footer />
</div>
)
