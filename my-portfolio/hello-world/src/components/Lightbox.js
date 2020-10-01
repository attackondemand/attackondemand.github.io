import React from "react"
import Fade from "react-reveal/Fade"
import { SRLWrapper } from 'simple-react-lightbox'
import Sarah from "../assets/sarah-full-persona.png"
import Ben from "../assets/ben-full-persona.png"
import Megan from "../assets/megan-full-persona.png"

export default (props)=> (
  <div id="banner-container">
  <SRLWrapper>
          <div id="content-page-one" className="container content">
            <div className="row">
              <div className="col-md-6 col-12 col-image-half">
                <img src={Sarah} alt="New York City - Architecture" />
              </div>

              <div className="col-md-4 col-12 col-image-small">
                <img src={Ben} alt="Parallels building" />
              </div>
              <div className="col-md-4 col-12 col-image-small">
                <img src={Megan} alt="The mist in the forest" />
              </div>

            </div>
          </div>
        </SRLWrapper>
  </div>
)
