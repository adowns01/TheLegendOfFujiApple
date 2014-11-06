function Background(){
	this.items = [];
	this.obstacles = [];
	this.createItems();
	this.createObstacles();
}

Background.prototype = {
	createItems: function(){
		var stick = new Item('./images/stick.png', 100, 100);
		this.items.push(stick);
	}, 
	createObstacles: function(){
		var bush = new Obstacle('./images/bush.png', 200, 200, 120, 90);
		this.obstacles.push(bush);
	}
}
