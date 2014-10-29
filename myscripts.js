$(document).ready(function(){

	// create fuji
	myFuji = new Fuji();
	myFujiController = new FujiController(myFuji);

	// pass the view fuji model
	background.fuji = myFuji;

	// create backpack
	my_backpackView = new BackpackView();
	my_backpackModel = new Backpack();
	my_backpackController = new BackpackController(my_backpackModel, my_backpackView);

	controllers = {
		backpack: my_backpackController, 
		fuji: myFujiController
	}

	
	my_game_controller = new gameController(controllers);

	my_game_controller.setUpEventListeners();

	setTimeout(my_game_controller.loadIntro, 50);

})

IN_STARTUP_SCREEN = false;
IN_MAIN_PLAY = false;


$("canvas").attr('width', 700);
$("canvas").attr('height', 300);
CANVAS = document.getElementById("screen").getContext('2d')



STARTUP_SCREEN = new Image();
STARTUP_SCREEN.src = 'startup-screen-bg.png'




function gameController(controllers){
	this.in_startup_screen = false;
	this.in_main_game_play = false;
	this.backpackController = controllers.backpack;
	this.fujiController = controllers.fuji;
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
		background.draw();
		this.fujiController.draw();
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
		else if (!this.backpackController.is_open() || e.keyCode == 90){
			switch (e.keyCode){
			case 37:// left arrow
			this.fujiController.moveLeft();
			break;
			case 39: //right arrow
			this.fujiController.moveRight();
			break;
			case 38: //up arrow
			this.fujiController.moveUp();
			break;
			case 40: //down arrow
			this.fujiController.moveDown();
			break;
			case 90: // z
			this.backpackController.toggle();
			break;
			case 32: // space
			putItemRandomlyOnPage();
			break;
			}
		}
	} 
}





