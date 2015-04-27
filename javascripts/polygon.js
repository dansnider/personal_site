
// Append text
var heading = document.createElement( 'div' );
heading.style.position = 'absolute';
heading.style.zIndex = 1;    
heading.style.width = 100 + '%';
heading.style.height = 100;
heading.id = "heading";
heading.style.left = 12 + 'px';
heading.innerHTML = "<h2>DAN SNIDER</h2>" + "<h3>(<span id='subhead'>web developer</span> )</h3>";
document.body.appendChild( heading );

var list = document.createElement( 'ul' );
list.style.position = 'absolute';
list.style.zIndex = 1;
list.style.color = '#FFFAFA';
list.id = "nav";
list.innerHTML = '<li><a href="#workView">WORK</a></li><li><a href="#skillsView">SKILLS</a></li><li><a href="#contactView">CONTACT</a></li><li><a href="./DanSniderResume.pdf" target="_blank">RESUME</a></li>'
document.body.appendChild( list ) ;

// Define renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Define camera
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );

camera.position.y = 0;
camera.position.z = 400;
camera.position.x = .70;

var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry( 150, 150, 150 );

var material = new THREE.MeshBasicMaterial({ 
	vertexColors: THREE.FaceColors,
	color: 0x5F9EA0,
		wireframe: true, 
	});

// Drawing the cubes with different start positions based on index
var cubes = [];

for ( var i = 0; i < 60; i++ ) {
	cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	cubes.push( cube );
	cubes.forEach(function(cube, index){
		cube.rotation.y = index/2;
	})
}

// manual rotation function for testing purposes
function rotate( degrees ) {
	cube.rotation.y = degrees * (Math.PI / 180);
}

// Render each cube
function render() {
	requestAnimationFrame( render );
	cubes.forEach( function( cube ) {
		cube.rotation.y += .005;
		cube.rotation.x += .004;
	})
	renderer.render( scene, camera );
}
render()
