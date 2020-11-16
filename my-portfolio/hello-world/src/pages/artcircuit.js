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
import ArtCircuitBanner from "../assets/ucre-banner4.png"
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
    image={ArtCircuitBanner}
    color="#5D536B"
    title="Art + Human Circuit"
    sponsor='Client: Metro21: Smart Cities Institute'
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
<div className="serif-header">People enjoy public art as an escape from their daily routines, but rarely engage or interact with the art installations in their neighborhoods.</div><br/><br/>


<strong>Solution</strong><br/>
<div className="serif-header">Bring interaction back into the public art experience.</div>
The Art + Human Circuit is an interactive life-size “circuit” that empowers citizens to connect with public art and each other. Combining Pittsburgh’s cultural and historical identity with its technology-enriched future, the Circuit explores how public art can provide people the opportunity to break away from their daily routines, and to share those moments with the people around them.
</div>

<div className="image-box purple">
<Fade duration={3000}>
  <div className="images">
  <img src={KatzEyes} alt="Bronze fountain at Agnes R. Katz Plaza"/>
  <img src={Magnolias} alt="Magnolias for Pittsburgh, located Downtown"/></div>
  <div className="web-caption">Public art in Downtown Pittsburgh. Left: the fountain at Agnes R. Katz Plaza. Right: Magnolias for Pittsburgh.</div>
    <div className="mobile-caption">Public art in Downtown Pittsburgh. Top: the fountain at Agnes R. Katz Plaza. Bottom: Magnolias for Pittsburgh.</div>
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
<div className="serif-header quote-box purple"><Fade duration={3000}><div className="quote">"It's important for space to have purpose to draw people to it, whether its for people taking a break from work to be on their phones or listening to music, it provides people an opportunity to interact with space rather than sitting in their urban silo."
-Tourist from Vermont</div></Fade>
</div>
<div className="center-content">
<strong>What we learned</strong><br/>
From our early interviews, we noticed few people seemed extremely intent on learning about the art. Their direct experience engaging with the art was most valuable. To supplement this, we chose to explore how integral art education was with regard to public art engagement. We ran competitive analysis to see how people interacted with public art databases, and we speed dated storyboards testing needs around social interaction, escapism, and being able to “create” your own public art.
</div>
<div className="center-content">
<div className="section-header">EARLY SOLUTION</div><br/><br/>
<strong>What we made</strong><br/>

Through our previous interiews and clustering, we found three paths that were the most memorable to our participants:<br /><br />
<div className="insightSection">
<div className="insight-group">
<div className="insightNumber">01. Distraction</div>
<div className="insight">Responses to public art were more positive when it felt like the experience afforded them a break from their daily routine. </div></div>
<div className="insight-group">
<div className="insightNumber">02. Interaction</div>
<div className="insight">Interacting with art is preferred over reading plaques and other existing information-driven mediums. </div></div>
<div className="insight-group">

<div className="insightNumber">03. Collaboration</div>
<div className="insight">When public art is powerful, people want to share those experiences with the people they care about. </div></div>
</div>

</div>
<div className="image-box purple">
<Fade duration={3000}>
  <div className="images">
  <img src={Storyboard} />
  <img src={ExperiencePrototype} />
  </div>
  <div className="web-caption">Left: Our team developed storyboards and performed speed dating sessions to see which needs we brainstormed had the most validation. Right: We created an experience prototype and had random passerby engage with the installation to see if our interactions were meaningful and made sense.</div>
    <div className="mobile-caption">Top: Our team developed storyboards and performed speed dating sessions to see which needs we brainstormed had the most validation. Bottom: We created an experience prototype and had random passerby engage with the installation to see if our interactions were meaningful and made sense.</div>
  </Fade>
</div>
<div className="center-content">

We then created 15 storyboards testing out ideas around these three general pathways. Users reacted most strongly to the need for social interaction while interacting with public art.<br /><br />

Building off this need, we created an early experience prototype that focused on building collaboration into existing public artworks. The concept was to create puzzles using sensing circuits that allowed people to light up the art depending on how many people stepped on to the tiles. <br /><br />

We took to the streets of Oakland and tested out our prototype with random passerby. While we originally had in mind that this would be a multiperson experience, we saw that participants took control of the experience to interact with it on their own. Single persons would actually set their backpack down on one tile to see if they could make it light up.
</div>
<div className="serif-header quote-box purple">
"It is a collaboration for 2 people, or a puzzle for 1 person!" - Pittsburgh resident
</div>
<div className="center-content">
<div className="section-header">ROADMAP</div><br/><br/>


After seeing the way our participants created "cheats" to interact with the circuits even without a friend, we wanted to build future additions to the Art + Human Circuit to include more opportunity for "single player" interactions. <br/> <br/>
We also want to build the circuit to be more adaptive to time of day and weather conditions. This would include providing audio interactions, as well as changing colors with the lighting. <br/> <br/>
As part of an IoT infrastructure, the installation circuits would track anonymous sensing data around how people were engaging with the art. This could help public art offices better understand what are the most valuable aspects of a given installation and help leverage that for future pieces or possible events. <br/><br/>
This data could then be brought back into the piece, creating either new pieces to the circuit based off of crowd density, or as part of an accompanied app.

</div>
</div>



</div>
<Footer />
</div>
)
