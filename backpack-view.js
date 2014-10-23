backpackView = {
	draw: function(){
		CANVAS.drawImage(BACKPACK, 0, 0, 700, 300)
		backpack.is_open= true;
		drawBackpackItems();
	}
}