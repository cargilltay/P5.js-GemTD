function Gem(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.type;
	this.quality;
	this.level;
	this.img = rock;
	this.isKept = false;

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(this.img, this.x, this.y);
	}

	this.generateType = function() {
		var randNum = Math.random();

		var tManager = curQualities;
		tManager.sortOnKeys(tManager);

		var tQualities = tManager.qualities;

		//console.log(Object.keys(tQualities).length)
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

		console.log(this.quality);
		console.log(this.type);
	}


	this.init = function() {
		this.type = this.generateType();
	}
}