import React from "react"
import Nav from "../components/Navbar"
import Banner from "../components/Banner-copy"
import Footer from "../components/Footer"
import Image from "../components/Image"
import Fade from "react-reveal/Fade"
import { Helmet } from "react-helmet"
import { SRLWrapper } from "simple-react-lightbox";


import Tiles from "../assets/tiles.png"
import PosterSession from "../assets/postersession.png"
import Solution from "../assets/solution.png"
import HondaBanner from "../assets/hondathumb2.png"
import CrazyEight from "../assets/crazyeight.png"
import SpeedDating from "../assets/speeddating-me.jpg"
import Storyboard from "../assets/storyboard.png"
import SalmonJourney from "../assets/salmon-journey.png"
import Annotate from "../assets/annotate.gif"
import Synthesize from "../assets/synthesize.gif"
import Deliver from "../assets/deliver.gif"
import StoryboardIcon from "../assets/storyboard-icon.png"
import SemiStructureIcon from "../assets/semi-structured-icon.png"
import CompIcon from "../assets/comp-analysis-icon.png"
import LitReviewIcon from "../assets/lit-review-icon.png"
import SarahFullPersona from "../assets/sarah-full-persona.png"
import BenFullPersona from "../assets/ben-full-persona.png"
import MeganFullPersona from "../assets/megan-full-persona.png"
import StevenFullPersona from "../assets/steven-full-persona.png"
import EricaFullPersona from "../assets/erica-full-persona.png"
import Ben from "../assets/ben-persona.png"
import Megan from "../assets/megan-persona.png"
import Sarah from "../assets/sarah-persona.png"
import Steven from "../assets/steven-persona.png"
import Erica from "../assets/erica-persona.png"


import EvidenceTracker from "../assets/evidence-tracker.png"
import ResearchPocket from "../assets/research-pocket.png"
import Moscow1 from "../assets/moscow-1.png"
import Moscow2 from "../assets/moscow-2.png"
import Moscow3 from "../assets/moscow-3.png"
import Scope from "../assets/scope.png"
import Metadata from "../assets/metadata.gif"
import Demographics from "../assets/demographic.gif"
import DeskResearch from "../assets/deskresearch.png"
import SalmonLogo from "../assets/logo.png"
import SalmonColors from "../assets/salmon-colors.png"
import SalmonFonts from "../assets/salmon-fonts.png"
import ReactTest from "../assets/react-testing.png"
import Roadmap from "../assets/salmon-roadmap.png"
import StakeholerMap from "../assets/salmon-stakeholder-map.png"

import favicon from "../assets/favicon.png"

