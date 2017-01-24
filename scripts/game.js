var cols, rows;
var w = 20;
var grid = [];
var bg;

//top left, top right, bottom right, bottom left
var startSquare = [
	[0, 0],
	[10, 0],
	[10, 7],
	[0, 7]
];
var endSquare = [
	[28, 28],
	[37, 28],
	[37, 37],
	[28, 37]
];

var checkPoints = {
	"1": [5, 19],
	"2": [32, 19],
	"3": [32, 5],
	"4": [19, 5],
	"5": [19, 32]
};

function setup() {
  bg = loadImage("assets/background.jpg");
	var canvas = createCanvas(740, 740);
	canvas.parent("#my-canvas");
	cols = floor(width / w);
	rows = floor(height / w);

	//populate grid
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			//var rgb = [255, 255, 255];
			var fill = false;;
			for (var key in checkPoints) {
				var cp = checkPoints[key];
				if (cp[0] == i && cp[1] == j) {
					fill = true;
					break;
				}
			}
			var cell = new Cell(i, j, fill);
			grid.push(cell)
		}
	}


}


function draw() {
	//need node
  //background(bg);
	background(51);

	//show grid
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}
}

function Cell(colNum, rowNum, doFill) {
	this.colNum = colNum;
	this.rowNum = rowNum;

	this.show = function() {
		var x = this.colNum * w;
		var y = this.rowNum * w;
		stroke(255);

		//todo:
		//replace this with background image
		doFill ? fill(0, 102, 102) : noFill();
		//noFill();
		rect(x, y, w, w);
	}
}