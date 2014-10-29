function BackpackController(model){
	this.model = model;
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
		Draw.screen();
		this.model.close();
	}, 
	openBackpack: function(){
		this.model.openBag();
		Draw.backpack();
	},
	is_open: function(){
		return this.model.is_open;
	}
}