export default ()=> (
  <div id="outercontainer">
  <Helmet>
    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Salmon Case Study | Creating tools to push forward Design Thinking and innovation." />
    <meta property="og:image" content={HondaBanner} />
    <title>Michael Silvestre | Product Designer</title>
    <link rel="canonical" href="http://msilvestre.xyz" />
    <link rel="icon" href={favicon} />

  </Helmet>
  <Nav />
  <Fade duration={3000}>
  <Banner
    image={HondaBanner}
    color="#FFD4C8"
    title="Salmon"
    sponsor='Client: Honda R&D Americas'
    description= 'Creating tools to push forward Design Thinking and innovation'
    team="Team: Margot Henderson, Matt Franklin, Haley Park, Caitlin Coyiuto"
    role="Role: Product Designer"
    projectLength="Timeline: January - August 2020"
    mode="dark"
  />
  </Fade>
  <div className="content">
  <div className="content-container">
  <div className="center-content">

  <div className="section-header"> THE CLIFF'S NOTES</div><br/><br/>
  <strong>Problem</strong>
  <div className="serif-header">Evidence and observations collected during user research are lost in a stream of tools that make them challenging to synthesize into powerful insights. </div><br/><br/>

  <strong>Solution</strong><br/>
  <div className="serif-header">Streamline researcher workflows to help them focus on crafting user-driven insights.</div>
  Salmon is a research synthesis tool for design thinkers and user researchers that connects annotation, synthesis, and delivery of findings in the research process to help professionals and students identify opportunities and create compelling research.
  </div>
  <div className="center-content">
  <div className="section-header"> MY CONTRIBUTIONS TO SALMON</div><br/><br/>
    <strong>About the project:</strong><br/>
      As part of my capstone team’s collaboration with Honda R&D Americas, we were asked to build an intelligent tool to help with learning Design Thinking. This was an eight month, end-to-end project from generative research out in the field to designing and testing hi-fidelity prototypes with stakeholders.<br/><br/>

      <strong>My role: </strong><br/>
      <strong>Team communications:</strong> I led content generation for our team’s Medium blog, designed our product website,and crafted weekly reports for our client to keep them involved within our design process.<br/><br/>

      <strong>Testing lead:</strong> I created testing protocols during our design phase of the project to help us validate concepts, user flows, and better understand user behavior through our prototypes.<br/><br/>

      <strong>Design research:</strong> I oversaw the development of design artifacts, including creation of user personas and customer journey maps, to our team and our client better understand our users.

      <strong>Product strategy:</strong> I helped drive product scope and strategy by undertaking a competitive analysis of the field, scoping our MVP through feature prioritization techniques, and designed a roadmap for future iterations of Salmon.

    </div>
  <div className="center-content">
  <div className="section-header">DESIGN OVERVIEW</div><br/><br/>
  <div className="serif-header">Salmon helps researchers carry evidence through three phases of their research process.</div>
  </div>
  <div className="salmon-journey">
  <img src={SalmonJourney} />
  </div>
  <div className="img-text-box salmon">
    <div>
        <Image img={Annotate} className="screen-images"></Image>
    </div>
    <div className="img-text-text"><span className="serif-header">Create annotations that make organizing evidence simple.</span><br/>
  Researchers can upload interview transcripts, pdf files, and documents and highlight important quotes that they want to carry over into synthesis. The annotation phase in Salmon populates evidence into the right sidebar where they can then add and create tags to do preliminary organization. </div>
  </div>
  <div className="img-text-box">
    <div className="img-text-text"><span className="serif-header">Stay aligned while synthesizing research no matter where you are.</span><br/>
Evidence created from Salmon’s annotation phase populates directly into Salmon’s synthesis board, including contextual information to help teams synthesize research both together or asynchronously. Commenting features allows teammates to resolve disagreements around tagging if they can’t connect in person.
    </div>

    <div><Image img={Synthesize} className="screen-images"></Image></div>
    </div>
    <div className="img-text-box salmon">
      <div><Image img={Deliver} className="screen-images"></Image></div>
      <div className="img-text-text"><span className="serif-header">Generate empathy and credibility while delivering findings.</span><br/>
      When you’re ready to share findings with people outside of your team, Salmon centers your evidence and findings in the delivery process. Clusters created within Salmon’s synthesis phase are populated into the sidebar and allow you to drag and drop evidence straight into your reports or presentations.
      <br/><br/>

  The delivery phase also allows you to go downstream and review evidence, participant pools, and synthesis boards with those outside audiences as well.

</div>
    </div>

<div className="image-box">
  <div className="section-header">DISCOVERY</div><br/><br/>
  <div className="box-content">
  <span className="serif-header">Using Design Thinking to build Design Thinking tools</span><br/>
With the rise of electric and autonomous vehicles, the landscape for the automotive industry is rapidly changing. This means that even the biggest companies have to think creatively and innovatively about the work they're doing. To promote innovation, Honda has established a series of initiatives and organizations throughout their company to establish design thinking methodologies in their research processes. <br/> <br/>As a means of supporting these internal organizations, Honda R&D came to my team with the challenge to build an intelligent platform for learning design thinking. At the core of this challenge, our team was contracted to help their sponsorship with OnRamp, an externship program at Ohio State University where undergrad students use design thinking to research and idenitfy potential opportunity areas within a variety of problem spaces. <br/><br/>
As budding designers within UX, this was a very meta experience. We had to design a research plan that allowed us to go into the field but also step back and reflect on our own challenges learning these methods. With a problem space that was so close to our own education, we had to approach the statement "You are not the user" with a bit more ambiguity. <br/> <br/>
<div className="gridRow">
<Image img={StakeholerMap}></Image><br/> <br/>
</div>
<strong>To find out how we could best create value within our problem space, we established three goals in our research:</strong><br/><br/>

<strong>1)</strong> Define the scope of our target users and determine which stakeholders had similar pain points<br/><br/>

