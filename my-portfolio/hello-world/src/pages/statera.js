import React from "react"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"

import {Carousel, CarouselItem} from 'react-bootstrap'
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"
import Pool from "../assets/statera-responsive-banner.png"
import Coach from "../assets/coach-perspective.jpg"
import Student from "../assets/student-perspective.jpg"
import StudentStress from "../assets/student-stress-iphone.png"
import CoachStress from "../assets/coach-stress-iphone.png"
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
    image={Pool}
    title="Statera"
    color="#727F84"
    description="Helping student athletes communicate stress to coaches"
    team="Team: Amrita Sakhrani, Kathy Song"
    role="Role: User Research, Responsive Website, Mobile Design"
    projectLength="Timeline: August 2019 - December 2019"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
<div className="content-photo-left">

  <div className="col">
    <h2>Overview</h2>
    <p>Statera is a productivity app for coaches and student athletes that prioritizes emotional health to build stronger, more well-balanced athletes. We help athletes create a line of communication with their coaches that helps them talk about personal and academic stress within the high-pressure schedules of youth sports through the ability for athletes to rank their current stress levels.</p>
  </div>
</div>

<div className="content-photo-left">
  <div className="col">
    <h2>Challenge</h2>
    <p>How might we allow players and coaches to talk about mental health in a competitive culture that encourages athletes to internalize stress management? </p>
  </div>
</div>
<div className="content-photo-left">
  <div className="col">
    <h2>Guerilla Research</h2>
    <p>After being assigned the domain of youth sports, my team went out into the field and interviewed Pittsburgh residents to get an idea of the landscape. We spoke to coaches, leaders of sports organizations, parents, and former athletes to understand some of the pain points that stakeholders within youth sports faced. As we began this project right as swim season was kicking off in Pittsburgh, and also after hearing some passionate stories from swim parents, we decided to focus on carving out a service within student swim teams. <br /><br />
    After our first round of guerilla research, we convened as a group and shared the knowledge that we had. As we felt that the information we received was still insufficient. We mapped out what we did know, and then proceeded to identify the gaps in our knowledge. This helped us shape our second round of research so that we could ask critical questions regarding both the emotional needs as well as material realities of our stakeholders.<br /><br />
    However, we quickly realized that relying exclusively on semi-structured interviews was giving us a limited picture of the environment in which swimmers played and the technology that was involved with both practices and meets. To improve our understanding, we headed to a local high school in Monroeville to attend a swim meet. Allowing ourselves to get immersed within the context of this event, experiencing the crowded, muggy, information-dense atmosphere of a swim meet, helped give perspective to some of the pain points our interviewees discussed in our interviews.
</p>
  </div>
</div>

<div className="center-content">
    <h2>Customer Journey Maps</h2>

          <img className="d-block w-100" src={Coach} alt="First slide" />


          <img className="d-block w-100" src={Student} alt="Second slide" />



</div>
<div className="content-photo-left">
  <div className="col">
    <p>After we collected all of this information, we found it necessary to streamline our observations, interviews, and artifacts into something more universal to the swimming experience. We carved out journey maps for both the swim coaches as well as the parent and student. To begin, we wrote down all of the data we had on post-it notes and then placed them onto a white board to identify the sequence of events as well as the emotional and mental dialogue with those steps in the process. Through this map, we allowed ourselves to think both about the practices and period leading up to a meet, as well as the meet itself. While this might have been a little more zoomed-out than normal, we wanted to keep an open mind about when was the best step for identifying a problem that demanded an intervention. Through the journey map, we were able to come across a set of general problems that could use addressing through a responsive website. These were:</p>
    <ol>
    <li>Swim meets were long events that required being attentive despite massive amounts of downtime.</li>
    <li>Fast paced nature of individual heats made it difficult for coaches to communicate with athletes during the actual meets.</li>
    <li>The amount of time involved for students to practice and participate in swim team could interfere with their academic performance and lead them to drop out.</li>
    </ol>
    </div>
</div>

<div className="content-photo-left">
<div className="col">
<h2>Speed Dating and Storyboarding</h2>
By identifying these problem areas, we were able to carve out more specific ideas on how to address these needs. As a group, we drafted storyboards that proposed possible solutions and we shared them to figure out whether or not they adequately addressed a need. Some of these solutions included:<br /><br />

	INSERT STORYBOARDS HERE<br /><br />

Through these interviews, we found that the need for being able to catch your child’s swim meet had a generally positive response, but we found the most visceral response came from the need to communicate your emotional health with your coach. One iterviewee, a former swimmer herself, stated that talking about these issues with a coach was just something you never did. That the atmosphere of a swim team made this almost taboo. The near discomfort at even the thought of discussing these issues with a coach, tied in with the recurring story we heard from parents that their children quit when the workload of swim team became too much for them to bear, made us realize there was value in exploring this need.
</div>
</div><br />

<div className="content-photo-left">
  <div className="col">
      <h2>Wireframes</h2>
      <p>One of the biggest challenges after identifying the solution we wanted to develop was creating a logical flow of information through the app. We identified that there would be two experiences for users: one that served coaches and then another that served students. Both experiences would have to be built intertwined, ensuring that the data students entered into the app would be effectively communicated to coaches. For each component of this app, we needed to make sure that there was a way to drive home value by incorporating mental health within practice strategies. To do this, we created three components for our app:<br /><br />
      <ol>
<li>Schedule</li>
<li>Stress Evaluation</li>
<li>Performance </li>
</ol>
In addition, we suggested a messaging platform within the app to help coaches and students resolve any administrative or urgent issues.

After establishing the necessary information architecture of the website, another challenge we faced within this wireframe stage was creating meaningful data visualizations. We needed to make sure that the appropriate information was communicated to the right parties, and that graphs could be processed at different resolutions, for different environments, and people with different learning capabilities. Considering this immense amount of use cases, we supplemented the graphs with generated summaries. This allowed coaches to get concise information about their students with a quick glance.
</p>
</div></div>
<div className="content-photo-left">

  <div className="col">
  <h2>Mid-to-High Fidelity Prototypes</h2>
    <p>For our visual design, we chose a look that played around with both brutalist design but also softer color pallets. The result was something similar to a blueprint map, which emphasized the utilitarian nature of the application as a tool for coaches. </p>

    <img src={StudentStress} alt="student stress iphone screen" />
    <img src={CoachStress} alt="coach stress iphone screen" />
  </div>
</div>

<div className="content-photo-left">
<div className="col">
<h2>Reflection</h2>

<p>We took a big risk with addressing this particular need, but I’m pleased with the overall product. There are a lot of issues with navigating mental health within a school application for teens, and there are gaps within this iteration that we need to work on resolving. Namely, creating tools for anonymity as well as ensuring for debiasing tools will be essential for a subsequent iteration. Another issue that we’ll need to work on is ensuring that the app helps decrease stress on students rather than increase it. We were more focused this round on providing value for the coach that we failed to take into account the ways that reminding students of their stress could create a negative feedback loop.</p></div></div>

</div>
</div>
<Footer />
</div>
)
