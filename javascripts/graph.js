console.log('loaded graph.js')
var renderGraph = function() {
		var data = {
			"name": "languages",
			"children": [
			{
				"name": "Javascript",
				"children": [
					{"name": "Javascript", "size": 600},
					{"name": "Angular.js", "size": 120},
					{"name": "BackboneJS", "size": 100},
					{"name": "D3.js", "size": 160},
					{"name": "Three.js", "size": 60},
					{"name": "jQuery", "size": 380},
					{"name": "AJAX", "size": 420},
					{"name": "Mocha", "size": 160},
				]
			},
			{
				"name": "Ruby",
				"children": [
					{"name": "Ruby on Rails", "size": 360},
					{"name": "Sinatra", "size": 100},
					{"name": "RSPEC", "size": 80},
					{"name": "Action Mailer", "size": 100},
				]
			},
			{
				"name": "Misc",
				"children": [
					{"name": "HTML5", "size": 500},
					{"name": "CSS3", "size": 500},
					{"name": "PostgreSQL", "size": 150},
					{"name": "Bootstrap", "size": 160},	
					{"name": "Git", "size": 170},	
					{"name": "Materialize", "size": 140},	
					{"name": "Creative Suite", "size": 130}	
					]
				}
			]
		}

		var width = 800,
				height = 800;
		
		var canvas = d3.select('.svg')
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.attr('class', 'graph')
				.append('g')
						// .attr('transform', 'translate(50, 50)');
		
		var flattened = (classes(data))

		var pack = d3.layout.pack()
				.sort(null)
		    .size([width, height])
		    .padding(10)

		var color = d3.scale.linear()
				.domain([60, 500])
				.range(['#C9E4E7', '#3C8386']) 
		
		var nodes = pack.nodes(flattened)

		var node = canvas.selectAll(".node")
				.data(nodes.filter(function(d) { return !d.children; }))

				.enter()
			  .append("g")
	      		.attr("class", "node")
	      		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

	  node.append('circle')
	  		.attr('fill', function(d){ return color(d.value) })
	  		.attr('r', 0)
	  		.transition()
	  		.ease('sin')
	  		.delay(function(d, i) { return i * 60; })
	  		.attr('r', function(d) { return d.r })
	  		// .attr('stroke', '#DDDDDD')
	  		// .attr('stroke-width', 2);

	  node.append('text')
	  		.transition()
	  		.attr("dy", ".3em")
	      .style("text-anchor", "middle")
	  		.text(function(d) { return d.className })

	  function classes(root) {
	  var classes = [];

		  function recurse(name, node) {
		    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
		    else classes.push({packageName: name, className: node.name, value: node.size});
		  }

	  recurse(null, root);
	  return {children: classes};
	}
}
		