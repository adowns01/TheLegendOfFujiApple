function Background(){
	this.items = [];
	this.obstacles = [];
	this.createItems();
	this.createObstacles();
}

Background.prototype = {
	createItems: function(){
		var stick = new Item('stick.png', 100, 100);
		this.items.push(stick);
	}, 
	createObstacles: function(){
		var rock= new Obstacle('marble.png', 50, 100, 50, 50);
		this.obstacles.push(rock);
	}
}
