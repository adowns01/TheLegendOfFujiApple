function Backpack(){
	this.is_open = false;
	this.items = [];
}

Backpack.prototype = {
	close: function() {
		this.is_open = false
	},
	openBag: function(){
		this.is_open = true;
	}, 
	addItem: function(item){
		this.items.push(item)
		console.log("an item is added to the backpack!")
	}
}