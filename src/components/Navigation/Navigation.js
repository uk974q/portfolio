import './Navigation.css'
import logo from "../../images/logo-main.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function Navigation(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo-icon" src={logo} alt="Logo" />
                    Portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Profile</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Experiences</Nav.Link>
                        <Nav.Link href="#link">Education</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
          
        
    )
}