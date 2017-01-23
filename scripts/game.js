var cols, rows;
var w = 20;
var grid = [];

function setup() {
	createCanvas(740, 740);
	cols = floor(width / w);
	rows = floor(height / w);

	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			var cell = new Cell(i, j);
			grid.push(cell)
		}
	}
}


function draw() {
	background(51);
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
}

function Cell(colNum, rowNum) {
	this.colNum = colNum;
	this.rowNum = rowNum;

	this.show = function() {
		var x = this.colNum * w;
		var y = this.rowNum * w;
		stroke(255);

		//walls
		noFill();
		rect(x, y, w, w);
	}
}