import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const SuperfluidStakingDiagram = () => {
  const svgRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      const containerWidth = svgRef.current.parentElement.clientWidth;
      setDimensions({
        width: containerWidth,
        height: containerWidth * 0.75, // Maintain a 4:3 aspect ratio
      });
    };

    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear previous content

      const { width, height } = dimensions;

      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height]);

      // Define components
      const components = [
        { name: "User", x: width * 0.1, y: height * 0.3 },
        { name: "Staking Contract", x: width * 0.5, y: height * 0.3 },
        { name: "Superfluid Pool", x: width * 0.9, y: height * 0.3 },
        { name: "Claim Contract", x: width * 0.5, y: height * 0.7 },
      ];

      // Draw components
      svg.selectAll("rect")
        .data(components)
        .enter()
        .append("rect")
        .attr("x", d => d.x - width * 0.08)
        .attr("y", d => d.y - height * 0.05)
        .attr("width", width * 0.16)
        .attr("height", height * 0.1)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#f0f0f0")
        .attr("stroke", "#333")
        .attr("stroke-width", 2);

      svg.selectAll(".component-text")
        .data(components)
        .enter()
        .append("text")
        .attr("class", "component-text")
        .attr("x", d => d.x)
        .attr("y", d => d.y + 5)
        .attr("text-anchor", "middle")
        .text(d => d.name)
        .attr("font-family", "Arial")
        .attr("font-size", `${width * 0.018}px`)
        .attr("fill", "#333");

      // Define flows
      const flows = [
        { from: "User", to: "Staking Contract", label: "1. Stake Tokens", color: "#4CAF50" },
        { from: "Staking Contract", to: "Superfluid Pool", label: "2. Update Units", color: "#2196F3" },
        { from: "Superfluid Pool", to: "Claim Contract", label: "3. Stream Rewards", color: "#FFC107" },
        { from: "Claim Contract", to: "User", label: "4. Claim Rewards", color: "#FF5722" },
      ];

      // Create token flow paths
      flows.forEach((flow, index) => {
        const fromComponent = components.find(c => c.name === flow.from);
        const toComponent = components.find(c => c.name === flow.to);

        let startX, startY, endX, endY, controlX, controlY;

        if (flow.from === "User" && flow.to === "Staking Contract") {
          startX = fromComponent.x + width * 0.08;
          startY = fromComponent.y;
          endX = toComponent.x - width * 0.08;
          endY = toComponent.y;
          controlX = (startX + endX) / 2;
          controlY = startY - height * 0.1;
        } else if (flow.from === "Staking Contract" && flow.to === "Superfluid Pool") {
          startX = fromComponent.x + width * 0.08;
          startY = fromComponent.y;
          endX = toComponent.x - width * 0.08;
          endY = toComponent.y;
          controlX = (startX + endX) / 2;
          controlY = startY - height * 0.1;
        } else if (flow.from === "Superfluid Pool" && flow.to === "Claim Contract") {
          startX = fromComponent.x;
          startY = fromComponent.y + height * 0.05;
          endX = toComponent.x + width * 0.08;
          endY = toComponent.y - height * 0.05;
          controlX = startX;
          controlY = (startY + endY) / 2;
        } else {
          // Claim Contract to User (red line)
          startX = fromComponent.x - width * 0.08;
          startY = fromComponent.y;
          endX = toComponent.x;
          endY = toComponent.y + height * 0.05; // Connect to bottom of User box
          controlX = (startX + endX) / 2;
          controlY = startY + height * 0.2;
        }

        const pathData = `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;

        const path = svg.append("path")
          .attr("d", pathData)
          .attr("fill", "none")
          .attr("stroke", flow.color)
          .attr("stroke-width", width * 0.003);

        // Animate flowing tokens
        const pathLength = path.node().getTotalLength();

        function animateTokens() {
          const tokens = d3.range(5).map(() => ({
            offset: Math.random() * pathLength,
            speed: (0.1 + Math.random() * 0.15) * (width / 800)
          }));

          svg.selectAll(`.token-${index}`)
            .data(tokens)
            .join("circle")
            .attr("class", `token-${index}`)
            .attr("r", width * 0.005)
            .attr("fill", flow.color)
            .attr("opacity", 0.8);

          function updateTokens() {
            svg.selectAll(`.token-${index}`)
              .attr("transform", d => {
                d.offset = (d.offset + d.speed) % pathLength;
                const point = path.node().getPointAtLength(d.offset);
                return `translate(${point.x}, ${point.y})`;
              });
          }

          d3.timer(updateTokens);
        }

        animateTokens();

        // Add flow labels
        svg.append("text")
          .attr("x", controlX)
          .attr("y", controlY)
          .attr("text-anchor", "middle")
          .text(flow.label)
          .attr("font-family", "Arial")
          .attr("font-size", `${width * 0.016}px`)
          .attr("fill", "#666");
      });
    }
  }, [dimensions]);

  return (
    <div className="diagram-container" style={{ width: '100%' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SuperfluidStakingDiagram;