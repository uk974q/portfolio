import React from "react"

import "./PilotPage.css"
import profilePic from "../../images/self_uni.jpg"
import flippedImage from "../../images/dustin.jpg"

import Profile from '../Profile/Profile'
import BubbleArcImage from "../visualisation/bubbleArcImage/bubbleArcImage"

export default function PilotPage(){

    let images = {
        default: profilePic,
        flipped: flippedImage
    }
    
    return(
        <div className="pilot-page">
            <BubbleArcImage images={images}/>
            <Profile />
        </div>
    )
}