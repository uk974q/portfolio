import * as d3 from 'd3'
import React from 'react';


export default function NetworkDiagram(){
    
    let width, height, margin, svg, link, node, simulation;

    let data = {
        "nodes": [
          {
            "id": 1,
            "name": "A"
          },
          {
            "id": 2,
            "name": "B"
          },
          {
            "id": 3,
            "name": "C"
          },
          {
            "id": 4,
            "name": "D"
          },
          {
            "id": 5,
            "name": "E"
          },
          {
            "id": 6,
            "name": "F"
          },
          {
            "id": 7,
            "name": "G"
          },
          {
            "id": 8,
            "name": "H"
          },
          {
            "id": 9,
            "name": "I"
          },
          {
            "id": 10,
            "name": "J"
          }
        ],
        "links": [
      
          {
            "source": 1,
            "target": 2
          },
          {
            "source": 1,
            "target": 5
          },
          {
            "source": 1,
            "target": 6
          },
      
          {
            "source": 2,
            "target": 3
          },
                  {
            "source": 2,
            "target": 7
          }
          ,
      
          {
            "source": 3,
            "target": 4
          },
           {
            "source": 8,
            "target": 3
          }
          ,
          {
            "source": 4,
            "target": 5
          }
          ,
      
          {
            "source": 4,
            "target": 9
          },
          {
            "source": 5,
            "target": 10
          }
        ]
    }


    React.useEffect(()=>{
        margin ={left: 150, right:150}
        width = document.querySelector(".display").offsetWidth
        height = document.querySelector(".display").offsetHeight
        console.log("WH",width,height)
        // console.log(document.getElementById("svg").offsetWidth)
        createNetworkDiagram()
    })

    function createNetworkDiagram(){
        initGraph()
        initSimulation()
        initLinks()
        initNodes()
    }
    function initGraph(){
        d3.select(".svg-nd-container svg").remove();
        svg = d3.select(".svg-nd-container")
        .append("svg")
        .attr("height", height)
        .attr("width", width);
    }

    function initLinks(){
        link = svg.selectAll("line")
            .data(data.links)
            .enter()
            .append("line")
            .style("stroke","black")
    }

    function initNodes(){
        node = svg.selectAll("circle")
            .data(data.nodes)
            .enter()
            .append("circle")
            .attr("r",20)
            .style("fill","red")
            .call(drag(simulation));

    }

    function initSimulation(){
        simulation = d3.forceSimulation(data.nodes)
        .force("link",d3.forceLink(data.links).id(function(d) { return d.id; })
        )
        .force("charge",d3.forceManyBody().strength(-400))
        .force("center",d3.forceCenter(width/2, height/2))
        .on("tick",ticked)
    }

    function ticked(){
        link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function (d) { return d.x+6; })
            .attr("cy", function(d) { return d.y-6; });
    }


    function drag(simulation) {    
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }
        
        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }
        
        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }
        
        return d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended);
      }
    
    
    return(
            <div id="svgNetwork" className="svg-nd-container"></div>
    )
}