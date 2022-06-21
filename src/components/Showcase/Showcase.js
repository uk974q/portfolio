import './Showcase.css'
import {NavLink, Outlet} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
export default function Showcase(){
    return(
        <div className="showcase-page">
            <nav className='sidebar'>
            
                <Nav.Link as={NavLink} to="projects">Profile</Nav.Link>
                <Nav.Link as={NavLink} to="tech">Account</Nav.Link>
            </nav>
            <div className='display'>
                <Outlet/>
            </div>
        </div>
    )
}