backpack = {
	is_open: false,
	itemURLS:[],
	toggle: function(){
		if (this.is_open){
			this.close();
		} else {
			backpackView.drawBackpack();
		}
	},
	close: function(){
		drawBackground();
		fujiView.draw1(fuji.left, fuji.top);
		this.is_open = false;
	}
}