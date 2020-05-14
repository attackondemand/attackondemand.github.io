import React from "react"
import Fade from "react-reveal/Fade"


export default (props)=> (
  <div id="banner-container"
    style={{backgroundColor:props.color}}>
    <div className="banner-image">{console.log(props)}
    <img src={props.image} alt="First slide" />
    </div>
    <div className="banner-title"><h1>{props.title}</h1>
  
      <div className="banner-description">
      <h3>{props.description}</h3><br />
      {props.team}<br />
      {props.role}<br />
      {props.projectLength}<br />
      </div>
    </div>

  </div>
)
