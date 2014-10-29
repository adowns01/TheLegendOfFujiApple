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

background = {
	fuji: null,
	draw: function(){
		this.drawBackground();
		this.drawAllItemsOnScreen();
		this.drawFuji();
	}, 
	drawAllItemsOnScreen: function(){

	}, 
	drawBackground: function(){
		CANVAS.drawImage(BACKGROUND, 0, 0, 700, 300)
	}
	drawFuji: function(){
		CANVAS.drawImage(FUJI, 0, 0, 72, 72, this.fuji.left, this.fuji.top, 72, 72)
	}
}