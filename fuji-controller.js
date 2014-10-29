function FujiController(model) {
	this.model = model; 
}

FujiController.prototype = {
	moveLeft: function(){
		this.model.moveLeft();
		background.draw();
	}, 
	moveRight: function(){
		this.model.moveRight();
		background.draw();
	}, 
	moveUp: function(){
		this.model.moveUp();
		background.draw();
	}, 
	moveDown: function(){
		this.model.moveDown();
		background.draw();
	}
}