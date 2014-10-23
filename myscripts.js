$(document).ready(function(){
	$(window).keydown(move);
	setUpItems();
	setTimeout(introScreen, 50);
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

function introScreen(){
	CANVAS.drawImage(STARTUP_SCREEN, 0, 0, 700, 300)
	IN_STARTUP_SCREEN = true;
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


function loadMainPLay(){
	IN_MAIN_PLAY = true;
	drawBackground();
	fujiView.draw1(0,0);
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

function drawBackpack(){
	CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
	backpack.is_open= true;
	drawBackpackItems();
}



function move(e){
	if (IN_STARTUP_SCREEN){
		if (e.keyCode == 13){
			IN_STARTUP_SCREEN = false;
			loadMainPLay();
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


