import './Navigation.css'
import logo from "../../images/logo-main.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {
    BrowserRouter as Router, 
    Link, NavLink
  } from "react-router-dom";

export default function Navigation(){

    // let defaultKey = document.location.pathname.slice(1)

    return(

        <Navbar className="navbar-container" variant="dark">
            <Container className='nav-container'>
                <Navbar.Brand href="#home" className='logo-class'>
                    <img className="logo-icon" src={logo} alt="Logo" />
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  className="link-container">
                        <Nav.Link as={NavLink} to={"/home"}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to={"/main"}>What else?</Nav.Link>
                        <Nav.Link as={NavLink} to={"/showcase"}>Showcase</Nav.Link>
                        <Nav.Link as={NavLink} to={"/contact"}>Feedback</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         
        
    )
}