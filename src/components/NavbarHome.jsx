import React from 'react'
import Navbarmg from "../assets/ICT-SECTOR-LOGO-1.png"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Navbar.css"
import {Link} from "react-router-dom"

const NavbarHome = () => {
  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand><img src={Navbarmg} alt="sector"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#"><Link to="/" className='navlink'>Home</Link></Nav.Link>
          <Link to="/"><NavDropdown title="The Council" id="basic-nav-dropdown">
           <NavDropdown.Item ><Link to="/about-the-council" className='navlink'>About The Council</Link></NavDropdown.Item>
           <NavDropdown.Item ><Link to="/why_need_a_council" className='navlink'>Why Need a Council?</Link></NavDropdown.Item>
           <NavDropdown.Item ><Link to="/what_we_do" className='navlink'>What We Do</Link></NavDropdown.Item>
           <NavDropdown.Item ><Link to="/who_we_are" className='navlink'>Who We Are</Link></NavDropdown.Item>
           <NavDropdown.Item ><Link to="/stakeholders" className='navlink'>Stakeholders</Link></NavDropdown.Item>
          </NavDropdown></Link>
          <Nav.Link href="#">ICT Sector Code</Nav.Link>
          <Nav.Link href="#">News/Notices</Nav.Link>
          <Nav.Link href="#">Resources</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default NavbarHome