import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 2000;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.country))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.intensity)])
      .nice()
      .range([innerHeight, 0]);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("transform", "rotate(-45)");

    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.country) + margin.left)
      .attr("y", (d) => yScale(d.intensity))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.intensity))
      .on("mouseover", (event, d) => {
        const tooltip = d3.select("#tooltip");
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(`Country: ${d.country}<br>Intensity: ${d.intensity}`)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", () => {
        const tooltip = d3.select("#tooltip");
        tooltip.transition().duration(500).style("opacity", 0);
      });
  }, [data]);

  return (
    <div className="container mx-auto px-15">
      <div className="p-5 rounded-xl border border-black overflow-x-auto">
        <svg ref={svgRef}></svg>
        <div id="tooltip" className="tooltip"></div>
      </div>
    </div>
  );
};

export default BarChart;
