
import * as d3 from 'd3'
import React from 'react';

export default function BubbleArcImage(props){
    let images = props.images

    let width, height, radius, svg, defs, pie, pieData;
    React.useEffect(()=>{
        width = document.getElementById("svg").offsetWidth
        height = document.getElementById("svg").offsetHeight
        // console.log(document.getElementById("svg").offsetWidth)
        createBubbleArcImageChart()
    })
    function createBubbleArcImageChart(){
        initGraph()
        initDefs()
        initCircle()
        initArc()
        incrementalArcs()
    }
    function initGraph(){
        d3.select(".svg-container svg").remove();
        radius = height/4
        svg = d3
            .select(".svg-container")
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", `0 0 ${width} ${height}`)
    }

    function initDefs(){
        defs = svg.append('defs')
            .append('pattern')
            .attr("id","img1")
            .attr("patternContentUnits","objectBoundingBox")
            .attr("width","100%")
            .attr("height","100%")
            .append("image")
            .attr("class","bubble-image")
            .attr("href",images.default)
            .attr("preserveAspectRatio", "xMidYMid meet")
            .attr("height","1")
    }

    function initCircle(){
        svg.append("circle")
            .attr("class", "circle prof-circle cursor-pointer")
            .attr("stroke", "black")
            .attr("fill", "url(#img1)")
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
                // console.log(d3.select(this))
                if(d3.select("circle.prof-circle").attr("clicked") == "true"){
                    d3.select("circle.prof-circle").attr("clicked",false)
                    d3.select(".bubble-image").attr("href",images.default)    
                    document.getElementById("original-header").classList.remove("d-none")
                    document.getElementById("flip-header").classList.add("d-none")
                }
                else{
                    d3.select("circle.prof-circle").attr("clicked",true)
                    d3.select(".bubble-image").attr("href",images.flipped)
                    document.getElementById("original-header").classList.add("d-none")
                    document.getElementById("flip-header").classList.remove("d-none")
                }
            })
    }

    function initArc(){
        let arc = d3.arc().outerRadius(radius+5).innerRadius(radius).cornerRadius(0)
        pie = d3.pie()
        pieData = [{value:70},{value:20}, {value:50}]
        
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
        .attr("fill","#03045e")
    }

    function incrementalArcs(){
        let arc;
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
                .attr("fill","#03045e")
                .attr("opacity",0.5)

                gpath.transition().duration(3000)
                    .attr("fill","#0077b6")
                    .attrTween('d',function(d){
                        let i = d3.interpolate(d.startAngle + 0.1, d.endAngle)
                        return function(t){
                            d.endAngle = i(t)
                            return arc(d)
                        }
                    })
        }
    }

    return(
        <div id="svg" className="svg-container"></div>
    )
}