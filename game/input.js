var input = function() {
	this.x = 0;
	this.y = 0;
	this.clicked = 0;
	this.clicks = 0;
	this.keys = new Array();
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

input.prototype.keydown = function(e) {
	var found = 0;
	for(var i=0; i<=this.keys.length; i++) {
		if(this.keys[i] == e.keyCode) {
			found = 1;
		}
	}
	if(found == 0) {
		this.keys.push(e.keyCode);
		console.log(this.keys);
	}
}
input.prototype.keyup = function(e) {
	for(var i=0; i<=this.keys.length; i++) {
		if(this.keys[i] = e.keyCode) {
			this.keys.splice(i, 1);
		}
	}
}

// update the mouse xy locations, this should not be called externally
input.prototype.mouse_xy = function(e) {
	var screen = canvas.getBoundingClientRect();
	this.x = Math.floor(e.clientX - screen.left);
	this.y = Math.floor(e.clientY - screen.top);
}

// detect if the mouse has moved if so update the mouse xy location
canvas.addEventListener('mousemove', function(e) {
	input.mouse_xy(e);
});

// check to see if the user clicked the mouse
canvas.addEventListener('click', function(evt) {
	input.clicked = 1;
	input.clicks = input.clicks + 1;
});

window.addEventListener('keydown', function(e) {
	input.keydown(e);
});

window.addEventListener('keyup', function(e) {
	input.keyup(e);
});