$(document).ready(function(){
	
	my_game_controller = new gameController()
	my_game_controller.setUpEventListeners();
	setTimeout(my_game_controller.loadIntro, 50);
	setUpItems();
})

IN_STARTUP_SCREEN = false;
IN_MAIN_PLAY = false;


$("canvas").attr('width', 700);
$("canvas").attr('height', 300);
CANVAS = document.getElementById("screen").getContext('2d')
FUJI = new Image();
FUJI.src = 'fuji.png';
BACKGROUND = new Image();
BACKGROUND.src = 'fuji-bg.png'
BACKPACK = new Image();
BACKPACK.src = 'backpack.png'
STARTUP_SCREEN = new Image();
STARTUP_SCREEN.src = 'startup-screen-bg.png'

ITEMS = []
ITEM_PATHS = ['stick.png', 'marble.png', 'seeds.png', 'feather.png', 'bottle-cap.png']

ITEMS_ON_PAGE = []


function gameController(){
	this.in_startup_screen = false;
	this.in_main_game_play = false;
}

gameController.prototype = {
	loadIntro: function(){
		CANVAS.drawImage(STARTUP_SCREEN, 0, 0, 700, 300)
		this.in_startup_screen = true;
		IN_STARTUP_SCREEN = true;
	}, 
	loadMainPlay: function(){
		IN_MAIN_PLAY = true;
		this.in_startup_screen = false;
		this.in_main_game_play = true;
		drawBackground();
		fujiView.draw1(0,0);
	}, 
	setUpEventListeners: function(){
		$(window).keydown(this.determineKeyPressAction.bind(this));
	}, 
	determineKeyPressAction: function(e){
		if (IN_STARTUP_SCREEN){
			if (e.keyCode == 13){
				IN_STARTUP_SCREEN = false;
				this.loadMainPlay();
			}
		}
		else if (!backpack.is_open || e.keyCode == 90){
			switch (e.keyCode){
			case 37:// left arrow
			fuji.moveLeft();
			break;
			case 39: //right arrow
			fuji.moveRight();
			break;
			case 38: //up arrow
			fuji.moveUp();
			break;
			case 40: //down arrow
			fuji.moveDown();
			break;
			case 90: // z
			backpack.toggle();
			break;
			case 32: // space
			putItemRandomlyOnPage();
			break;
		}
	}
}
}







function putItemRandomlyOnPage(){
	y = Math.random() * 250
	x = Math.random() * 650
	itemIndex = Math.floor(Math.random()*ITEMS.length)
	CANVAS.drawImage(ITEMS[itemIndex], x, y, 50, 50)
	displayed_item = {
		x: x, 
		y: y, 
		xSize: 50, 
		ySize: 50,
		image: ITEMS[itemIndex]
	}
	ITEMS_ON_PAGE.push(displayed_item)
}


function setUpItems(){
	for(var i = 0; i<ITEM_PATHS.length; i++){
		addItems(ITEM_PATHS[i])
	}
}

function addItems(url){
	newItem= new Image();
	newItem.src = url
	ITEMS.push(newItem)
}


function drawBackground(){
	CANVAS.drawImage(BACKGROUND, 0, 0, 700, 300)
	drawAllItemsOnScreen();
}

function drawAllItemsOnScreen(){
	for(var i = 0; i < ITEMS_ON_PAGE.length; i++){
		item = ITEMS_ON_PAGE[i]
		CANVAS.drawImage(item.image, item.x, item.y, item.xSize, item.ySize)
	}
}


function drawBackpackItems(){
	for(var i=0; i<5; i++){
		CANVAS.drawImage(ITEMS[i], 190 + i*100,225,50,50)
	}


}


