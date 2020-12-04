import React from "react"
import Fade from "react-reveal/Fade"


export default (props)=> (
  <div id="homepage-banner-container"
    style={{backgroundColor:props.color}}>
    <div className="banner-image">{console.log(props)}
    <img src={props.image} alt="First slide" />
    </div>
    <div className="homepage-title mobile-title">
    <div className={`banner-title ${props.mode}`}>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3><br />
    <span className={`${props.sponsor ? '' : 'hidden'}`}>{props.sponsor}</span>
    {props.role}<br />
    {props.team}<br />
    {props.projectLength}<br />
    </div>
    </div>

  </div>
)
