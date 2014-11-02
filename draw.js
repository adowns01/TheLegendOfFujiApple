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
	currentBackground: null,
	fujiBackpack: null, 

	screen: function(){
		this.background();
		this.obstacles();
		this.items();
		this.fujiApple();
	}, 

	items: function(){
		for(var i = 0; i < this.currentBackground.items.length; i++){
			item = this.currentBackground.items[i]
			CANVAS.drawImage(item.image, item.x, item.y, item.width, item.height)
		}
	}, 
	obstacles: function(){
		for(var i = 0; i < this.currentBackground.obstacles.length; i++){
			item = this.currentBackground.obstacles[i]
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
		this.backpackItems();
	}, 
	backpackItems: function(){
		for(var i=0; i<this.fujiBackpack.items.length; i++){
			CANVAS.drawImage(this.fujiBackpack.items[i].image, 190 + i*100,225,50,50)
		}
	},
	introScreen: function(){
		CANVAS.drawImage(STARTUP_SCREEN, 0, 0, 700, 300)
	}, 
	removeItemFromScreen: function(itemToRemove){
		var items = this.currentBackground.items;
		for(var i = 0; i < items.length; i++){
			console.log("in array", items[i])
			if(items[i] == itemToRemove){
				items.splice(i, 1);
			}
		}
		this.screen();
	}
}



