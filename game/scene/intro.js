var intro = function() {
	this.load();
}
intro.prototype = new scene();

intro.prototype.load = function() {
	this.intro_logo = new Image();
	this.intro_logo.src = 'assets/intro_logo.jpg';
	this.alpha = 1;
	this.show = 75;
}

intro.prototype.update = function() {
	ctx.globalAlpha = this.alpha;
	if(this.show <= 0) {
		this.alpha = this.alpha - 0.10;
		if(this.alpha <= 0) {
			g.load_scene('main_menu');
		}
	} else {
		this.show--;
	}
}

intro.prototype.draw = function() {
	ctx.drawImage(this.intro_logo, 0, 0);
}