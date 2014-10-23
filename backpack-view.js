// BACKPACK = new Image();
// BACKPACK.src = 'backpack.png'

// backpackView = {
// 	backpackImage: BACKPACK,
// 	drawBackpack: function(){
// 		CANVAS.drawImage(this.backpackImage, 0, 0, 700, 300)
// 		backpack.is_open= true;
// 		this.drawItems();
// 	}, 
	
// }


function BackpackView() {
	this.image = null;
	this.url = 'backpack.png';
	this.createImage();
}

BackpackView.prototype = {
	createImage: function(){
		this.image = new Image();
		this.image.src = this.url;
	}, 

	drawBackpack: function(){
		CANVAS.drawImage(this.image, 0, 0, 700, 300)
		// this.drawItems();
	}

	// drawItems: function(){
	// 	for(var i=0; i<this.items.length; i++){
	// 		CANVAS.drawImage(this.items[i], 190 + i*100,225,50,50)
	// 	}
	// }
}






