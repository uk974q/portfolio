import { link } from 'd3'
import React from 'react'
import './Tech.css'
export default function Tech(){

    let links = [
        {
            link:"https://www.google.com",
            name:"What is this on",
            published:"06/22/2015"
        },
        {
            link:"https://www.google.com",
            name:"Tech2",
            published:"06/12/2021"
        },
        {
            link:"https://www.google.com",
            name:"What is this on",
            published:"06/23/2018"
        }
    ]
    // let newlinks
    // React.useEffect(() => {
        
        links.sort((a,b) => {
            return new Date(b.published) - new Date(a.published)
        })

        let newlinks = links.map(el => (
            <li><a href={el.link} target="_blank">{el.name} - {el.published}</a></li>
            ))
        console.log("New",newlinks)

    // },[links])


    return(
        <div className='tech-page'>
            <h3>It's been some time. This is all I have, for now.</h3>
            <ul>
                {newlinks}
            </ul>
        </div>
    )
}