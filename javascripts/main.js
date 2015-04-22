console.log( 'loaded main.js' );

$( 'a' ).click ( function () {
	console.log( this )
  $( 'html, body' ).animate({
    scrollTop: $( $.attr( this, 'href' ) ).offset().top
  }, 1000);
  return false;
});

