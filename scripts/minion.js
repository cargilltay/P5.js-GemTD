function Minion(x, y) {
	this.x = x;
	this.y = y;
	this.hitpoints;
	this.speed;
	this.armor;
	this.weakness;
	this.minimumSpeed;
	this.livesCost;

	this.show = function(){
		
	}

	this.updatePosition = function() {
		this.x -= this.speed;
	}

	this.hasReachEnd = function() {
		return this.x > this.w;
	}
}