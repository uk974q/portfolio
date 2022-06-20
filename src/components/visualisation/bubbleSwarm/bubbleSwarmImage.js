
import * as d3 from 'd3'
import React from 'react';

export default function BubbleSwarmImage(){
    
    let width, height, margin, svg;
    let xScale, yScale, color, size; 

    const [data,setData]= React.useState([
        {source:"HTML", x1: 100, y1: 60, val: 10, color: "#C9D6DF"},
        {source:"Angular", x1: 30, y1: 80, val: 8, color: "#F7EECF"},
        {source:"CSS", x1: 80, y1: 170, val: 8, color: "#D1C2E0"},
        {source:"JavaScript", x1: 50, y1: 40, val: 9, color: "#E3E1B2"},
        {source:"TypeScript", x1: 190, y1: 100, val: 9, color: "#F9CAC8"},
        {source:"D3", x1: 80, y1: 170, val: 9, color: "#D1C2E0"},
        {source:"RestAPI", x1: 80, y1: 170, val: 7, color: "#D1C2E0"},
        {source:"SQL", x1: 80, y1: 170, val: 6, color: "#D1C2E0"},
        {source:"MySQL", x1: 80, y1: 170, val: 6, color: "#D1C2E0"},
        {source:"ES6", x1: 80, y1: 170, val: 9, color: "#D1C2E0"},
        {source:"SpringBoot", x1: 80, y1: 170, val: 4, color: "#D1C2E0"},
        {source:"Java", x1: 80, y1: 170, val: 4, color: "#D1C2E0"},
        {source:"Python", x1: 80, y1: 170, val: 4, color: "#D1C2E0"}
    ])

    React.useEffect(()=>{
        width = document.getElementById("svgBs").offsetWidth
        height = 300
        console.log("WH",width,height)
        // console.log(document.getElementById("svg").offsetWidth)
        createBubbleSwarmImage()
    })

    function createBubbleSwarmImage(){
        initGraph()
        initScale()
        initCircle()
        initSimulation()
    }

    function initGraph(){
        
        margin = [50, 60, 50, 100];
        d3.select(".svg-bs-container svg").remove();
        svg = d3
            .select(".svg-bs-container")
            .append("svg")
            .attr("height", height)
            .attr("width", width);
    }

    function initScale(){
        let skills = Array.from(new Set(data.map((d) => d.source)));
        xScale = d3
            .scaleBand()
            .domain(["Single"])
            .range([width/2 , width/2 + 15]);
        
        yScale = d3
            .scaleLinear()
            .domain(d3.extent(data.map((d) => +d["val"])))
            .range([height/2, 100]);
        
        color = d3.scaleOrdinal().domain(skills).range(d3.schemePaired);
        
        let rDomain = d3.extent(data.map((d) => +d["val"]));
        size = d3.scaleLinear().domain(rDomain).range([15, 40]);

    }

    function initCircle(){
        svg.selectAll(".circ-bs")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "circ-bs")
            .attr("stroke", "black")
            .attr("fill", (d) => color(d.source))
            .attr("r", (d) => size(d["val"]))
            .attr("cx", (d) => xScale("Single"))
            .attr("cy", (d) => yScale(d.val))
            .on("mouseover",function(event,d){
                console.log(d)
                showTooltip(d.source, d.x, d.y, size(d["val"]))
                d3.selectAll(".circ").attr("opacity",0.2)
                d3.select(this).attr("opacity",1)
                // document.getElementById("skillLabel").innerHTML = d.source
            })
            .on("mouseout",function(){
                removeTooltip()
                d3.selectAll(".circ").attr("opacity",1)
                // document.getElementById("skillLabel").innerHTML = ""
            })
    }
            
    function showTooltip(content,x,y, r){
        let tx = (+x) + (+r) + (+r)
        let ty = y
        svg.append("text")
            .attr("class","tt skillLabel")
            .attr("x",tx)
            .attr("y",ty)
            .attr('fill', 'white')
            .text(content)
    }
    function removeTooltip(){
        d3.selectAll(".tt").remove()
    }
            
    function initSimulation(){
        d3.forceSimulation(data)
            .force("x", d3.forceX((d) => {
                return xScale("Single");
                }).strength(0.2))
            
            .force("y", d3.forceY((d) => {
                return yScale(d.val);
                }).strength(1))
            
            .force("collide", d3.forceCollide((d) => {
                return size(d["val"]);
                }))    
            // .alphaDecay(0)
            // .alpha(0.6)
            .on("tick", tick);
    }

    function tick() {
      d3.selectAll(".circ-bs")
          .attr("cx", (d) => d.x)
          .attr("cy", (d) => d.y);
    }           
    
    return(
        <div id="svgBs" className="svg-bs-container"></div>
    )
}