function Minion(xOffset) {
	this.pos = createVector(50, 90);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.img = loadImage("assets/minion.png");
	this.hitpoints;
	this.speed;
	this.armor;
	this.weakness;
	this.minimumSpeed;
	this.livesCost;
	this.offset;

	this.show = function() {
		fill(255);
		stroke(255);
		this.offset = -xOffset;
		image(this.img, this.pos.x + this.offset, this.pos.y);
		this.w = this.img.width;
		this.h = this.img.height;
	}

	this.updatePosition = function() {
		//his.vel.add(this.acc);
		//this.pos.add(this.vel);
		//this.acc.set(0, 0);
		this.pos.y += 1
	}

	this.hasReachEnd = function() {
		return this.x > this.w;
	}
}