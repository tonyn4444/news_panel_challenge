$(document).ready(function() {
	// when expand arrow is clicked, remove class that sets display to 'none'
	// set height of the panel container to appropriate size and display rest of panel
	// change image from expand arrow to collapse arrow
	$('#expand').on('click', function(){
		console.log('clicked');
		$('.main-content-wrap').toggle("slow");
		$('#expand').attr('src', 'Assets/Collapse_Arrow.png');
		$('#expand').attr('id', 'collapse');
	});

	$('#collapse').on('click', function() {
		$(this).attr('src', 'Assets/Expand_Arrow.png');
	})
});