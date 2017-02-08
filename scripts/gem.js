function Gem(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.type;
	this.quality;
	this.level;
	this.img = rock;
	this.isKept = false;
	this.radius = 100;

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(this.img, this.x, this.y);
		ellipse(this.x + 10, this.y + 10, this.radius, this.radius);
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