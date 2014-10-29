function gameController(controllers){
	this.in_startup_screen = false;
	this.in_main_game_play = false;
	this.backpackController = controllers.backpack;
	this.fujiController = controllers.fuji;
}

gameController.prototype = {
	loadIntro: function(){
		Draw.introScreen();
		this.in_startup_screen = true;
		IN_STARTUP_SCREEN = true;
	}, 
	loadMainPlay: function(){
		IN_MAIN_PLAY = true;
		this.in_startup_screen = false;
		this.in_main_game_play = true;
		Draw.screen();
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



