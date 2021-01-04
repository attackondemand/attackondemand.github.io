import React from "react"
import Fade from "react-reveal/Fade"


export default (props)=> (
  <div id="homepage-banner-container"
    style={{backgroundColor:props.color}}>
    <div className="homepage-image">{console.log(props)}
    <img src={props.image} alt="First slide" />
    </div>
    <div className="homepage-title">
    <Fade bottom delay={100} duration={1000}>
    <div>
    <span className="serif-title">Michael Silvestre </span> <span className="homepage-sub">is a product designer that thrives on understanding people's stories and creating experiences around their needs.</span>
    </div>
    </Fade>
    </div>

  </div>
)
