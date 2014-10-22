var fuji = {
	top: 0, 
	left: 0,
	stepSize: 10,
	moveLeft: function(){
		this.left -= this.stepSize;
		fujiView.draw1(this.left, this.top)
	}, 
	moveRight: function(){
		this.left += this.stepSize;
		fujiView.draw1(this.left, this.top)
	}, 
	moveUp: function(){
		this.top -= this.stepSize;
		fujiView.draw1(this.left, this.top)
	}, 
	moveDown: function(){
		this.top += this.stepSize;
		fujiView.draw1(this.left, this.top)
	}
}

