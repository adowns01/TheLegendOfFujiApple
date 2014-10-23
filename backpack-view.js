ITEMS = []
ITEM_PATHS = ['stick.png', 'marble.png', 'seeds.png', 'feather.png', 'bottle-cap.png']
ITEMS_ON_PAGE = []


backpackView = {
	items: [],
	drawBackpack: function(){
		CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
		backpack.is_open= true;
		this.drawItems();
	}, 
	drawItems: function(){
		for(var i=0; this.items.length<5; i++){
			CANVAS.drawImage(this.items[i], 190 + i*100,225,50,50)
		}
	}
}






