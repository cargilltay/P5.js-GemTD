function Projectile(x, y, target) {
	this.x = x;
	this.y = y;
	this.w = 10;
	this.h = 10;
	this.speed = 10;
	this.damage = 30;
	this.target = target;
	this.hitTarget = false;

	this.show = function() {
		//fill(255);
		stroke(255);
		ellipse(this.x, this.y, this.w, this.h);
	}

	this.updatePosition = function() {
		//this.x += this.speed;
		//this.y += this.speed;

		//console.log(this.target.pos.x)
		//console.log(this.x)

		if (this.x == this.target.pos.x && this.y == this.target.pos.y) {
			this.target.hitPoints -= this.damage;
			this.hitTarget = true;
			if (this.target.hitPoints == 0) {
				console.log(this.target.hitPoints)
				this.target.isDead = true;
			}
			return;
		}

		if (this.x < this.target.pos.x) {
			this.x += this.speed;
		} else if (this.x > this.target.pos.x) {
			this.x -= this.speed;
		}

		if (this.y < this.target.pos.y) {
			this.y += this.speed;
		} else if (this.y > this.target.pos.y) {
			this.y -= this.speed;
		}
	}
}