<strong>2)</strong>Understand how teams both in and outside of Honda take advantage of Design Thinking processes<br/><br/>

<strong>3)</strong> Learn how teams collaborate and communicate ideas to drive innovation within their greater organization
  </div>
  <div className="grid-container">
    <div className="gridRow">
    <div className="gridUnit">
    <img src={StoryboardIcon} />
    <span className="serif-header">Storyboarding</span>
    To help overcome this feedback loop, we sought out exploring our problem space through storyboarding. This allowed us to have discussions with people both familiar and unaware of design thinking processes to evaluate where they would be most comfortable within an intervention.

    </div>

    <div className="gridUnit">
    <img src={SemiStructureIcon} />
    <span className="serif-header">Semi-Structured Interviews</span>
In addition to storyboarding, we also spoke with a wide net of stakeholders ranging from mechanical engineers at Honda, students within Honda’s OSU internship program called OnRamp, and Design Thinking leaders and experts both at Honda and at other companies.

    </div>
    </div>
    <div className="gridRow">
    <div className="gridUnit">
    <img src={CompIcon} />
    <span className="serif-header">Competitive Analysis</span>
Researched and explored over 50 project management, design, and collaboration softwares to see what needs were already addressed and which could use further intervention.
    </div>

    <div className="gridUnit">
    <img src={LitReviewIcon} />
    <span className="serif-header">Lit Review</span>
