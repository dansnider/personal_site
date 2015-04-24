console.log( 'loaded main.js' );

$( 'a' ).click ( function() {
	console.log( this )
  $( 'html, body' ).animate({
    scrollTop: $( $.attr( this, 'href' ) ).offset().top
  }, 1000);
  return false;
});

$( window ).scroll( function() {
	var scrollPosition = window.pageYOffset
	var skillsViewTop = Math.floor( $( '#skillsView' ).position().top)
	if ( scrollPosition < skillsViewTop && scrollPosition > skillsViewTop - 100 ) {
		renderGraph();
		$( window ).off( 'scroll' )
	}
})


