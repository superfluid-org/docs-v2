import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useColorMode } from '@docusaurus/theme-common';
import './styles.css';

interface SupplyPieChartProps {
  width?: string | number;
  height?: string | number;
}

interface TooltipData {
  name: string;
  details: string[];
}

const SupplyPieChart: React.FC<SupplyPieChartProps> = ({ width = '100%', height = 400 }) => {
  const ref = useRef<SVGSVGElement>(null);
  const { colorMode } = useColorMode();
  const textColor = colorMode === 'dark' ? '#ffffff' : '#000000';

  useEffect(() => {
    if (!ref.current) return;

    const containerWidth = ref.current.parentElement?.clientWidth || 600;
    const containerHeight = typeof height === 'number' ? height : 400;
    const size = Math.min(containerWidth, containerHeight);
    
    // Update padding to be different for horizontal and vertical
    const horizontalPadding = size * 0.2;
    const verticalPadding = size * 0;
    const totalWidth = size + (horizontalPadding * 2);
    const totalHeight = size + (verticalPadding * 2);

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    
    // Update viewBox to use different dimensions
    svg
      .attr('viewBox', `0 0 ${totalWidth} ${totalHeight}`)
      .attr('width', totalWidth)
      .attr('height', totalHeight);

    const data = [
      { name: 'COMMUNITY', value: 60, color: '#D6FEAE' },
      { name: 'TEAM', value: 25, color: '#3F7E00' },
      { name: 'INVESTORS', value: 15, color: '#45A07D' }
    ];

    const radius = size / 2.2;
    const g = svg
      .append('g')
      .attr('transform', `translate(${totalWidth/2},${totalHeight/2})`);

    // Create gradient definitions
    const defs = svg.append('defs');
    data.forEach((d, i) => {
      const gradientColors = {
        'COMMUNITY': ['#D6FEAE', '#86ED1E'],
        'TEAM': ['#3F7E00', '#0E1903'],
        'INVESTORS': ['#45A07D', '#254506']
      }[d.name];

      const gradient = defs
        .append('linearGradient')
        .attr('id', `pieGradient-${i}`)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%');

      gradient
        .append('stop')
        .attr('offset', '5%')
        .attr('stop-color', gradientColors[0])
        .attr('stop-opacity', '1.0');

      gradient
        .append('stop')
        .attr('offset', '95%')
        .attr('stop-color', gradientColors[1])
        .attr('stop-opacity', '0.6');
    });

    const pie = d3.pie<any>()
      .value(d => d.value)
      .sort(null)
      .padAngle(0.02);

    const arc = d3.arc()
      .innerRadius(radius * 0.4)
      .outerRadius(radius * 0.8);

    const tooltipData: { [key: string]: TooltipData } = {
      'COMMUNITY': {
        name: 'Community (60%)',
        details: [
          'DAO Treasury: 35%',
          'Directly managed by the DAO',
          'Used for ecosystem development and growth initiatives',
          '--------------------------------',
          'Foundation Treasury: 25%',
          'Managed by the Superfluid Foundation',
          'Supports long-term protocol development'
        ]
      },
      'TEAM': {
        name: 'Team (~25%)',
        details: [
          'One-year cliff followed by two-year linear vesting'
        ]
      },
      'INVESTORS': {
        name: 'Investors (~15%)',
        details: [
          'One-year cliff followed by two-year linear vesting'
        ]
      }
    };

    // Create tooltip
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'pie-tooltip')
      .style('opacity', 0);

    // Add the arcs
    const path = g.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc as any)
      .attr('fill', (d, i) => `url(#pieGradient-${i})`)
      .attr('stroke', '#000000')
      .attr('stroke-width', '1px')
      .on('mouseover', function(event, d: any) {
        const tooltipContent = tooltipData[d.data.name];
        
        tooltip.transition()
          .duration(200)
          .style('opacity', .9);
        
        tooltip.html(`
          <strong>${tooltipContent.name}</strong><br/>
          ${tooltipContent.details.map(detail => `${detail}<br/>`).join('')}
        `)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 28) + 'px');

        // Highlight effect
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 0.7);
      })
      .on('mouseout', function() {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);

        // Remove highlight effect
        d3.select(this)
          .transition()
          .duration(200)
          .style('opacity', 1);
      });

    // Add labels with lines
    const labelArc = d3.arc()
      .innerRadius(radius * 0.85)
      .outerRadius(radius * 0.85);

    const labels = g.selectAll('text')
      .data(pie(data))
      .enter()
      .append('g');

    labels.append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', d => {
        const [x] = labelArc.centroid(d);
        return x > 0 ? 'start' : 'end';
      })
      .attr('fill', textColor)
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .text(d => `${d.data.name}\n${d.data.value}%`);

    // Cleanup function
    return () => {
      d3.selectAll('.pie-tooltip').remove();
    };

  }, [width, height, colorMode]);

  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: '0 auto' 
    }}>
      <svg 
        ref={ref} 
        style={{ background: 'transparent', maxWidth: '100%', maxHeight: '100%' }}
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
};

export default SupplyPieChart;
