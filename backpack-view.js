backpackView = {
	items: [],
	drawBackpack: function(){
		CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
		backpack.is_open= true;
		this.drawItems();
	}, 
	drawItems: function(){
		for(var i=0; i<this.items.length; i++){
			CANVAS.drawImage(this.items[i], 190 + i*100,225,50,50)
		}
	}
}






