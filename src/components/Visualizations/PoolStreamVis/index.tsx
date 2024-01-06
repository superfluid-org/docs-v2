import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SuperfluidPoolVisualization = ({ width = 800, height = 600 }) => {
    const ref = useRef();

    useEffect(() => {
      const color = getComputedStyle(document.body).getPropertyValue('--ifm-color-text');
      const svg = d3.select(ref.current)
        .attr('width', width)
        .attr('height', height);
  
      const poolCenter = { x: width / 2, y: height / 2 };
      const poolRadius = 50;
      const memberCount = 5;
      const memberRadius = 15;
      const streamPathLength = 200;
      const unitFlowSpeed = 700; // Increased speed of unit flow
      const adminPosition = { x: poolCenter.x - 250, y: poolCenter.y }; // Position of the pool admin
  
      // Create pool with label
      svg.append('circle')
        .attr('cx', poolCenter.x)
        .attr('cy', poolCenter.y)
        .attr('r', poolRadius)
        .attr('fill', 'green');
  
      svg.append('text')
        .attr('x', poolCenter.x)
        .attr('y', poolCenter.y)
        .attr('text-anchor', 'middle')
        .attr('dy', '0.3em')
        .text('Distribution Pool')
        .style('fill', color);
  
      // Create pool admin with label
      svg.append('circle')
        .attr('cx', adminPosition.x)
        .attr('cy', adminPosition.y)
        .attr('r', memberRadius)
        .attr('fill', 'blue');
  
      svg.append('text')
        .attr('x', adminPosition.x)
        .attr('y', adminPosition.y - memberRadius - 5)
        .attr('text-anchor', 'middle')
        .text('Pool Streamer')
        .style('fill', color);
  
      // Create stream from admin to pool
      const adminPath = svg.append('path')
        .attr('d', `M ${adminPosition.x} ${adminPosition.y} L ${poolCenter.x} ${poolCenter.y}`)
        .attr('id', 'admin-path')
        .attr('fill', 'none')
        .attr('stroke', 'none');
  
      // Create moving units from admin to pool
      for (let j = 0; j < 20; j++) {
        svg.append('circle')
          .attr('r', 5)
          .attr('fill', 'gold')
          .transition()
          .duration(unitFlowSpeed)
          .ease(d3.easeLinear)
          .attrTween('transform', () => {
            return (t) => {
              const p = adminPath.node().getPointAtLength(t * adminPath.node().getTotalLength());
              return `translate(${p.x}, ${p.y})`;
            };
          })
          .on('end', function repeat() {
            d3.select(this)
              .transition()
              .duration(unitFlowSpeed)
              .ease(d3.easeLinear)
              .attrTween('transform', () => {
                return (t) => {
                  const p = adminPath.node().getPointAtLength(t * adminPath.node().getTotalLength());
                  return `translate(${p.x}, ${p.y})`;
                };
              })
              .on('end', repeat);
          });
      }

    // Generate members and their paths
    const angleStep = (2 * Math.PI) / memberCount;
    for (let i = 0; i < memberCount; i++) {
      const angle = angleStep * i;
      const memberX = poolCenter.x + Math.cos(angle) * streamPathLength;
      const memberY = poolCenter.y + Math.sin(angle) * streamPathLength;

      // Create member with label
      svg.append('circle')
        .attr('cx', memberX)
        .attr('cy', memberY)
        .attr('r', memberRadius)
        .attr('fill', 'orange');

      svg.append('text')
        .attr('x', memberX)
        .attr('y', memberY - memberRadius - 5)
        .attr('text-anchor', 'middle')
        .text(`Member ${String.fromCharCode(65 + i)}`)
        .style('fill', color);;

      // Create stream path
      const path = svg.append('path')
        .attr('d', `M ${poolCenter.x} ${poolCenter.y} L ${memberX} ${memberY}`)
        .attr('id', `stream-path-${i}`)
        .attr('fill', 'none')
        .attr('stroke', 'none');

      // Create moving units along the path
      const unitCount = 20; // Number of units to display
      for (let j = 0; j < unitCount; j++) {
        svg.append('circle')
          .attr('r', 5)
          .attr('fill', 'gold')
          .transition()
          .duration(unitFlowSpeed)
          .ease(d3.easeLinear)
          .attrTween('transform', () => {
            return (t) => {
              const p = path.node().getPointAtLength(t * path.node().getTotalLength());
              return `translate(${p.x}, ${p.y})`;
            };
          })
          .on('end', function repeat() {
            d3.select(this)
              .transition()
              .duration(unitFlowSpeed)
              .ease(d3.easeLinear)
              .attrTween('transform', () => {
                return (t) => {
                  const p = path.node().getPointAtLength(t * path.node().getTotalLength());
                  return `translate(${p.x}, ${p.y})`;
                };
              })
              .on('end', repeat);
          });
      }
    }
  }, []);

  return <svg ref={ref}></svg>;
};

export default SuperfluidPoolVisualization;
