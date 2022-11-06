import * as d3 from 'd3';

/**
 * <p>Draws force-directed graph.</p>
 *
 * Pass nodes and links to *data* attribute.
 *
 * Node must have an id, and optionally group.
 * Link must have source, target, and optionally value or category
 * Group and Category impacts color, value impacts thickness
 * @example
 * {
 * "nodes": [
 *  {"id": "Myriel", "group": 1},
 *  {"id": "Napoleon", "group": 1},
 *  {"id": "Mlle.Baptistine", "group": 1},
 *  {"id": "Mme.Magloire", "group": 1}
 * ],
 * "links": [
 *  {"source": "Napoleon", "target": "Myriel", "value": 1},
 *  {"source": "Mlle.Baptistine", "target": "Myriel", "value": 8},
 *  {"source": "Mme.Magloire", "target": "Myriel", "value": 10},
 *  {"source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6}
 *  ]
 * }
 * }
 * @description Read more here:
 * {@link https://medium.com/@interpolack/d3-4-0-force-layouts-7d814345c796}
 * {@link https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/}
 * {@link https://observablehq.com/@d3/force-directed-graph?collection=@d3/d3-force}
 *
 * @param graphData nodes and links
 * @param width canvas width
 * @param height canvas height
 * @param charge strength of charge force, should be less than zero, the lesser the more distributed the graph
 * @param canvas canvas reference
 */
export const drawGraph = (graphData, width, height, charge, canvas) => {
    const nodes = graphData.nodes.map(d => Object.create(d));
    const links = graphData.links.map(d => Object.create(d));

    const radius = 5;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const simulation = d3.forceSimulation()
        .nodes(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody().strength(charge))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide().radius(2).strength(5))
        .force('x', d3.forceX().x(d => xPoint(d, width)))
        .force('y', d3.forceY().y(height / 2))
    ;

    const svg = d3.select(canvas)
        .attr("width", width)
        .attr("height", height)
        .attr("strength", charge)
        .style("border", "1px solid black")
        .style("font", "12px sans-serif");

    svg.selectAll("*").remove();

    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        //.attr("stroke-width", d => Math.sqrt(d.value))
        .attr("data-testid", "line")
        .attr("stroke", d => color(d.category));

    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", radius)
        .attr("fill", d => color(d.group))
        .attr("data-testid", "circle")
        .call(drag(simulation));

    const text = svg.append("g")
        .attr("stroke", "black")
        .attr("fill", "#fff")
        .selectAll("text")
        .data(nodes)
        .enter().append("text")
        .text(d => d.id);

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.ChargePicker = Math.max(2*radius, Math.min(width - 2*radius, d.x)))
            .attr("cy", d => d.y = Math.max(2*radius, Math.min(height - 2*radius, d.y)));

        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });
}

const drag = (simulation) => {
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
};

const xPoint = (d, width) => {
    if (d.x <= width/2) {
        return width/4;
    }
    if (d.x > width/2) {
        return 3 * width/4;
    }
    return width/2;
};