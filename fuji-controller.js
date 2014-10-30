function FujiController(model) {
	this.model = model; 
}

FujiController.prototype = {
	moveLeft: function(){
		this.model.moveLeft();
		Draw.screen();
	}, 
	moveRight: function(){
		this.model.moveRight();
		Draw.screen();
	}, 
	moveUp: function(){
		this.model.moveUp();
		Draw.screen();
	}, 
	moveDown: function(){
		this.model.moveDown();
		Draw.screen();
	}, 
	fujiLocation: function(){
		return [this.model.left, this.model.top];
	}
}