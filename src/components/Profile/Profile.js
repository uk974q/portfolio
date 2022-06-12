import profilePic from "../../images/dustin.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


import './Profile.css'
export default function Profile(){
    return(
        <section className="profile-card">
            <img src={profilePic} className="profile-image" alt="Ullas Kakanadan" />
            <hr />
            <h1>Ullas Kakanadan</h1>
            <h3>Senior Front End Developer</h3>
            <p><FontAwesomeIcon icon={faLocationDot} className="location-icon"/>Kochi, Kerala, India</p>
            {/* <p>Senior front-end developer with 4.8 years of experience. Proficient in Angular, JavaScript, D3.js, CSS and HTML.
Team player with excellent interpersonal skills.
Awarded Master of Science in Data Analytics with Merit from the University of Strathclyde, UK.</p> */}

        </section>
    )
}