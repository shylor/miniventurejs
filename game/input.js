var input = function() {
	this.x = 0;
	this.y = 0;
	this.clicked = 0; // this holds if the mouse was clicked or not
	this.clicks = 0; // this is just the number of clicks, fun stat
	this.keys = new Array(); // we will store the keys held down here
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
	for(var i=0; i<=this.keys.length; i++) { // we need to loop through the keys to make sure we dont add it again
		if(this.keys[i] == e.keyCode) { // check to see if the key matches this record
			found = 1; // mark that we found a match, this is to pervent only one match being found when there might be two.
		}
	}
	if(found == 0) { // now that we know we did not find a match add it to the keys array
		this.keys.push(e.keyCode);
	}
}
input.prototype.keyup = function(e) {
	for(var i=0; i<=this.keys.length; i++) { // now that the user let go we need to remove it from the key from the array
		if(this.keys[i] = e.keyCode) { 
			this.keys.splice(i, 1);
		}
	}
}

// set clicked so we can get it in the scene loop
input.prototype.click = function(e) {
	this.clicked = 1;
	this.clicks = this.clicks + 1;
}

// update the mouse xy locations, this should not be called externally
input.prototype.pointer = function(e) {
	var screen = canvas.getBoundingClientRect();
	this.x = Math.floor(e.clientX - screen.left);
	this.y = Math.floor(e.clientY - screen.top);
}

// detect if the mouse has moved if so update the mouse xy location
canvas.addEventListener('mousemove', function(e) {
	input.pointer(e);
});

// check to see if the user clicked the mouse
canvas.addEventListener('click', function(e) {
	input.click(e);
});

// trigger when a key is pushed down but not released
window.addEventListener('keydown', function(e) {
	input.keydown(e);
});

// trigger when the key is let go
window.addEventListener('keyup', function(e) {
	input.keyup(e);
});