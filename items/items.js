ITEMS = []
ITEM_PATHS = ['stick.png', 'marble.png', 'seeds.png', 'feather.png', 'bottle-cap.png']
ITEMS_ON_PAGE = []
ITEM_WIDTH = 50;
ITEM_HEIGHT = 50;

function Item(url, x, y){
	this.image = null;
	this.url = url;
	this.x = x;
	this.y = y; 
	this.width = ITEM_WIDTH; 
	this.height = ITEM_HEIGHT;
	this.createImage();
}

Item.prototype = {
	createImage: function(){
		this.image = new Image();
		this.image.src = this.url;
	}
}

function putItemRandomlyOnPage(){
	y = Math.random() * 250
	x = Math.random() * 650
	itemIndex = Math.floor(Math.random()*ITEM_PATHS.length)
	console.log("item number", itemIndex)
	console.log('x', x)
	console.log('y', y)

	newItem = new Item(ITEM_PATHS[itemIndex], x, y);

	CANVAS.drawImage(newItem.image, x, y, 50, 50)
	ITEMS_ON_PAGE.push(newItem)
}


