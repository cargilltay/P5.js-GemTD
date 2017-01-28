function Minion(xOffset) {
	this.pos = createVector(50 + xOffset, 90);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.img = loadImage("assets/minion.png");
	this.hitpoints;
	this.speed = 5;
	this.armor;
	this.weakness;
	this.minimumSpeed;
	this.livesCost;
	this.destination = 0;

	this.show = function() {
		fill(255);
		stroke(255);
		image(this.img, this.pos.x, this.pos.y);
		this.w = this.img.width;
		this.h = this.img.height;
	}

	this.updatePosition = function() {
		var curDest = minionDestinations[this.destination];
		if (curDest[0] == this.pos.x && curDest[1] == this.pos.y) {
			this.destination++;
			curDest = minionDestinations[this.destination];
		}
		//his.vel.add(this.acc);
		//this.pos.add(this.vel);
		//this.acc.set(0, 0);
		//this.pos.y += 1
		if (this.pos.x < curDest[0]) {
			this.pos.x += this.speed;
		} else if(this.pos.x > curDest[0]){
			this.pos.x -= this.speed;
		}

		if (this.pos.y < curDest[1]) {
			this.pos.y += this.speed;
		} else if(this.pos.y > curDest[1]){
			this.pos.y -= this.speed;
		}
	}

	this.hasReachEnd = function() {
		return this.x > this.w;
	}
}