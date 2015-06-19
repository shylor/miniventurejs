var intro = function() {
	this.load();
}
intro.prototype = new scene();

intro.prototype.load = function() {
	this.intro_logo = new Image();
	this.intro_logo.src = 'assets/intro_logo.png';
	this.show = 100;
}

intro.prototype.update = function() {
	if(this.show <= 0) {
		g.load_scene('main_menu');
	} else {
		this.show--;
	}
}

intro.prototype.draw = function() {
	ctx.drawImage(this.intro_logo, 0, 0);
}