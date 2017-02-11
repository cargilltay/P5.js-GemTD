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
		var xOffsetLeft = this.x - 60;
		var xOffsetRight = this.x + 60;
		var yOffsetDown = this.y - 60;
		var yOffsetUp = this.y + 60;

		$(game.minions).each(function() {
			//in tower radius
			//this does not seem to be individual (not just leading minion)
			if (this.pos.x >= xOffsetLeft && this.pos.x <= xOffsetRight && this.pos.y >= yOffsetDown && this.pos.y <= yOffsetUp) {
				_this.target = this;
				var proj = new Projectile(_this.x + 10, _this.y + 10, _this.target);
				_this.projectiles.push(proj);

				//proj.show();

				console.log("in range")
				_this.hasTarget = true;
			}
		})
	}

	this.fireProjectiles = function() {
		var _this = this;
		var pNum = 0;

		$(this.projectiles).each(function() {
			this.show();
			this.updatePosition();

			if (this.hitTarget) {
				_this.projectiles.splice(pNum, 1);
				this.target = null;
				this.hasTarget = false;
			}

			pNum++;
		})
	}

	this.generateType = function() {
		var randNum = Math.random();

		var tManager = curQualities;
		tManager.sortOnKeys(tManager);

		var tQualities = tManager.qualities;

		var keys = Object.keys(tQualities);

		for (var i = 0; i < keys.length; i++) {
			var curVal = tQualities[keys[i]]
			var nextVal = tQualities[keys[i + 1]]
			if (randNum <= curVal && randNum > nextVal) {
				this.quality = keys[i];
				break;
			}
		}

		var randTypeNum = Math.floor(Math.random() * gemTypes.length);

		this.type = gemTypes[randTypeNum];

		this.img = loadImage("assets/gems/" + this.quality + this.type + ".png")

		console.log(this.quality);
		console.log(this.type);
	}


	this.init = function() {
		this.type = this.generateType();
	}
}