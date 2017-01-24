function Minion(x, y) {
	this.x = x;
	this.y = y;
	this.hitpoints;
	this.speed;
	this.armor;
	this.weakness;
	this.minimumSpeed;
	this.livesCost;

	this.update = function(x, y){
		this.x = x;
		this.y = y;
	}
}