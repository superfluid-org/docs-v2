import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const FlowVisualization = ({ width = 800, height = 400 }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height);

        // Define positions
        const contractPos = { x: width / 4, y: height / 2 };
        const tokenPos = { x: width / 2, y: height / 2 };
        const recipients = Array.from({ length: 3 }, (_, i) => ({
            x: 3 * width / 4,
            y: ((i + 1) * height / 4),
        }));

        // Draw contract
        svg.append('rect')
            .attr('x', contractPos.x - 30)
            .attr('y', contractPos.y - 30)
            .attr('width', 60)
            .attr('height', 60)
            .attr('fill', 'orange');
        svg.append('text')
            .attr('x', contractPos.x)
            .attr('y', contractPos.y - 40)
            .attr('text-anchor', 'middle')
            .text('SuperfluidBoilerplate')
            .style('fill', 'grey');

        // Draw token
        svg.append('circle')
            .attr('cx', tokenPos.x)
            .attr('cy', tokenPos.y)
            .attr('r', 25)
            .attr('fill', 'green');
        svg.append('text')
            .attr('x', tokenPos.x)
            .attr('y', tokenPos.y - 35)
            .attr('text-anchor', 'middle')
            .text('Mock Super Token')
            .style('fill', 'grey');

        // Draw recipients
        recipients.forEach((pos, i) => {
            svg.append('circle')
                .attr('cx', pos.x)
                .attr('cy', pos.y)
                .attr('r', 20)
                .attr('fill', 'blue');
            svg.append('text')
                .attr('x', pos.x)
                .attr('y', pos.y - 30)
                .attr('text-anchor', 'middle')
                .text(`User ${i + 1}`)
                .style('fill', 'grey');
        });

        // Add deploy arrow
        const deployArrow = svg.append('line')
            .attr('x1', contractPos.x + 30)
            .attr('y1', contractPos.y)
            .attr('x2', tokenPos.x - 25)
            .attr('y2', tokenPos.y)
            .attr('stroke', 'grey')
            .attr('stroke-width', 2)
            .attr('marker-end', 'url(#arrowhead)');

        // Add deploy text
        svg.append('text')
            .attr('x', (contractPos.x + tokenPos.x) / 2)
            .attr('y', contractPos.y - 10)
            .attr('text-anchor', 'middle')
            .text('deployMockSuperToken()')
            .style('fill', 'grey');

        // Define arrowhead marker
        svg.append('defs').append('marker')
            .attr('id', 'arrowhead')
            .attr('viewBox', '-0 -5 10 10')
            .attr('refX', 5)
            .attr('refY', 0)
            .attr('orient', 'auto')
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .append('svg:path')
            .attr('d', 'M 0,-5 L 10,0 L 0,5')
            .attr('fill', 'grey');

        // Animate streams
        const animateStream = (target) => {
            const animateBall = () => {
                svg.append('circle')
                    .attr('r', 4)
                    .attr('fill', 'green')
                    .attr('cx', tokenPos.x)
                    .attr('cy', tokenPos.y)
                    .transition()
                    .duration(2000)
                    .ease(d3.easeLinear)
                    .attr('cx', target.x)
                    .attr('cy', target.y)
                    .on('end', function() {
                        d3.select(this).remove();
                        animateBall();
                    });
            };
            animateBall();
        };

        // Start streams to all recipients
        recipients.forEach(recipient => {
            animateStream(recipient);
        });
    }, []);

    return <svg ref={ref}></svg>;
};

export default FlowVisualization;
