import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import logo from "./logo.svg";
const TokenWrapper = () => {
  const svgRef = useRef();
  const [isSuper, setIsSuper] = useState(false); // State to track if the token is super

  useEffect(() => {
    const width = 800;
    const height = 450;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    // Add static text at the top
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "28px")
      .style("font-weight", "bold")
      .text("Drag the tokens together to create a SUPER TOKEN!");

    // Append the provided SVG path to the SVG
    svg
      .append("path")
      .attr(
        "d",
        "M24.887 19.0167H19.0182V13.148H13.1493V7.27902H24.887V19.0167ZM7.27988 24.8879H13.1486V19.0191H7.27988V24.8879ZM0 3.51549V28.6511C0 30.5924 1.57387 32.1665 3.51549 32.1665H28.6511C30.5927 32.1665 32.1665 30.5924 32.1665 28.6511V3.51549C32.1665 1.57387 30.5927 0 28.6511 0H3.51549C1.57387 0 0 1.57387 0 3.51549V3.51549Z"
      )
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .attr("fill", "white");

    // Position the path element
    // Adjust these values as needed to position your logo
    svg.select("path").attr("transform", "translate(10, 400) scale(1)");

    svg
      .append("path")
      .attr(
        "d",
        "M24.887 19.0167H19.0182V13.148H13.1493V7.27902H24.887V19.0167ZM7.27988 24.8879H13.1486V19.0191H7.27988V24.8879ZM0 3.51549V28.6511C0 30.5924 1.57387 32.1665 3.51549 32.1665H28.6511C30.5927 32.1665 32.1665 30.5924 32.1665 28.6511V3.51549C32.1665 1.57387 30.5927 0 28.6511 0H3.51549C1.57387 0 0 1.57387 0 3.51549V3.51549Z"
      )
      .attr("fill-rule", "evenodd")
      .attr("clip-rule", "evenodd")
      .attr("fill", "white");

    // Position the path element
    // Adjust these values as needed to position your logo
    svg.select("path").attr("transform", "translate(760, 0) scale(1)");

    // Initialize the data for the small and big ball
    let data = [
      {
        name: "Your Token",
        x: width / 4,
        y: height / 2,
        radius: 40,
        color: "green",
      },
      {
        name: "Wrapper Super Token",
        x: (3 * width) / 4,
        y: height / 2,
        radius: 90,
        color: "blue",
      },
    ];

    // Initialize the circles
    let circles = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius)
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("fill", (d) => d.color);

    // Initialize the text for the circles
    let circleTexts = svg
      .selectAll(".circleText")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "circleText")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y + 5) // Adjust based on circle radius
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "16px")
      .text((d) => d.name);

    // Add dynamic text at the bottom
    const statusText = svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 30)
      .attr("text-anchor", "middle")
      .style("fill", "pink")
      .style("font-size", "30px")
      .text("Your token is normal");

    // Drag events
    const dragHandler = d3
      .drag()
      .on("start", dragstart)
      .on("drag", dragging)
      .on("end", dragend);

    dragHandler(circles);

    // Drag functions
    function dragstart(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragging(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragend(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      checkIfWrapped(d);
    }

    // Force simulation
    const simulation = d3
      .forceSimulation(data)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => d.radius)
      )
      .on("tick", ticked);

    function ticked() {
      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      circleTexts.attr("x", (d) => d.x).attr("y", (d) => d.y + 5); // Adjust based on circle radius

      // Update the status text based on token proximity
      updateStatusText();
    }

    // Check if the small ball is inside the big ball
    function checkIfWrapped(d) {
      updateStatusText();
    }

    // Function to create and animate particles
    function createParticles() {
      const wrapperToken = data.find((d) => d.name === "Wrapper Super Token");
    
      function emitParticle() {
        const particle = svg.append("circle")
          .attr("class", "particle")
          .attr("r", 2) // Small radius for particles
          .attr("cx", wrapperToken.x+wrapperToken.radius) // Start position
          .attr("cy", wrapperToken.y)
          .attr("fill", "gold");
    
        particle.transition()
          .duration(2000)
          .attr("cx", wrapperToken.x + Math.random() * 100 + 50) // Controlled end position
          .attr("cy", wrapperToken.y + Math.random() * 100 + 50)
          .on("end", function() { d3.select(this).remove(); }); // Remove particle after animation
    
        // Recursive call to emit another particle
        setTimeout(emitParticle, 200); // Adjust delay for continuous stream
      }
    
      emitParticle(); // Start emitting particles
    }
    

    // Function to remove particles
    function removeParticles() {
      svg.selectAll(".particle").remove();
    }


    function updateStatusText() {
      const originalToken = data.find((d) => d.name === "Your Token");
      const wrapperToken = data.find((d) => d.name === "Wrapper Super Token");
      const distance = Math.sqrt(
        (originalToken.x - wrapperToken.x) ** 2 +
          (originalToken.y - wrapperToken.y) ** 2
      );
      if (distance < wrapperToken.radius + originalToken.radius) {
        statusText.style("fill", "yellow").text("Your token is SUPER!");
        setIsSuper(true);
        createParticles();
      } else {
        statusText.style("fill", "pink").text("Your token is normal - drag it to give it superpowers!");
        setIsSuper(false);
        removeParticles();
      }
    }
  }, []);

  return <svg ref={svgRef} />;
};

export default TokenWrapper;