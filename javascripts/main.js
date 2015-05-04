console.log( 'loaded main.js' );

$(function() {
		
	// smooth scrolling
	$( 'a' ).click ( function() {
		console.log( this )
	  $( 'html, body' ).animate({
	    scrollTop: $( $.attr( this, 'href' ) ).offset().top
	  }, 1000);
	  return false;
	});

	// scroll listener for the D3 graph rendering
	$( window ).scroll( function() {
		var scrollPosition = window.pageYOffset
		var skillsViewTop = Math.floor( $( '#skillsView' ).position().top)
		if ( scrollPosition < skillsViewTop && scrollPosition > skillsViewTop - 100 ) {
			renderGraph();
			$( window ).off( 'scroll' )
		}
	})

	// about me button content toggling
	$( '#about-me-button' ).on('click', function() {
		$( '#about-me-reveal' ).toggle('slide')
		if ( $( this ).hasClass( 'clicked' )) {
			$( '#about-me-button' ).empty().html("<span id='about-me'>ABOUT ME</span>")
		} else { 
			$( '#about-me-button' ).empty().html("<i id='x-out-button' class='mdi-content-clear medium'></i>"); 
		}
			$( '#about-me-button' ).toggleClass('clicked')
	})

});
