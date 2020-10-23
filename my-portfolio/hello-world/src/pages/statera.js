import React from "react"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import {SRLWrapper} from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";

import Image from "../components/Image"


import {Carousel, CarouselItem} from 'react-bootstrap'
import StateraThumb from "../assets/statera-v2.png"

import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"
import Pool from "../assets/statera-screenbanner.png"
import Scoreboard from "../assets/statera-scoreboard.png"
import JourneyMapping from "../assets/statera-journeymapping.png"
import SwimmerJourneyMap from "../assets/statera-parents-perspective.png"
import CoachJourneyMap from "../assets/statera-coach-perspective.png"
import SwimmerJourneyMapSmall from "../assets/statera-parents-perspective-small.png"
import CoachJourneyMapSmall from "../assets/statera-coach-perspective-small.png"
import Responsive from "../assets/statera-responsive.png"
import Responsive2 from "../assets/new-responsive.png"
import StressAssessment from "../assets/stressassessment.webm"
import StressAssessmentBackup from "../assets/stress-assessment.mp4"
import StressAssessmentGif from "../assets/stress-assessment.gif"
import Performance from "../assets/Coach - Performance Desktop.png"
import PerformanceDemo from "../assets/Performance-Demo.png"
import Performance2 from "../assets/Performance-Statera-2.png"
import Architecture from "../assets/statera-architecture.png"
import Wireframe1 from "../assets/statera-wireframe-1.jpg"
import Wireframe1Small from "../assets/statera-wireframe-1 small.jpg"
import Wireframe2 from "../assets/statera-wireframe-2.jpg"
import Wireframe2Small from "../assets/statera-wireframe-2-small.jpg"
import Wireframe4Small from "../assets/statera-wireframe4-small.png"
import Wireframe5Small from "../assets/statera-wireframe5-small.png"
import Wireframe6Small from "../assets/statera-wireframe-6-small.png"
import DataIcon from "../assets/statera-data-icon.png"
import DowntimeIcon from "../assets/statera-downtime-icon.png"
import DataFocus from "../assets/statera-focus-icon.png"
import Wireframe3 from "../assets/stress-web-small.png"


import favicon from "../assets/favicon.png"
const options ={
  settings: {
    autoplaySpeed: 0,
  },
  buttons: {
    showCloseButton: true,
  }
}

