import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChartVisualization = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      const data = [
        { account: 'Account A - 3 units', units: 3 },
        { account: 'Account B - 3 units', units: 3 },
        { account: 'Account C - 4 units', units: 4 },
      ];

      const width = 600;
      const height = 200;
      const radius = Math.min(width, height) / 2;
      
      const color = d3.scaleOrdinal()
        .domain(data.map(d => d.account))
        .range(d3.schemeCategory10);

      const pie = d3.pie()
        .value(d => d.units);

      const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

      const svg = d3.select(d3Container.current)
        .attr('width', width)
        .attr('height', height)
        .append('g')
          .attr('transform', `translate(${width / 2}, ${height / 2})`);

      svg.selectAll('path')
        .data(pie(data))
        .enter()
        .append('path')
          .attr('d', arc)
          .attr('fill', d => color(d.data.account));

      // Legend
      const legend = svg.selectAll('.legend')
        .data(color.domain())
        .enter().append('g')
          .attr('class', 'legend')
          .attr('transform', function(d, i) {
            const height = 18;
            const offset = height * color.domain().length / 2;
            const horz = -300;
            const vert = i * height - offset;
            return `translate(${horz}, ${vert})`;
          });

      legend.append('rect')
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', color);

      legend.append('text')
        .attr('x', 24)
        .attr('y', 15)
        .text(d => d)
        .style('fill', color);
    }
  }, []);

  return (
    <svg
      className="d3-component"
      ref={d3Container}
    />
  );
};

export default PieChartVisualization;
