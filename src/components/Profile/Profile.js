import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPlane,faPlaneArrival,faPlaneCircleCheck,faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import {
    useNavigate
} from "react-router-dom";

export default function Profile(){
    
    let locationData =   [
        {location:"Mumbai",icon:faPlane},
        {location:"Solapur",icon:faPlaneArrival},
        {location:"Mysore",icon:faPlaneDeparture},
        {location:"Pune",icon:faPlaneDeparture},
        {location:"Glasgow",icon:faPlaneArrival},
        {location:"Trivandrum",icon:faPlaneDeparture},
        {location:"Kochi",icon:faPlaneCircleCheck},
    ]
    let navigate = useNavigate()
    function navigateTo(path){
        navigate(path)
    }

    let locationElements = locationData.map(el => 
        (<span>
            <FontAwesomeIcon icon={el.icon} className="location-icon"></FontAwesomeIcon>
            <span className="location-label">{el.location}</span>
        </span>)

    )
    return(
        <div className='profile-side'>
            <div className="aside-header" id="original-header">
                <h1 className="name">Ullas Kakanadan</h1>
                <h3 className="designation">Senior Front End Developer</h3>
                <p><FontAwesomeIcon icon={faLocationDot} className="location-icon"/><span className="location-label">Kochi, Kerala, India</span></p>
                <Button variant="primary" onClick={() => navigateTo("/main")}>Know more about this guy..</Button>
            </div>
            <div className="aside-header d-none" id="flip-header">
                <h2 className="name">Feel free to connect</h2>
                <h3 className="designation">I've been to </h3>
                <p>
                    {locationElements}
                </p>
                <Button variant="primary" onClick={() => navigateTo("/contact")}>Contact</Button>
            </div>
        </div>
    )
}