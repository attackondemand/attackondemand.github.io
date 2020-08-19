import React from "react"
import Linkedin from "../assets/linkedin-icon.png"
import Twitter from "../assets/twitter-icon.png"

export default ()=> (
  <div className="footer">
    <div className="social-media">
    <a className="social-link" target="_blank" href="https://www.linkedin.com/in/m-e-silvestre/"><img src={Linkedin} alt="linkedin account" /></a>
    <a className="social-link" target="_blank" href="https://twitter.com/factory_method"><img src={Twitter} alt="twitter account" /></a>

    </div>
    {`\u00A9`} Michael Silvestre 2020. Made with React and Gatsby.
  </div>
)