We read through case studies of Design Thinking initiatives at other companies, as well as understanding topics around collaboration, artificial intelligence, persuasion and knowledge management systems.
    </div>
    </div>
  </div>
  </div>
  <div className="center-content">
  <div className="section-header">SYNTHESIS</div><br/><br/>

  <span className="serif-header">We constructed personas to help scope our target users</span>
  While going out into the field, our team compiled our research through affinity clustering so that we could better understand user behaviors. Through the knowledge we surfaced from our clustering activity, I led our team in building user personas we could use to create alignment with our client on who we were building a tool for. As our client wanted us to imagine a solution that scaled to help teams outside of Honda, we used these personas throughout our proces to assess what needs were most compatible across experience level, job and education background, and personality type. What we found was that individual styles of behavior weren’t as important as how people wanted to implement and use design thinking within their daily workflows.

    </div>

    <div className="center-content">
    <span className="serif-header">Facilitator Personas</span>
    We developed three personas around the facilitators of Design Thinking workshops. What we found notable about these groups is that most differences weren’t between individual facilitators’ behaviors, but between the modes in which they operate in the different types of workshops they teach.

    <div className="gridRow">
    <div className="gridUnit">
    <Image img={BenFullPersona} styleClass="persona"></Image>

    </div>
    <div className="gridUnit">
    <Image img={MeganFullPersona} styleClass="persona"></Image>
    </div>
    <div className="gridUnit">
    <Image img={SarahFullPersona} styleClass="persona"></Image>

    </div>

      </div>
    </div>

      <div className="center-content">
      <span className="serif-header">Student Personas</span>
      After developing our three facilitator personas, we created two participant personas to embody the primary types of people entering the facilitators’ workshops to learn Design Thinking:<br/><br/>
      <strong>College students  </strong> participating in their university’s corporate innovation idea accelerator (OnRamp) and working for external corporate partners (including 99P Labs)<br/><br/>
      <strong>Professional engineers</strong> entering Design Thinking workshops through their workplace<br/><br/>
      These two personas aided our team in testing the compatibility of designing for both professional engineers and college students. When developing a tool for each, it is important to understand how attitudes towards Design Thinking education might shape their needs or goals when using our solution.

      <div className="gridRow">
      <div className="gridUnit">
      <Image img={EricaFullPersona} styleClass="persona"></Image>
      </div>
      <div className="gridUnit">
      <Image img={StevenFullPersona} styleClass="persona"></Image>
      </div>
        </div>
        </div>
        <div className="image-box salmon">
        <div className="section-header">RESEARCH INSIGHTS</div><br/><br/>
        <div className="box-content">
        <span className="serif-header">What is preventing Design Thinking students from generating powerful research?</span><br/>
        Through our interviews, storyboarding, and persona generation, our team surfaced <strong>four key insights</strong> within our generative research phase. We found that Design Thinking students had the passion and talent to create innovative ideas, but that key information was not being communicated or utilized effectively for powerful results.
        </div>
        <div className="gridRow">
        <div className="quotebox">
        <img src={Steven} />
        <div>
        "I use Control-F a lot."<br/>
        -Materials Engineer
        </div>
        </div>
        <div className="gridUnit">
        <span className="serif-header">Data Sustainability</span>
        A lack of data sustainability means that there are lost opportunities in future projects to build off past research. Finding past research is tedious and requires knowing what to search. This causes similar iniatives within organizations to work within silos and build duplicate research.
        </div>
        </div>

        <div className="gridRow">
        <div className="quotebox">
        <img src={Steven} />
        <div>
        "Sometimes I struggle understanding the intentions of design decisions made from teams in other locations."<br/>
        -Materials Engineer
        </div>
        </div>
        <div className="gridUnit">
        <span className="serif-header">Knowledge Transfer</span>
        Transferring project knowledge is difficult without project involvement; however, gaining an understanding of past research is even more challenging when internal research documents lack standardization.
        </div>
        </div>

        <div className="gridRow">
        <div className="quotebox">
        <img src={Erica} />
        <div>
        I tried to show a spreadsheet to communicate my findings and it went awful - figured out quickly, “What’s an easy way a middleschooler could see this?”<br/>
        -OnRamp Student
        </div>
        </div>
        <div className="gridUnit">
        <span className="serif-header">Persuasive Deliverables</span>
        Persuasive presentations and deliverables are critical for organizational buy-in and implementation of research. Often, researchers start looking through past work by digging through presentation materials and proposals.
        </div>
        </div>

        <div className="gridRow">
        <div className="quotebox">
        <img src={Steven} />
        <div>
        "Human experts are more effective for finding information than searching."<br/>
        -Materials Engineer
        </div>
        </div>
        <div className="gridUnit">
        <span className="serif-header">Department Collaboration</span>
        Conversation is pivotal to gaining access to information, as well as generating alignment on research insights and project direction. Misunderstandings are easily resolved when employees physically reach out to their teammates.
        </div>
        </div>
        </div>

        <div className="center-content">
        <div className="section-header">IDEATION</div><br/><br/>

        <span className="serif-header">We speed dated 12 sketches of possible solutions to design thinking instructors and students.</span>
From our insights, our team led a co-design session with our clients at Honda R&D Americas to determine which opportunities would be best to solve. Through this workshop, we aimed at targeting how improving the <strong>understandability of research across teams</strong> and <strong>the ability to assess the credibility of research</strong> would be the most promising avenues for reframing our project. From these two problem areas, we used speed dating to identify which needs would create the most value for our stakeholders.
        </div>

          <div className="center-content">
          <div className="section-header">PROTOTYPING</div><br/><br/>

          <span className="serif-header">Iterative design and research allowed us to turn our sketches into two meaningful prototypes.</span>
After testing these initial sketches of each experience, my team came together and highlighted commonalities with each concept as well as functionality that resonated with our interview participants. This exercise helped us narrow down our selection and create two further developed prototypes.
      <div className="gridRow">
      <img src={EvidenceTracker} />
      <div className="gridUnit">
      <div>
      <strong>Prototype #1: “Evidence Tracker”    </strong><br/>
A workflow for producing a report and presentation from tagged interview transcripts that link back to source material.
<br/><br/>
    <strong>Result:     </strong>Users loved the ability to have all their research within a single workflow, felt that it would save them a lot of hassle trying to organize their research.
    </div>
      </div>
      </div>
      <div className="gridRow">
      <img src={ResearchPocket} />
      <div className="gridUnit">
      <div>
      <strong>Prototype #2: “Evidence Tracker”    </strong><br/>
      file tagging and project management workflows for creating process narrative and assisting or automating documentation.
