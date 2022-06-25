import {
  Link
} from "react-router-dom";

import Profile from './Profile/Profile';
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import PilotPage from './Pilot/PilotPage'
import Footside from "./Footside/Footstide";
import './Main.css'
export default function Main() {

  return (
    <div className="main-page">
        <Skills />
        <Experience />
    </div>
  );
}

