// game constructor default settings would go here.
var game = function() {
	this.load_scene('intro');
}

// all game logic should happen here
game.prototype.update = function() {
	game_scene.update();
}

// all drawing to the screen should happen here
game.prototype.draw = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	game_scene.draw();
}

game.prototype.load_scene = function(scene) {
	current_scene = scene;
	game_scene = new window[scene]();
}