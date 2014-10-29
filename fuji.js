function Fuji() {
	this.top = 0;
	this.left = 0;
	this.stepSize = 10;
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