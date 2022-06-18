import './Footside.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faLinkedinIn, faGithub, faFacebook, faInstagram, faStackOverflow} from '@fortawesome/free-brands-svg-icons'



export default function Footside(){
    return(
        <footer>
            <span><FontAwesomeIcon icon={faLinkedinIn} className="cursor-pointer" /></span>
            <span><FontAwesomeIcon icon={faGithub} className="cursor-pointer" /></span>
            <span><FontAwesomeIcon icon={faStackOverflow} className="cursor-pointer" /></span>
            <span><FontAwesomeIcon icon={faFacebook} className="cursor-pointer" /></span>
            <span><FontAwesomeIcon icon={faInstagram} className="cursor-pointer" /></span>
        </footer>
    )
}