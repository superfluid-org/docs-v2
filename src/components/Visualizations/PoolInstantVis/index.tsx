import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SuperfluidPoolVisualization = ({ width = 800, height = 600 }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height);

        const poolCenter = { x: width / 2, y: height / 2 };
        const poolRadius = 50;
        const memberCount = 5;
        const memberRadius = 15;
        const streamPathLength = 200;
        const unitFlowSpeed = 2000;
        const adminPosition = { x: poolCenter.x - 250, y: poolCenter.y };

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
            .style('fill', "white");

        // Create pool admin with label
        const poolAdmin = svg.append('circle')
            .attr('cx', adminPosition.x)
            .attr('cy', adminPosition.y)
            .attr('r', memberRadius)
            .attr('fill', 'blue')
            .on('click', () => emitParticleToPool()); // Click event to start the stream

        svg.append('text')
            .attr('x', adminPosition.x)
            .attr('y', adminPosition.y - memberRadius - 5)
            .attr('text-anchor', 'middle')
            .text('Click to distribute a token')
            .style('fill', "white");

        // Function to emit a particle to the pool
        function emitParticleToPool() {
            const particle = svg.append('circle')
                .attr('r', 5)
                .attr('fill', 'gold')
                .attr('cx', adminPosition.x)
                .attr('cy', adminPosition.y);

            particle.transition()
                .duration(unitFlowSpeed)
                .attr('cx', poolCenter.x)
                .attr('cy', poolCenter.y)
                .on('end', () => {
                    particle.remove();
                    distributeParticlesFromPool();
                });
        }

        // Function to distribute particles from the pool to members
        function distributeParticlesFromPool() {
            const angleStep = (2 * Math.PI) / memberCount;
            for (let i = 0; i < memberCount; i++) {
                const angle = angleStep * i;
                const memberX = poolCenter.x + Math.cos(angle) * streamPathLength;
                const memberY = poolCenter.y + Math.sin(angle) * streamPathLength;
                emitParticleToMember(memberX, memberY);
            }
        }

        // Function to emit a particle to a member
        function emitParticleToMember(x, y) {
            const particle = svg.append('circle')
                .attr('r', 5)
                .attr('fill', 'gold')
                .attr('cx', poolCenter.x)
                .attr('cy', poolCenter.y);

            particle.transition()
                .duration(unitFlowSpeed)
                .attr('cx', x)
                .attr('cy', y)
                .on('end', () => particle.remove());
        }

        // Generate members
        const angleStep = (2 * Math.PI) / memberCount;
        for (let i = 0; i < memberCount; i++) {
            const angle = angleStep * i;
            const memberX = poolCenter.x + Math.cos(angle) * streamPathLength;
            const memberY = poolCenter.y + Math.sin(angle) * streamPathLength;

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
                .style('fill', "white");
        }
    }, []);

    return <svg ref={ref}></svg>;
};

export default SuperfluidPoolVisualization;
