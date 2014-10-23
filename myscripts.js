$(document).ready(function(){
	
	my_game_controller = new gameController()
	my_game_controller.setUpEventListeners();
	setTimeout(my_game_controller.loadIntro, 50);
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

STARTUP_SCREEN = new Image();
STARTUP_SCREEN.src = 'startup-screen-bg.png'




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


function drawBackground(){
	CANVAS.drawImage(BACKGROUND, 0, 0, 700, 300)
	drawAllItemsOnScreen();
}

function drawAllItemsOnScreen(){
	for(var i = 0; i < ITEMS_ON_PAGE.length; i++){
		item = ITEMS_ON_PAGE[i]
		CANVAS.drawImage(item.image, item.x, item.y, item.width, item.height)
	}
}




