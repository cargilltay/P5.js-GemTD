function Minion(xOffset) {
	this.pos = createVector(50 + xOffset, 90);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.img = loadImage("assets/minion.png");
	this.hitPoints = 90;
	this.isDead = false;
	this.hasReachedEnd = false;
	this.speed = 10;
	this.armor;
	this.weakness;
	this.minimumSpeed;
	this.livesCost;
	this.destination = 0;

	this.show = function () {
		fill(255);
		stroke(255);
		image(this.img, this.pos.x, this.pos.y);

		if (this.hitpoints < 90) {
			rect(this.pos.x, this.pos.y + 5, this.w, 2)
		}

		this.w = this.img.width;
		this.h = this.img.height;
	}

	this.updatePosition = function () {
		var curDest = minionDestinations[this.destination];

		//hasReachEnd
		if (curDest === undefined) {
			this.hasReachedEnd = true;
			return;
		}

		if (curDest[0] == this.pos.x && curDest[1] == this.pos.y) {
			this.destination++;
			curDest = minionDestinations[this.destination];
			if (curDest === undefined) return;
		}

		//for velocity/accel reuse this
		//this.vel.add(this.acc);
		//this.pos.add(this.vel);
		//this.acc.set(0, 0);
		//this.pos.y += 1	

		if (this.pos.x < curDest[0]) {
			this.pos.x += this.speed;
		} else if (this.pos.x > curDest[0]) {
			this.pos.x -= this.speed;
		}

		if (this.pos.y < curDest[1]) {
			this.pos.y += this.speed;
		} else if (this.pos.y > curDest[1]) {
			this.pos.y -= this.speed;
		}
	}
}