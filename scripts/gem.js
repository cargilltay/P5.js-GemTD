function Gem(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.type;
	this.quality;
	this.level;
	this.img = rock;
	this.isKept = false;
	this.radius = 100;
	this.hasTarget = false;
	this.target;
	this.projectiles = [];

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(this.img, this.x, this.y);
		ellipse(this.x + 10, this.y + 10, this.radius, this.radius);

		this.scanForMinions();
		//this.fireProjectiles();
	}

	this.scanForMinions = function() {
		//if(this.hasTarget){
		//	return;
		//}

		var _this = this;
		var xOffsetLeft = this.x - 40;
		var xOffsetRight = this.x + 60;
		var yOffsetDown = this.y - 40;
		var yOffsetUp = this.y + 60;

		$(game.minions).each(function() {
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

	this.fireProjectiles = function() {
		var _this = this;
		var pNum = 0;

		$(this.projectiles).each(function() {
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

	this.generateType = function() {
		var randNum = Math.random() * 100;

		var tManager = curQualities;
		tManager.sortOnKeys(tManager);

		var tQualities = tManager.qualities;

		var keys = Object.keys(tQualities);

		//hard to figure this out but:
		//1. sort qualities by chance
		//2. if our randNum is less than lowest quality (say 20), choose it
		//3. if our random isnt, add the next chance and try again
		//(20 + 20 = 40) this is a 2, 20% chance situation etc
		var chance = tQualities[keys[0]]
		for (var i = 0; i < keys.length; i++) {
			if (randNum <= chance) {
				this.quality = keys[i];
				console.log(chance)
				break;
			}
			chance += tQualities[keys[i + 1]];
		}

		var randTypeNum = Math.floor(Math.random() * gemTypes.length);

		this.type = gemTypes[randTypeNum];

		this.img = loadImage("assets/gems/" + this.quality + this.type + ".png")

		//console.log(this.quality);
		//console.log(this.type);
	}


	this.init = function() {
		this.type = this.generateType();
	}
}