function gameController(controllers, currentBackground){
	this.in_startup_screen = true;
	this.in_main_game_play = false;
	this.backpackController = controllers.backpack;
	this.fujiController = controllers.fuji;
	this.currentBackground = currentBackground;
}

gameController.prototype = {
	loadIntro: function(){
		Draw.introScreen();
	}, 
	loadMainPlay: function(){
		this.in_startup_screen = false;
		this.in_main_game_play = true;
		Draw.screen();
	}, 
	setUpEventListeners: function(){
		$(window).keydown(this.determineKeyPressAction.bind(this));
	}, 
	determineKeyPressAction: function(e){
		if (this.in_startup_screen && e.keyCode == 13){ // enter
			this.loadMainPlay();
		}
		else if (!this.backpackController.is_open() || e.keyCode == 90){
			switch (e.keyCode){
			case 37:// left arrow
			this.fujiController.moveLeft();
			if( this.fujiHitObstacle() ){
				this.fujiController.moveRight();
			}
			break;
			case 39: //right arrow
			this.fujiController.moveRight();
			if( this.fujiHitObstacle() ){
				this.fujiController.moveLeft();
			}
			break;
			case 38: //up arrow
			this.fujiController.moveUp();
			if( this.fujiHitObstacle() ){
				this.fujiController.moveDown();
			}
			break;
			case 40: //down arrow
			this.fujiController.moveDown();
			if( this.fujiHitObstacle() ){
				this.fujiController.moveUp();
			}
			break;
			case 90: // z
			this.backpackController.toggle();
			break;
			case 32: // space
			putItemRandomlyOnPage();
			break;
		}
		this.checkPickUpItem();

	}
},
checkPickUpItem: function(){
	var item = touchingItem(this.fujiController.fujiLocation(), this.currentBackground.items);
	if (item){
		this.addToBackPack(item);
		this.removeItemFromScreen(item);
	}
}, 
fujiHitObstacle: function(){

	var obstacle = touchingItem(this.fujiController.fujiLocation(), this.currentBackground.obstacles);
	// console.log("you have HIT!", !!obstacle);
	return !!obstacle; 
},
addToBackPack: function(item){
	this.backpackController.addItem(item)
}, 
removeItemFromScreen: function(item){
	Draw.removeItemFromScreen(item)
}
}

function touchingItem(fujiLocation, items){
	for(var i = 0; i < items.length; i++){
		if ( areTouching(fujiLocation, items[i]) ){
			return items[i];
		}
	}
}

function areTouching(fujiLocation, item){
	if( inRangeX(fujiLocation, item) && inRangeY(fujiLocation, item) ){
		return true;
	}
	return false;
}

function inRangeX(fujiLocation, item){

	var fujiX = fujiLocation[0];
	var itemX = item.x;

	if ( itemX >= fujiX && itemX - fujiX < FUJI_WIDTH ){
		console.log("hit X")


		return true;
	} 
	else if ( fujiX >= itemX && fujiX - itemX < item.width){
		console.log("hit X")

		return true;
	}


	return false; 	
}

function inRangeY(fujiLocation, item){

	var fujiY = fujiLocation[1];
	var itemY = item.y;
	console.log("fuji y", fujiY)
		console.log("itemy", itemY)

	if ( itemY >= fujiY && itemY - fujiY < FUJI_HEIGHT){
		console.log("fuji y", fujiY)
		console.log("itemy", itemY)
		return true;
	} 
	else if ( fujiY >= itemY && fujiY - itemY < item.height){
		console.log("fuji y", fujiY)
		console.log("itemy", itemY)
		return true;
	}


	return false; 	
}


TOUCHING_RANGE = 50;


