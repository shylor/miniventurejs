var g = new game();
var input = new input();

setInterval(function() {
	g.update();
	g.draw();
}, 1000 / 25);