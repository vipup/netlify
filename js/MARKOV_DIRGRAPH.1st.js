(function (root) {
  var links = [],
      nodes = [];

  Object.keys(__NODES__).forEach(function (node) {
    var position = __NODES__[node];
    console.log(position)
    nodes.push({
      name: node,
      x: position[0],
      y: position[1],
      fixed: true
    })
  });

  var getNodeIndex = function (name) {
    return nodes.map(function (node) {
      return node.name
    }).indexOf(name);
  };

  Object.keys(__TRANSITIONS__).forEach(function (state) {
    var transitions = __TRANSITIONS__[state];
    transitions.forEach(function (transition) {
      links.push({
        source: getNodeIndex(state),
        target: getNodeIndex(transition[1]),
        probability: transition[0],
        type: 'transition'
      });
    });
  });

  var width = 700,
      height = 600;

  var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(80)
    .charge(-700)
    .on("tick", tick)
    .start();

  var svg = d3.select("#canvas").append("svg")
    .attr("width", width)
    .attr("height", height);

  svg.append("defs").selectAll("marker")
    .data(["transition"])
    .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 26)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

  svg.append("defs").selectAll("marker")
    .data(["transition"])
    .enter().append("marker")
    .attr("id", "circular")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 25)
    .attr("refY", -2.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
    .data(force.links())
    .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { 
      if (d.source.name !== d.target.name) {
        return "url(#" + d.type + ")"; 
      }
    });

  var drag = d3.behavior.drag()
    .on("dragstart", dragstart)
    .on("drag", dragmove)
    .on("dragend", dragend);

  function dragstart(d, i) {
    force.stop()
  }

  function dragmove(d, i) {
      d.px += d3.event.dx;
      d.py += d3.event.dy;
      d.x += d3.event.dx;
      d.y += d3.event.dy; 
      tick(); 
  }

  function dragend(d, i) {
    d.fixed = true; 
    tick();
  }

  var circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 10)
    .attr("class", 'state')
    .attr("id", function(d) { return d.name; })
    .call(drag);

  var text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("x", 15)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
    text.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);

    if (d.source.name === d.target.name) {
     return (
      "M" + d.source.x + "," + d.source.y + 
      "c60,0, 30,50, 0, 0"
      );
    } else {
      return (
        "M" + d.source.x + "," + d.source.y + 
        "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y);
    }
  }

  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }
})(window);