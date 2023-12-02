import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FlowVisualization = ({ width = 800, height = 400 }) => {
    const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    // Define positions
    const userPos = { x: 100, y: height / 2 };
    const flowSenderPos = { x: width / 4, y: height / 2 };
    const fDAIxPos = { x: 2 * width / 4, y: height / 2 };
    const secondUserPos = { x: 3 * width / 4, y: height / 2 };
    const recipients = Array.from({ length: 5 }, (_, i) => ({
      x: width - 50,
      y: (i + 1) * height / 6,
    }));

    // Draw elements
    svg.append('circle').attr('cx', userPos.x).attr('cy', userPos.y).attr('r', 20).attr('fill', 'blue');
    svg.append('text').attr('x', userPos.x).attr('y', userPos.y).attr('text-anchor', 'middle').attr('dy', -30).text('User').style('fill', 'white');

    svg.append('circle').attr('cx', secondUserPos.x).attr('cy', userPos.y).attr('r', 20).attr('fill', 'orange');
    svg.append('text').attr('x', secondUserPos.x).attr('y', userPos.y).attr('text-anchor', 'middle').attr('dy', -30).text('FlowSender Contract').style('fill', 'white');
    
    svg.append('rect').attr('x', flowSenderPos.x - 30).attr('y', flowSenderPos.y - 30).attr('width', 60).attr('height', 60).attr('fill', 'orange');
    svg.append('text').attr('x', flowSenderPos.x).attr('y', flowSenderPos.y).attr('text-anchor', 'middle').attr('dy', -30).text('FlowSender').style('fill', 'white');

    svg.append('rect').attr('x', fDAIxPos.x - 30).attr('y', fDAIxPos.y - 30).attr('width', 60).attr('height', 60).attr('fill', 'green');
    svg.append('text').attr('x', fDAIxPos.x).attr('y', fDAIxPos.y).attr('text-anchor', 'middle').attr('dy', -30).text('fDAIx').style('fill', 'white');

    recipients.forEach((recipient, i) => {
      svg.append('circle').attr('cx', recipient.x).attr('cy', recipient.y).attr('r', 15).attr('fill', 'red');
      svg.append('text').attr('x', recipient.x).attr('y', recipient.y).attr('text-anchor', 'middle').attr('dy', -20).text(`Receiver ${i + 1}`).style('fill', 'white');
    });

    // Function to draw static arrow with label
    const drawArrow = (source, target, label) => {
        const deltaX = target.x - source.x;
        const deltaY = target.y - source.y;
        const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const arrowLength = dist - 30; // Shorten to not overlap with the circles
  
        const line = svg.append('line')
          .attr('x1', source.x)
          .attr('y1', source.y)
          .attr('x2', source.x + arrowLength)
          .attr('y2', source.y)
          .attr('stroke', 'white')
          .attr('stroke-width', 2)
          .attr('marker-end', 'url(#arrowhead)');
  
        svg.append('text')
          .attr('x', source.x + arrowLength / 2)
          .attr('y', source.y - 10)
          .text(label)
            .style('fill', 'white')
          .attr('text-anchor', 'middle');
      };
  
      // Define arrowhead marker
      svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '-0 -5 10 10')
        .attr('refX', 5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', 'white');
  
      // Draw static arrows with labels
      drawArrow(userPos, flowSenderPos, 'Tx');
      drawArrow(flowSenderPos, fDAIxPos, 'Tx createFlow');
      drawArrow(fDAIxPos, secondUserPos, 'Creates flow');
  
      // Function to animate moving balls endlessly
      const animateEndlessStream = (source, target, color = 'black') => {
        const animateBall = () => {
          svg.append('circle')
            .attr('r', 5)
            .attr('fill', color)
            .attr('cx', source.x)
            .attr('cy', source.y)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr('cx', target.x)
            .attr('cy', target.y)
            .on('end', function() {
              d3.select(this).remove(); // Remove ball after it reaches the target
              animateBall(); // Start again to make it endless
            });
        };
        animateBall(); // Start the endless animation
      };
  
      // Animate endless streams from the user to recipients
      recipients.forEach(recipient => {
        animateEndlessStream(secondUserPos, recipient, 'green');
      });
    }, []);
  
  return <svg ref={ref}></svg>;
};

export default FlowVisualization;
