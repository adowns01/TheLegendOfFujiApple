function BackpackController(model, view){
	this.model = model;
	this.view = view; 
}

BackpackController.prototype = {
	toggle: function(){
		if (this.model.is_open){
			this.closeBackpack();
		} else {
			this.openBackpack();
		}
	},
	closeBackpack: function(){
		background.draw();
		this.model.is_open = false;
	}, 
	openBackpack: function(){
		this.drawBackpack();
	},
	is_open: function(){
		return this.model.is_open;
	}, 
	drawBackpack: function(){
		this.model.openBag();
		this.view.drawBackpack();
	}
}