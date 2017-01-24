function Gem(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.level;

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		image(rock, this.x, this.y);
	}
}