var main_menu = function() {
	this.load();
}
main_menu.prototype = new scene();

main_menu.prototype.load = function() {
	this.bg_img = new Image();
	this.bg_img.src = 'assets/game_menu.jpg';
	ctx.globalAlpha = 1;
}

main_menu.prototype.update = function() {
	if(input.click()) {
		console.log(input.x+' x '+input.y);
	}
}

main_menu.prototype.draw = function() {
	ctx.drawImage(this.bg_img, 0, 0);
}