<br/><br/>
      <strong>Result:</strong> Users felt that it did address issues they had in their workflows, but felt that other products in the ecosystem sufficiently handled this work for them.
      </div>

      </div>
      </div>
        </div>

            <div className="center-content">
            <span className="serif-header">MoSCoW Prioritization helped us scope our hi-fi prototype and create alignment as a team. </span>
            <div className="gridRow m-20">
            <Image img={Moscow1} styleClass="persona"></Image>
            <Image img={Moscow2} styleClass="persona"></Image>
            <Image img={Moscow3} styleClass="persona"></Image>
            </div>
            Though my team mapped out a comprehensive experience for how the evidence tagger would function, we realistically understood that building everything out to hi-fidelity would not be realistic within a two-week sprint. To bring the most value for our client and our project, we aligned on building out the Synthesis board and then creating non-interactive prototypes for the Annotation and Deliver prototypes.<br/><br/>

            At a more detailed “feature” level, we also identified which components were most important to develop, then which parts we’d either do if we had time, or wanted to include as sketches within our handoff documents.

            <Image img={Scope} ></Image>
<br/><br/>
            From these conversations, we decided to create an interactive prototype of Salmon using React, a javascript library. We wanted to be able to test out how users would search, create, and connect information. Though this was a significant amount of work, we agreed that it would be the most powerful way for us to be able to assess the power of Salmon within a remote environment.
            </div>

            <div className="section-box salmon">
            <div className="section-header">ITERATION AND DESIGN DECISIONS</div><br/><br/>
            <div className="box-content">
      As my team developed our prototype to mid-hi fidelity, we identified critical adjustments to the design through our research testing.
            </div>
            <div className="img-text-box">
              <div><img src={Metadata} alt="responsive website"/></div>
              <div className="img-text-text"><span className="serif-header">Toggle Evidence Metadata</span><br/>
              <strong>Action:  </strong> Allow users to adjust the amount of information on screen during while synthesizing evidence.<br/><br/>

    <strong>Rationale:  </strong> Users expressed wanted to switch between having contextual information around evidence cards and having only the quotes on cards. Some users wanted to make sure that tagging did not prime them towards categorizing evidence a particular way, while other users wanted to interact directly with the quotes while synthesizing.</div>
            </div>

            <div className="img-text-box">
              <div><img src={Demographics} alt="responsive website"/></div>
              <div className="img-text-text"><span className="serif-header">View demographic data to check for biases</span><br/>
              <strong>Action:  </strong> Provide high-level feedback to researchers, clients, and facilitators around the interview data.<br/><br/>

    <strong>Rationale:  </strong> Facilitators wanted to ensure credibility of research and to be able to highlight any gaps their students had in collecting information. Including demographic data could help students address any potential biases in their research.</div>
            </div>

            <div className="section-text-box">
              <div className="section-image"><img src={DeskResearch} alt="responsive website"/></div>
              <div className="img-text-text"><span className="serif-header">Incorporate desk research into synthesis</span><br/>
              <strong>Action:  </strong> Articles and documents can be used in the same way as transcripts.<br/><br/>

    <strong>Rationale:  </strong>  We focused most of our attention on interviews in this prototype because we found that they had the greatest challenges. However, having heard from facilitators the importance of secondary research, we chose to prioritize sketching out how this work can be implemented and utilized within Salmon’s synthesis board.</div>
            </div>
            </div>

            <div className="center-content">
            <div className="section-header">BRANDING</div><br/><br/>

            <span className="serif-header">Giving  our design  a voice</span>
<strong>We named Salmon after the intuitive nature of their namesake.</strong> Just as salmon instinctively return to their birthplace, Salmon creates an intuitive experience for researchers to go back to the source of their evidence at any stage of their process.

<div className="gridRow">
  <div className="gridUnit">
    <Image img={SalmonLogo} ></Image>
  </div>
  <div className="gridUnit">
