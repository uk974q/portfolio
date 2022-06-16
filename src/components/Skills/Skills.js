import "./Skills.css"
import * as d3 from 'd3'
import React from "react"


export default function Skills(){
    
    // function initSVG(){

    function getRandomValue(min,max){
         return (Math.random()*(max - min) + min)
    }
        
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

        React.useEffect(function(){
            console.log("Hello",data)
            //   console.log(d3.select(".skill-container"))
            // debugger;
            let width = document.getElementsByClassName("skill-container")[0].clientWidth
            let height = 300
            const margin = [50, 60, 50, 100];
console.log("WD",width,height)
d3.select(".skill-container svg").remove();
let svg = d3
        .select(".skill-container")
        .append("svg")
        .attr("height", height)
        .attr("width", width);

let skills = Array.from(new Set(data.map((d) => d.source)));
let xScale = d3
    .scaleBand()
    .domain(["Single"])
    .range([width/2 , width/2 + 15]);

let yScale = d3
    .scaleLinear()
    .domain(d3.extent(data.map((d) => +d["val"])))
    .range([height/2, 100]);

let color = d3.scaleOrdinal().domain(skills).range(d3.schemePaired);

let rDomain = d3.extent(data.map((d) => +d["val"]));
let size = d3.scaleLinear().domain(rDomain).range([15, 40]);

svg.selectAll(".circ")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "circ")
    .attr("stroke", "black")
    .attr("fill", (d) => color(d.source))
    .attr("r", (d) => size(d["val"]))
    .attr("cx", (d) => xScale("Single"))
    .attr("cy", (d) => yScale(d.val));


let simulation = d3.forceSimulation(data)
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

  function tick() {
    d3.selectAll(".circ")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y);
    }

    // let init_decay = setTimeout(function () {
    //   console.log("start alpha decay");
    //   simulation.alphaDecay(0.1);
    //   }, 3000); // start decay after 3 seconds
            
        },[data.length])

    // }

    return (
        <div className="skill-container"></div>
    )

}