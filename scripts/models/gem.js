function Gem() {
	this.colNum;
	this.rowNum;
	this.type;
	this.quality;
	this.kills;
	this.level;
	this.img = rock;
	this.isKept = false;
	this.hasTarget = false;
	this.showRadius = false;
	this.radius = 100;
	this.target;
	this.projectiles = [];

	this.typeProperties = {
		
	}

	this.show = function () {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(this.img, this.x, this.y);

		if(this.showRadius){
			ellipse(this.x + 10, this.y + 10, this.radius, this.radius);
		}

		this.scanForMinions();
		//this.fireProjectiles();
	}

	this.scanForMinions = function () {
		//if(this.hasTarget){
		//	return;
		//}

		var _this = this;
		var xOffsetLeft = this.x - 40;
		var xOffsetRight = this.x + 60;
		var yOffsetDown = this.y - 40;
		var yOffsetUp = this.y + 60;

		$(game.minions).each(function () {
			//in tower radius
			//this does not seem to be individual (not just leading minion)
			if (this.pos.x >= xOffsetLeft && this.pos.x <= xOffsetRight && this.pos.y >= yOffsetDown && this.pos.y <= yOffsetUp) {
				_this.target = this;
				var proj = new Projectile(_this.x + 10, _this.y + 10, _this.target);
				_this.projectiles.push(proj);

				//proj.show();
				_this.hasTarget = true;
			}
		})
	}

	this.fireProjectiles = function () {
		var _this = this;
		var pNum = 0;

		$(this.projectiles).each(function () {
			if (this.target == null) {
				return;
			}
			this.show();
			this.updatePosition();

			if (this.hitTarget || this.target.isDead) {
				_this.projectiles.splice(pNum, 1);
				this.target = null;
				this.hasTarget = false;
			}

			pNum++;
		})
	}
}