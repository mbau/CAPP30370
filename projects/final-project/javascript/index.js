$(document).ready( function() {
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	console.log("Width: " + viewportWidth);

	$("#jumbotron").css("height", viewportHeight);

	$("#welcome").animate({top: '70px'},1000);
	$("#to").animate({top: '110px'},1000);


	var cycle = $(".cycle");
	var cycleIndex = -1;

	function showNextCycle() {
		++cycleIndex;
		cycle.eq(cycleIndex % cycle.length)
		.fadeIn(1000)
		.delay(3000)
		.fadeOut(1000, showNextCycle);
	}
	showNextCycle();

});

$(window).resize(function() {
	var viewportWidth = $(window).width();
	var viewportHeight = $(window).height();
	console.log("Width: " + viewportWidth);
	$("#jumbotron").css("height", viewportHeight);
});

$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
    } 
});