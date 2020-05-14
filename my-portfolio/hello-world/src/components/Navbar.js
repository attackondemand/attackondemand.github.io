import React from "react"
import {Nav, Navbar} from 'react-bootstrap'

export default ()=> (
  <Navbar expand="lg px-4">
    <Navbar.Brand href="/">Michael Silvestre</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className="pr-5" href="/">Home</Nav.Link>
        <Nav.Link className="pr-5" href="/about">About</Nav.Link>
        <Nav.Link href="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
