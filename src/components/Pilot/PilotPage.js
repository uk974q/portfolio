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
            <div className="left-side">
            <BubbleArcImage images={images}/>
            <div className="image-text">
                <span class="material-symbols-outlined">
                    flip
                </span>
                Click on image to flip!
            </div>
            </div>
            <Profile />
        </div>
    )
}