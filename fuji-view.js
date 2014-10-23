fujiView = {
	draw1: function(x,y){
		drawBackground();
		CANVAS.drawImage(FUJI, 0, 0, 72, 72, x, y, 72, 72)
	}, 
	draw2: function(x,y){
		drawBackground();
		CANVAS.drawImage(FUJI, 73, 0, 72, 72, x, y, 72, 72)
	}
}