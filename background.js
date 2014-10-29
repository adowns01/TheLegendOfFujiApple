// function drawBackground(){
// 	drawAllItemsOnScreen();
// }

// function drawAllItemsOnScreen(){
// 	for(var i = 0; i < ITEMS_ON_PAGE.length; i++){
// 		item = ITEMS_ON_PAGE[i]
// 		CANVAS.drawImage(item.image, item.x, item.y, item.width, item.height)
// 	}
// }
FUJI = new Image();
FUJI.src = 'fuji.png';

BACKGROUND = new Image();
BACKGROUND.src = 'fuji-bg.png'

BACKPACK = new Image();
BACKPACK.src = 'backpack.png';

background = {
	fuji: null,
	itemsOnScreen: [],
	draw: function(){
		this.drawBackground();
		this.drawAllItemsOnScreen();
		this.drawFuji();
	}, 
	drawAllItemsOnScreen: function(){

	}, 
	drawBackground: function(){
		CANVAS.drawImage(BACKGROUND, 0, 0, 700, 300)
		console.log('drawing background')
	},
	drawFuji: function(){
		CANVAS.drawImage(FUJI, 0, 0, 72, 72, this.fuji.left, this.fuji.top, 72, 72)
	}, 
	drawBackpack: function(){
		CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
		// this.drawItems();
	}
}

	// drawBackpackItems: function(){
	// 	for(var i=0; i<this.items.length; i++){
	// 		CANVAS.drawImage(this.items[i], 190 + i*100,225,50,50)
	// 	}
	// }



