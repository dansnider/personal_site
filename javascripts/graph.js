console.log('loaded graph.js')

	var data = {
		"name": "languages",
		"children": [
		{
			"name": "Javascript",
			"children": [
				{"name": "Javascript", "size": 100},
				{"name": "Angular.js", "size": 60},
				{"name": "BackboneJS", "size": 50},
				{"name": "D3.js", "size": 80},
				{"name": "Three.js", "size": 40},
				{"name": "Mocha", "size": 60}
			]
		},
		{
			"name": "Ruby",
			"children": [
				{"name": "Ruby on Rails", "size": 75},
				{"name": "Sinatra", "size": 65},
				{"name": "RSPEC", "size": 40},
				{"name": "Action Mailer", "size": 60},
			]
		},
		{
			"name": "Misc",
			"children": [
				{"name": "HTML5", "size": 90},
				{"name": "CSS3", "size": 90},
				{"name": "PostgreSQL", "size": 80},
				{"name": "Bootstrap", "size": 80},	
				{"name": "Git", "size": 85},	
				{"name": "Materialize", "size": 70},	
				{"name": "Creative Suite", "size": 70}	
				]
			}
		]
	}

	var width = 800,
			height = 600;
	
	var canvas = d3.select('.svg')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('class', 'graph')
			.append('g')
					.attr('transform', 'translate(50, 50)');
	
	var flattened = (classes(data))

	var pack = d3.layout.pack()
	    .size([width, height - 50])
	    .padding(10)
	
	var nodes = pack.nodes(flattened)

	var node = canvas.selectAll(".node")
			.data(nodes)
			.enter()
		  .append("g")
      		.attr("class", "node")
      		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append('circle')
  		.attr('r', function(d) { return d.r })
  		.attr('fill', '#5F9EA0')
  		.attr('stroke', '#DDDDDD')
  		.attr('stroke-width', 2);

  node.append('text')
  		.text(function(d) { return d.name })

  function classes(root) {
  var classes = [];

	  function recurse(name, node) {
	    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
	    else classes.push({packageName: name, className: node.name, value: node.size});
	  }

  recurse(null, root);
  return {children: classes};
}
		