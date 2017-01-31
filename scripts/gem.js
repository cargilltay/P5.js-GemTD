function Gem(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.type;
	this.level;

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(rock, this.x, this.y);
	}

	this.generateType = function(){
		var randNum = Math.random();

		var tQuality = curQualities;
		tQuality.sortOnKeys(tQuality);

		console.log(tQuality);
	}


	this.init = function(){
		this.type = this.generateType();
	}
}