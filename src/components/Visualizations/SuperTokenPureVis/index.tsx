import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const TokenPure = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 800;
    const height = 450;
    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height).style('border', '1px solid black');

    // Data for the "Pure Super Token"
    const data = [{
      name: "Pure Super Token",
      x: width / 2,
      y: height / 2,
      radius: 90,
      color: "blue"
    }];

    // Add static text at the top
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Click as quickly as possible on the Pure Super Token to create your first stream!");

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

    // Initialize the circle
    const circle = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', d => d.radius)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('fill', d => d.color)
      .on('click', emitParticle); // Emit one particle on each click

    // Initialize the text for the circle
    svg.selectAll('.circleText')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'circleText')
      .attr('x', d => d.x)
      .attr('y', d => d.y + 5)
      .attr('text-anchor', 'middle')
      .style('fill', 'white')
      .style('font-size', '16px')
      .text(d => d.name);

    // Function to create and animate a single particle
    function emitParticle() {
      const superToken = data[0];

      const particle = svg.append('circle')
        .attr('class', 'particle')
        .attr('r', 5)
        .attr('cx', superToken.x + superToken.radius)
        .attr('cy', superToken.y)
        .attr('fill', 'gold');

      particle.transition()
        .duration(2000)
        .attr('cx', superToken.x + Math.random() * 100 + 500)
        .attr('cy', superToken.y + Math.random() * 100)
        .on('end', function() { d3.select(this).remove(); });
    }

  }, []);

  return <svg ref={svgRef}></svg>;
};

export default TokenPure;
