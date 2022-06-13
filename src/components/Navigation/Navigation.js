import './Navigation.css'
import logo from "../../images/logo-main.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
{/* <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <img className="logo-icon" src={logo} alt="Logo" />
                <h1 className="logo-title">Portfolio</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faCaretDown} /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <a className="nav-link active" aria-current="page" href="#test">Profile</a>
                    <a className="nav-link" href="#test">Skills</a>
                    <a className="nav-link" href="#test">Experiences</a>
                    <a className="nav-link" href="#test">Education</a>
                    <a className="nav-link" href="#test">Contact</a>
                </div>
                </div>
            </div>
        </nav> */}
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