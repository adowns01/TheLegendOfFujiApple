// backpack = {
// 	is_open: false,
// 	items = []
// }

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
	}
}