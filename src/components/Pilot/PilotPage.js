import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import "./PilotPage.css"
import * as d3 from 'd3'
import Button from 'react-bootstrap/Button'
import {
    Link
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function PilotPage(){
    React.useEffect(function(){
        let width = document.getElementById("svg").offsetWidth
        console.log(document.getElementById("svg").offsetHeight)
        let height = document.getElementById("svg").offsetHeight
        console.log("Console",width,height)
        d3.select(".svg-container svg").remove();
        let radius = height/4
        let svg = d3
            .select(".svg-container")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${width} ${height}`)
            // .attr("height", height)
            // .attr("width", width);
        svg.append("circle")
            .attr("class", "circle prof-circle cursor-pointer")
            .attr("stroke", "black")
            .attr("fill", (d) => "white")
            .attr("r", (d) => radius)
            .attr("cx", (d) => width/2)
            .attr("cy", (d) => height/2)
            .on("mouseover",function(d){
                d3.selectAll(".path").attr("opacity",0.2)
            })
            .on("mouseout",function(d){
                d3.selectAll(".path").attr("opacity",1)
            })
            .on("click",function(d){
                //flip image
            })

        let arc = d3.arc().outerRadius(radius+5).innerRadius(radius).cornerRadius(0)
        let pie = d3.pie()
        let pieData = [{value:70},{value:20}, {value:50}]
        
        pie.value(function(d){
            return d.value;
        })
        let g = svg.selectAll(".arc")
        .data(pie(pieData))
        .enter().append("g")
        .attr('transform',`translate(${width/2},${height/2})`)

        g.append("path")
        .attr("class","path")
        .attr("d",arc)
        .transition().duration(3000)
        .attr("fill","#800080")
        // .attrTween('d',function(d){
        //     let i = d3.interpolate(d.startAngle + 0.1, d.endAngle)
        //     return function(t){
        //         d.endAngle = i(t)
        //         return arc(d)
        //     }
        // })
        let outerRadius = radius
        for(let i=0; i< 2; i++){
            outerRadius += 5
            let innerRadius = radius
            arc = d3.arc().outerRadius(outerRadius).innerRadius(radius)
            let g = svg.selectAll(".arc")
                .data(pie(pieData))
                .enter().append("g")
                .attr('transform',`translate(${width/2},${height/2})`)

                let gpath = g.append("path")
                .attr("class","path")
                .attr("d",arc)
                .attr("fill","#800080")
                .attr("opacity",0.5)

                gpath.transition().duration(3000)
                    .attr("fill","#800080")
                    .attrTween('d',function(d){
                        let i = d3.interpolate(d.startAngle + 0.1, d.endAngle)
                        return function(t){
                            d.endAngle = i(t)
                            return arc(d)
                        }
                    })

                
                
            

        }
        
    })
    
    return(
        <div className="pilot-page">
            <div id="svg" className="svg-container"></div>
            <div className="aside-header">
                <h1 className="name">Ullas Kakanadan</h1>
                <h3 className="designation">Senior Front End Developer</h3>
                <p><FontAwesomeIcon icon={faLocationDot} className="location-icon"/><span className="location-label">Kochi, Kerala, India</span></p>
                <Link to="/main"><Button variant="primary">Know more about this guy..</Button></Link>
            </div>
        </div>
    )
}