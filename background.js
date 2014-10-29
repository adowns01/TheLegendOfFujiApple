function Background(){
	this.items = [];
	this.createItems();
}

Background.prototype = {
	createItems: function(){
		var stick = new Item('stick.png', 100, 100);
		this.items.push(stick);
	}
}