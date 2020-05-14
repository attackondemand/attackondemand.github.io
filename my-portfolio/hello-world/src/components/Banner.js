import React from "react"
import Fade from "react-reveal/Fade"


render(){
  const renderDescription = () => {
    if (props.description){
      return <div className="banner-description">
            <h3>{props.description}</h3><br />
            {props.team}<br />
            {props.role}<br />
            {props.projectLength}<br />
            </div>
    }
  }
  return(
  <div id="banner-container"
    style={{backgroundColor:props.color}}>
    <div className="banner-image">{console.log(props)}
    <img src={props.image} alt="First slide" />
    </div>
    <div className="banner-title"><h1>{props.title}</h1>
    {renderDescription()}

    </div>

  </div>
);
}
