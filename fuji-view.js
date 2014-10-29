FUJI = new Image();
FUJI.src = 'fuji.png';

function FujiView() { 
}

FujiView.prototype = {
	draw: function(x,y){
		background.draw();
		CANVAS.drawImage(FUJI, 0, 0, 72, 72, x, y, 72, 72)
	}
}