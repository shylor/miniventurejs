var input = function() {
	this.x = 0;
	this.y = 0;
	this.clicked = 0;
	this.clicks = 0;
}

// return if a click has been detected or not
// and reset clicked back to false
input.prototype.click = function() {
	if(this.clicked) {
		this.clicked = 0;
		return true;
	}
	return false;
}

// update the mouse xy locations, this should not be called externally
input.prototype.mouse_xy = function(evt) {
	var game_window = canvas.getBoundingClientRect();
	return {
		x: Math.floor(evt.clientX - game_window.left),
		y: Math.floor(evt.clientY - game_window.top)
	}
}

// detect if the mouse has moved if so update the mouse xy location
canvas.addEventListener('mousemove', function(evt) {
	var mouse_xy = input.mouse_xy(evt);
	input.x = mouse_xy.x;
	input.y = mouse_xy.y;
});

// check to see if the user clicked the mouse
canvas.addEventListener('click', function(evt) {
	input.clicked = 1;
	input.clicks = input.clicks + 1;
});