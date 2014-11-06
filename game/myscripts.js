$(document).ready(function(){
	// basic setup
	setupCanvas();

	// background
	var myBackground = new Background();

	// create fuji
	var myFuji = new Fuji();
	var myFujiController = new FujiController(myFuji);



	// create backpack
	var my_backpackModel = new Backpack();
	var my_backpackController = new BackpackController(my_backpackModel);


	// create hash of controllers to pass to game controller
	var controllers = {
		backpack: my_backpackController, 
		fuji: myFujiController
	}

	// pass the view fuji model
	Draw.fuji = myFuji;
	Draw.currentBackground = myBackground;
	Draw.fujiBackpack = my_backpackModel;

	// create game controller
	var my_game_controller = new gameController(controllers, myBackground);

	// start game
	my_game_controller.setUpEventListeners();
	setTimeout(my_game_controller.loadIntro, 50);

})

function setupCanvas() {
	$("canvas").attr('width', 700);
	$("canvas").attr('height', 300);
	CANVAS = document.getElementById("screen").getContext('2d')
}







