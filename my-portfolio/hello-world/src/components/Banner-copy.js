import React from "react"
import Fade from "react-reveal/Fade"


export default (props)=> (
  <div id="banner-container"
    style={{backgroundColor:props.color}}>
    <div className="banner-image">{console.log(props)}
    <img src={props.image} alt="First slide" />
    </div>
    {console.log(props)}
    <div className={`banner-title ${props.mode}`}><h1>{props.title}</h1>
      <div className={`banner-description ${props.mode} ${props.description ? '' : 'hidden'}`}>
      <h3>{props.description}</h3><br />
      <div className={`${props.team ? '' : 'hidden'}`}>
      <span className={`${props.sponsor ? '' : 'hidden'}`}>{props.sponsor}</span><br />
      {props.role}<br />
      {props.team}<br />
      {props.projectLength}<br />
      </div>
      </div>
    </div>

  </div>
)
