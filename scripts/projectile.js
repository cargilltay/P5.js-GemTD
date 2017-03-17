function Projectile(x, y, target) {
	this.x = x;
	this.y = y;
	this.w = 10;
	this.h = 10;
	this.speed = 10;
	this.damage = 30;
	this.target = target;
	this.hitTarget = false;

	this.show = function () {
		//fill(255);
		stroke(255);
		ellipse(this.x, this.y, this.w, this.h);
	}

	this.checkHit = function () {
		var tarX = this.target.pos.x;
		var tarY = this.target.pos.y;
		var checkWithinPixelOffset = 10;
		var isWithinOffsetOfX = (this.x >= tarX - checkWithinPixelOffset && this.x <= tarX + checkWithinPixelOffset) ? true : false;
		var isWithinOffsetOfY = (this.y >= tarY - checkWithinPixelOffset && this.y <= tarY + checkWithinPixelOffset) ? true : false;

		//check if within offset
		if (isWithinOffsetOfX && isWithinOffsetOfY) {
			this.target.hitPoints -= this.damage;
			this.hitTarget = true;
			if (this.target.hitPoints == 0) {
				console.log(this.target.hitPoints)
				this.target.isDead = true;
			}
			return true;
		}
		return false;
	}

	this.updatePosition = function () {
		//this.x += this.speed;
		//this.y += this.speed;

		//console.log(this.target.pos.x)
		//console.log(this.x)
		if (this.checkHit()) {
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