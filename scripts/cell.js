function Cell(colNum, rowNum, doFill) {
	this.colNum = colNum;
	this.rowNum = rowNum;
	this.isBlocked = false;
	this.x;
	this.y;

	this.show = function() {
		this.x = this.colNum * w;
		this.y = this.rowNum * w;
		stroke(255);

		//temp to tell what blocks are no build
		if (doFill) {
			fill(0, 102, 102);
			this.isBlocked = true;
		} else {
			noFill()
		}

		rect(this.x, this.y, w, w);
	}
}