$(document).ready( function() {
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