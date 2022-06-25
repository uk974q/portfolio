import './Showcase.css'
import {NavLink, Outlet} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import NetworkDiagram from '../visualisation/networkDiagram/networkDiagram'
export default function Showcase(){

    
    return(
        <div className="showcase-page">
            <nav className='sidebar'>
            
                <Nav.Link as={NavLink} to="projects">Projects</Nav.Link>
                <Nav.Link as={NavLink} to="tech">Blogs</Nav.Link>
            </nav>

            <div className='display'>
                <Outlet />
            </div>
        </div>
    )
}