The Salmon in our logo is comprised of two parts: sticky notes representing a classic tool in user research, and the ray of a flashlight searching for insights.
  </div>
</div>
We also implemented a style guide that we utilized across all product deliverables, from our product website to our final report. <br /><br />

<div className="gridRow">
  <Image img={SalmonColors} ></Image> <Image img={SalmonFonts} ></Image>
</div>
  </div>

  <div className="image-box salmon">
  <div className="section-header">MEASURING SUCCESS</div>

  <img src={ReactTest} />

  <div className="box-content">
  We conducted <strong>11 usability tests </strong> of both our product, having users complete a series of tasks within the Annotation, Synthesis, and Deliver phases of Salmon. To get well-rounded feedback of Salmon, we conducted test with Design Thinking facilitators, students, HCI faculty, and tech recruiters to assess the practicality of our design as well as its ability to scale up outside of Honda’s immediate stakeholders.

Overall, Salmon was met with widespread acclaim? In addition to capturing a real unmet need for users, we also were told that our design would actually save organizations’ money because it would streamline workflows and reduce the need for other ancillary applications. <br/><br/>

<br/><br/>

  <strong>Testimonials</strong>
  </div>

  <div className="gridRow">
  <div className="gridUnit pad-5">
  <span className="serif-header"> On usability </span>
  <div className="quotebox">
  <img src={Megan} />
  <div>
  "The interface of dragging things around and rearranging it, it's very familiar, which is great.

So there's no added friction there. But the benefit of this is perhaps we don't have to be as rigid with our analysis structure."<br/>
  -OnRamp Facilitator
  </div>  </div>



  </div>
  <div className="gridUnit pad-5">
  <span className="serif-header">Evaluating biases</span>

  <div className="quotebox">
  <img src={Megan} />
  <div>
"For my own purposes, it would be great to be able to draw clear lines of evidence from the responses and make sure I'm not making an extrapolations or expansions on what was said when I reiterated or summarized."
<br/>
  -OnRamp Facilitator
  </div>
  </div>  </div>

  </div>

  <div className="gridRow">
      <div className="gridUnit pad-5">
      <span className="serif-header">Simplifying workflows</span>
      <div className="quotebox">
          <img src={Erica} />
          <div>
            “It makes the unpleasant part about honing and documenting and organizing aggregating data a lot easier."
            <br/>
              -OnRamp Student
          </div>
      </div>
      </div>

      <div className="gridUnit pad-5">
      <span className="serif-header">Desire to use</span>
      <div className="quotebox">
          <img src={Erica} />
          <div>
            “I wish I had this back when I was in OnRamp."
            <br/>
              -OnRamp Alum
          </div>
      </div>
      </div>
  </div>
  </div>

  <div className="center-content">
  <div className="section-header">MOVING FORWARD</div><br/><br/>

  <span className="serif-header">What's next for Salmon? </span>
  To wrap up our project, I led my team in designing a roadmap for Salmon and how we could potentially build out it's functionality in the future. To do this, we organized what we would want to add to Salmon if we had more time to develop the project, and then clustered those features in terms of feasibility of implementation.

  <img src={Roadmap} /><br/><br/>
  <span className="serif-header">Want to learn more about Salmon? </span>
  Check out our prototypes or head to our product website for further information.
  <div className="gridRow">
  <div class="button-wrapper">
    <a class="button cta-button" href="https://www.figma.com/proto/24iL9ENJIzEnOsw6N5dN8C/Pitt-Crew-Prototypes?node-id=1663%3A6324&viewport=621%2C227%2C0.03474431857466698&scaling=min-zoom" target="_blank"><strong>Figma Prototype</strong></a>
  </div>
  <div class="button-wrapper">
    <a class="button cta-button" href="https://honda-capstone-salmon.netlify.app/" target="_blank"><strong>React Prototype</strong></a>
  </div>
  <div class="button-wrapper">
    <a class="button cta-button" href="http://cmu-pitt-crew.webflow.io/" target="_blank"><strong>Product Website</strong></a>
  </div>
  </div>
  </div>

        </div>

  </div>


<Footer />
</div>
)
