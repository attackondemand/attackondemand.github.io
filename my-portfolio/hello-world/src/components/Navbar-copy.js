import React from "react"
import {Nav, Navbar} from 'react-bootstrap'
import { withPrefix } from 'gatsby'

export default class gaga extends React.Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top"
    };
  }

  componentDidMount() {
     this.listener = document.addEventListener("scroll", e => {
       var scrolled = document.scrollingElement.scrollTop;
       var anchor = document
       if (scrolled >= (window.innerHeight)*0.6) {
         if (this.state.status !== "amir") {
           this.setState({ status: "amir" });
         }
       } else {
         if (this.state.status !== "top") {
           this.setState({ status: "top" });
         }
       }
     });
   }

componentDidUpdate() {
  document.removeEventListener("scroll", this.listener);
}


render() {
   return (
  <Navbar style={{
    backgroundColor: this.state.status === "top" ? "transparent" : "white",
          position: this.state.status === "top" ? "absolute": "fixed",
        }}
        expand="lg px-4">
    <Navbar.Brand style={{
      color: this.state.status === "top" ? this.props.logoColor : "black",
    }}

    href="/">Michael Silvestre</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style={{
          color: this.state.status === "top" ? this.props.color : "grey",
        }}
        className="pr-5" href="/">Home</Nav.Link>
        <Nav.Link style={{
          color: this.state.status === "top" ? this.props.color : "grey",
        }}
        className="pr-5" href="/about">About</Nav.Link>
        <Nav.Link style={{
          color: this.state.status === "top" ? this.props.color : "grey",
        }}
         href={withPrefix('/MichaelSilvestre_Resume.pdf')} target="_blank" rel="noopener noreferrer" >Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
 }
}
