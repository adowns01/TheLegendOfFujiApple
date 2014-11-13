SPRITE_ANIMATION_TIME = 50;

function FujiController(model) {
	this.model = model; 
	this.fujiRight = [];
	this.fujiLeft = [];
	this.fujiUp = [];
	this.fujiForward = [];
}

FujiController.prototype = {
	moveLeft: function(){
		this.model.setImage(this.fujiLeft[0])
		this.model.moveLeft();
		Draw.screen();

		this.model.setImage(this.fujiLeft[1]);
		this.model.moveLeft();
		setTimeout(this.draw, SPRITE_ANIMATION_TIME);
	}, 
	moveRight: function(){
		this.model.setImage(this.fujiRight[0])
		this.model.moveRight();
		Draw.screen();

		this.model.setImage(this.fujiRight[1]);
		this.model.moveRight();
		setTimeout(this.draw, SPRITE_ANIMATION_TIME);
	}, 
	moveUp: function(){
		this.model.setImage(this.fujiUp[0])
		this.model.moveUp();
		Draw.screen();

		this.model.setImage(this.fujiUp[1]);
		this.model.moveUp();
		setTimeout(this.draw, SPRITE_ANIMATION_TIME);
	}, 
	moveDown: function(){
		this.model.setImage(this.fujiForward[0])
		this.model.moveDown();
		Draw.screen();

		this.model.setImage(this.fujiForward[1]);
		this.model.moveDown();
		setTimeout(this.draw, SPRITE_ANIMATION_TIME);
	}, 
	fujiLocation: function(){
		return [this.model.left, this.model.top];
	}, 
	makeSprites: function(){
		// right
		fujiRight = new Image();
		fujiRight.src = './images/walks/right1.png';
		this.fujiRight.push(fujiRight);

		fujiRight1 = new Image();
		fujiRight1.src = './images/walks/right3.png';
		this.fujiRight.push(fujiRight1);

		// left
		fujileft1 = new Image();
		fujileft1.src = './images/walks/left1.png';
		this.fujiLeft.push(fujileft1);

		fujileft2 = new Image();
		fujileft2.src = './images/walks/left3.png';
		this.fujiLeft.push(fujileft2);

		// up
		fujiUp1 = new Image();
		fujiUp1.src = './images/walks/Up1.png';
		this.fujiUp.push(fujiUp1);

		fujiUp2 = new Image();
		fujiUp2.src = './images/walks/Up3.png';
		this.fujiUp.push(fujiUp2);

		// forward
		fujiForward1 = new Image();
		fujiForward1.src = './images/walks/Forward1.png';
		this.fujiForward.push(fujiForward1);

		fujiForward2 = new Image();
		fujiForward2.src = './images/walks/Forward3.png';
		this.fujiForward.push(fujiForward2);

		this.model.setImage(this.fujiRight[0])

	}, 
	draw: function(){
		Draw.screen();
	}
}