function Obstacle(url, x, y, width, height){
	this.image = null;
	this.url = url;
	this.x = x;
	this.y = y; 
	this.width = width; 
	this.height = height;
	this.createImage();
}

Obstacle.prototype = {
	createImage: function(){
		this.image = new Image();
		this.image.src = this.url;
	}
}
