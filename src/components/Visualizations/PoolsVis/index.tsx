import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const CircularBarplot = () => {
  const data = [
    { name: 'Member A', units: 10 },
    { name: 'Member B', units: 15 },
    { name: 'Member C', units: 20 },
    { name: 'Member D', units: 18 },
    { name: 'Member E', units: 20 },
    // Add more members as needed
  ];
  const ref = useRef();

  useEffect(() => {
    if (data && data.length) {
      const svg = d3.select(ref.current),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        innerRadius = 100,
        outerRadius = Math.min(width, height) / 2 - 30,
        g = svg
          .append("g")
          .attr("transform", `translate(${width / 2},${height / 2})`);

      const x = d3
        .scaleBand()
        .range([0, 2 * Math.PI])
        .align(0);

      const y = d3.scaleRadial().range([innerRadius, outerRadius]);

      const z = d3
        .scaleOrdinal()
        .range([
          "#98abc5",
          "#8a89a6",
          "#7b6888",
          "#6b486b",
          "#a05d56",
          "#d0743c",
          "#ff8c00",
        ]);

      x.domain(data.map((d) => d.name));
      y.domain([0, d3.max(data, (d) => d.units)]);
      z.domain(data.map((d) => d.name));

      g.append("g")
        .selectAll("path")
        .data(data)
        .enter()
        .append("path")
        .attr("fill", (d) => z(d.name))
        .attr(
          "d",
          d3
            .arc()
            .innerRadius((d) => y(0))
            .outerRadius((d) => y(d.units))
            .startAngle((d) => x(d.name))
            .endAngle((d) => x(d.name) + x.bandwidth())
            .padAngle(0.01)
            .padRadius(innerRadius)
        );

      // Add labels (Optional)
      g.append("g")
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("text-anchor", "middle")
        .attr(
          "transform",
          (d) =>
            `rotate(${
              ((x(d.name) + x.bandwidth() / 2) * 180) / Math.PI - 90
            })translate(${outerRadius + 20},0)`
        )
        .append("text")
        .attr("transform", (d) =>
          (x(d.name) + x.bandwidth() / 2 + Math.PI / 2+100) % (2 * Math.PI) <
          Math.PI
            ? "rotate(90)translate(0,16)"
            : "rotate(-90)translate(0,-9)"
        )
        .text((d) => d.name+" has "+d.units+" units")

        .style('fill', "white");
    }
  }, [data]);

  return (
    <svg ref={ref} width="500" height="500" className="circular-barplot"></svg>
  );
};

export default CircularBarplot;
