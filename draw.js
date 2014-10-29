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

STARTUP_SCREEN = new Image();
STARTUP_SCREEN.src = 'startup-screen-bg.png'

Draw = {
	fuji: null,
	itemsOnScreen: [],
	currentBackground: null,

	screen: function(){
		this.background();
		this.items();
		this.fujiApple();
	}, 

	items: function(){
		for(var i = 0; i < this.currentBackground.items.length; i++){
			item = this.currentBackground.items[i]
			CANVAS.drawImage(item.image, item.x, item.y, item.width, item.height)
		}
	}, 
	background: function(){
		CANVAS.drawImage(BACKGROUND, 0, 0, 700, 300)
	},
	fujiApple: function(){
		CANVAS.drawImage(FUJI, 0, 0, 72, 72, this.fuji.left, this.fuji.top, 72, 72)
	}, 
	backpack: function(){
		CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
		this.items();
	}, 
	introScreen: function(){
		CANVAS.drawImage(STARTUP_SCREEN, 0, 0, 700, 300)
	}
}

	// drawBackpackItems: function(){
	// 	for(var i=0; i<this.items.length; i++){
	// 		CANVAS.drawImage(this.items[i], 190 + i*100,225,50,50)
	// 	}
	// }