export default ()=> (

  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Statera: Helping student athletes communicate stress to coaches and reduce burnout" />
    <meta property="og:image" content={StateraThumb} />
    <title>Michael Silvestre</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />
  </Helmet>
  <Nav />
  <Fade duration={3000}>
  <Banner
    image={Pool}
    title="Statera"
    color="#727F84"
    description="Helping student athletes communicate stress to coaches and reduce burnout"
    team="Team: Amrita Sakhrani, Kathy Song"
    role="Project Focus: User Research, Responsive Website, Mobile Design"
    projectLength="Timeline: August 2019 - December 2019"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
  <div className="center-content">
  <div className="section-header"> THE CLIFF'S NOTES</div><br/><br/>
  <strong>Problem</strong>
  <div className="serif-header">High School swimmers struggle balancing school, practice, and meets, leading talented athletes to prematurely quit their teams due to stress and burnout.</div><br/><br/>

  <strong>Solution</strong><br/>
  <div className="serif-header">Give coaches visibility into the hectic high school schedule.</div>
  Statera is a platform for mobile and desktop that establishes a dialogue between student athletes and coaches around emotional health and sports to help decrease burnout. Through Statera, students can assess and submit their current stress levels to their coaches to build practice regimens considerate of their students’ academic workloads.
  </div>
  <div className="img-text-box blue-grey">
    <div><img src={Responsive2} alt="responsive website"/></div>
    <div className="img-text-text"><span className="serif-header">Use responsiveness to give coaches the tools they need, when they need it.</span><br/>
  We chose to create a responsive website that would allow coaches and students to allocate energy that felt appropriate to their environment. When coaches prepare for practices, this usually involves carefully reviewing past heat sheets, student records, and building off this data, which means this work typically isn’t completed on a mobile phone. However, we wanted to give coaches the opportunity to review any information around students that they might need refreshing while at the pool.</div>
  </div>
  <div className="img-text-box">
  <div className="img-text-text"><span className="serif-header">Help empower students to voice their stress.</span><br/>
  Initial feedback we got from our stress assessment was that it failed to account for students uncomfortable with disclosing personal information, as well as student who wouldn’t have a framework for assesing their own stress levels. Incorporating this feedback, we generated a survey that students could use to build into this. </div>
    <div><img src={StressAssessmentGif} alt="preview of stress assessment" /></div>
  </div>
  <div className="img-text-box blue-grey">
    <div><img src={Performance2} alt="Performance Management"/></div>
    <div className="img-text-text"><span className="serif-header">Show the value of prioritizing life balance.</span><br/>
    Beyond the student's journey balancing mental health and swimming practice, we wanted Statera to provide concrete value for coaches as well. The performance management tool communicates improvements within performance from increased attention to mental health, while also giving them powerful tools to analyze the team's strengths and weaknesses throughout the season.
  </div>
  </div>
  <div className="center-content">
  <div className="section-header">MY CONTRIBUTIONS TO STATERA</div><br/><br/>
    <strong>About the project:  </strong>
  My team was asked to build a responsive website for a problem within “youth sports” as part of a six week project in our Interaction Design Studio. It was our task to go into the field and identify pain points, generate solutions, and create a mid-to-hi-fi prototype of our website.<br/><br/>

    <strong>My role:  </strong><br/>
    <strong>Guerrilla and background research   </strong>- Took to the streets of Pittsburgh and asked people their experiences around youth sports.<br/><br/>

    <strong>Research synthesis   </strong>- Led our team to use affinity diagramming to identify gaps in our domain knowledge.<br/><br/>

    <strong>Ideation  </strong> - Tested storyboards with former student athlets to seek validation in our concepts.<br/><br/>

    <strong>Solutioning  </strong> - developed wireframes and lo-fi prototypes for our Stress Assessment feature.

  </div>

  <div className="image-box blue-grey">
  <Fade duration={3000}>
  <div className="images">
  <Image img={Scoreboard} alt="Scoreboard at Gateway High School pool"></Image>
  <Image img={JourneyMapping} alt="My team plotting out our user journey maps"></Image>

  </div>

  <div className="web-caption"><strong>Left:</strong> Scoreboard during a swim meet at Gateway High School. Doing observational studies allowed us to capture important data created during each heat, as well as see swimmer and coach behavior. <strong>Right:</strong> We used this information to help us map our customer and stakeholder journey maps.   </div>
    <div className="mobile-caption"><strong>Top:</strong> Scoreboard during a swim meet at Gateway High School. Doing observational studies allowed us to capture important data created during each heat, as well as see swimmer and coach behavior. <strong>Bottom:</strong> We used this information to help us map our customer and stakeholder journey maps. </div>

    </Fade>

  </div>
  <div className="center-content">
  <div className="section-header"> FINDING THE RIGHT PROBLEM TO SOLVE</div><br/><br/>
  Our team performed guerrilla research and interviewed Pittsburgh residents on their experiences around youth sports. We spoke to volunteer coaches, former student athletes, and parents during our research process. Across these groups, we uncovered a similar story in the student athlete experience: while athletes didn’t lose their passion towards sports, they felt too much pressure in balancing academics and athletics to continue pursuing it during their education.
  </div>
  <div className="quote-box serif-header blue-grey"><Fade duration={3000}><div className="quote">"My son had to drop swim team, but never stopped loving to swim"<br/>
  -Mom of two swimmers</div></Fade>
  </div>
  <div className="center-content">
As swimming happened to be the seasonal sport currently in progress in Pittsburgh, we chose to focus our research on the young swimmer’s experience. On our weekend, we hitched an Uber to the Pittsburgh suburbs to observe a Monroeville Marlins swim meet. It was early winter, but we were welcomed with a wave of humid air immediately after stepping into that gym.</div>
<div className="center-content">
<div className="section-header"> INSIGHTS</div><br/><br/>
As our team performed interviews and observations, we’d come together to discuss what we did know and what gaps we had in our knowledge about the swim team experience. Through these conversations, we created journey maps that highlighted how coaches and swimmers (along with their parents) navigated through a week of practice and competitions.<br/><br/>

Ultimately, we highlighted three critical insights that were important for what we chose to build a website solving:<br/><br/>
<div className="insightSection">
<div className="insight-group">
<div className="insightNumber"><img src={DataFocus} alt="Performance Management"/><br/><span className="serif-label">Staying Focused</span></div>
<div className="insight">Swim coaches spend their time during meets standing right by the edge of the pool. They are busy focusing on their students. Using a website during a meet would not only be dangerous, it would also distract them from their role as a coach.</div></div>
<div className="insight-group">
<div className="insightNumber"><img src={DowntimeIcon} alt="Performance Management"/><br/><span className="serif-label">Mindful Downtime</span></div>
<div className="insight">The downtime during swim meets offers a lot of opportunity for swimmers to do school work, but the loudness of the gym and wanting to show support for your team can take away from that.</div>
</div>
<div className="insight-group">

<div className="insightNumber"><img src={DataIcon} alt="Performance Management"/><br/><span className="serif-label">Capturing Data</span></div>
<div className="insight">Swim meets generate a lot of useful data for coaches through heat sheets. This information is constantly being updated through the meet but could be giving coaches more value.</div></div>
</div>
</div>
<div className="image-box blue-grey">
<div className="section-header"> JOURNEY MAPPING</div><br/><br/>
<Fade duration={3000}>
<Image img={SwimmerJourneyMap} alt="Journey map of swimmer"></Image>
<Image img={CoachJourneyMap} alt="Journey map of coach"></Image>



  <div className="box-content">Our research from interviews and observations also helped us map out the journeys students and coaches undergo from practice to swim meets. Though swim meets are long and arduous for both stakeholders, we found it evident that so much of the impact for meets occurred during the lead up to them.</div>
  </Fade>
</div>
<div className="center-content">
<div className="section-header"> CONCEPT VALIDATION</div><br/><br/>
After discussing our research as a team, we identified four main opportunity areas for building a website around. These included:<br/><br/>

<div className="numbersection">
<div className="number-row">
<div className="insightNumbers">01.</div>
<div className="number-text">Helping address student and parent concerns during swim meets.</div>
<div className="insightNumbers">02.</div>
<div className="number-text">Assist student athletes with balancing their school work with swimming to avoid burnout.</div>
</div>
<div class="number-row">
<div className="insightNumbers">03.</div>
<div className="number-text">Finding ways for parents to handle logistics of early morning swim meets.</div>
<div className="insightNumbers">04.</div>
<div className="number-text">Giving coaches tools to choose the right set of warmups and practice routines leading up to a meet.</div>
</div>
</div>

<br/><br/>

We then mocked up storyboards around these opportunity statements, and speed dated them with parents and former swim athletes to get their feedback. From these, it seemed like the most extreme response came from addressing student burnout. Though it felt like the biggest challenge, our team was excited at tackling a space that could lead to more meaningful change within the current state of student-coach relationship dynamics.
</div>
<div className="image-box blue-grey">
<div className="section-header"> ARCHITECTURE AND WIREFRAMES</div><br/><br/>

<div className="box-content">
<span className="serif-header">Creating an architecture to support student-coach dialogue</span><br/>
Statera is about creating conversations between students and coaches, and we needed our site architecture to reflect that. Our site flow has a different experienced based on these two users, but both flows are deeply intertwined. While the student experience is about communicating information to coaches, the coach experience centers around processing student athlete needs and how it affects their practices.
  <div className="center-image">
  <Image img={Architecture} alt="Mapping out the Statera experience"></Image>
  </div>
</div>
</div>
<div className="image-box">
<div className="box-content">
<span className="serif-header">Paper Prototyping helped us spark alignment on design decisions</span><br/>
Our team had to move quickly from generating site ideas to creating a solution. To help get our ideas out, we each sketched prototypes for our responsive site. This helped us have a conversation as to whether or not our flow made sense, and what content could be better suited for which device.<br/><br/>
This exercise also helped us realize an important aspect of our design was missing. At this point, we only had scheduling, stress assessment, and messages as our core features. We realized that having a space for student athletes and coaches to process meet performance would be a useful repository for all swim meet metrics stored in heat sheets. In addition, this would help coaches study the relationship between student mental health and their swim performance.
</div>
<div className="image-grid">
<img src={Wireframe3} alt="Mapping out the Statera experience"/>
<img src={Wireframe1Small} alt="Mapping out the Statera experience"/>
<img src={Wireframe2Small} alt="Mapping out the Statera experience"/>
</div>

<div className="image-grid">
<img src={Wireframe4Small} alt="Mapping out the Statera experience"/>
<img src={Wireframe5Small} alt="Mapping out the Statera experience"/>
<img src={Wireframe6Small} alt="Mapping out the Statera experience"/>

</div>
</div>
</div>

<div className="center-content">


  </div>

  <div className="image-box blue-grey">
  <div className="section-header">ROADMAP</div><br/><br/>
  <div className="box-content">
  <span className="serif-header">Allowing for anonymity</span><br/>
  Dialogues around stress and workload are still taboo subjects for student athletes, and the fear of repercussions to vocalize these issues can still deter students from using the app. Future designs would explore how anonymity could be meaningfully used to transform coach attitudes and encourage students to opt-in and use the app.<br/><br/>

  <span className="serif-header">Smart planning for coaches</span><br/>
  Statera gives coaches a lot of data that can help them make meaningful decisions for practices and swim meets, but it could be overwhelming to the novice user. We'd like to incorporate machine learning that could provide actionable recommendations for coaches with workout planning, meet assignments, and practice regimens.
  </div>

  </div>
  </div>
<Footer />
</div>
)
