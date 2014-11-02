FUJI_STEP_SIZE = 10;


function Fuji() {
	this.top = 0;
	this.left = 0;
	this.stepSize = FUJI_STEP_SIZE;
}

Fuji.prototype = {
	moveLeft: function(){
		this.left -= this.stepSize;
	}, 
	moveRight: function(){
		this.left += this.stepSize;
	}, 
	moveUp: function(){
		this.top -= this.stepSize;
	}, 
	moveDown: function(){
		this.top += this.stepSize;
	}
}