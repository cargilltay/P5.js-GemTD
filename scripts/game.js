var cols, rows;
var bg;
var rock;
var grid = [];
var gems = [];
var w = 20;
var canvasWidth = 740;
var canvasHeight = 740;
var placeRock = false;

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

function init(){
	bindHandlers();
}

function bindHandlers(){
	$('#new-gem').on('click', function(){
		placeRock = true;
		//$('#my-canvas').css( 'cursor', 'url(assets/rock_converted.png), auto' );
	})
}

function setup() {
  bg = loadImage("assets/background.png");
  rock = loadImage('assets/rock_converted.png');
	var canvas = createCanvas(canvasWidth, canvasHeight);
	init();
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
  background(bg);
	if(placeRock){
		image(rock, mouseX, mouseY);
	}
	//background(51);

	//show grid
	for (var i = 0; i < grid.length; i++) {
		grid[i].show();
	}

	//show gems
	for (var i = 0; i < gems.length; i++) {
		gems[i].show();
	}
}

function mouseClicked(){
	//return if not in canvas
	if(mouseX > canvasWidth || mouseX < 0 || mouseY > canvasHeight || mouseY < 0){
		return;
	}
	if(placeRock){
		var closest = closestCell(mouseX, mouseY);
		gems.push(new Gem(closest.x,closest.y))
		closest.isBlocked = true;
		placeRock = false;
	}
}

function closestCell(x,y){
	var cell = null;
	$(grid).each(function(){
		var modx = x - (x % 20);
		var mody = y - (y % 20);
		if(this.x == modx && this.y == mody){
			cell = this;
			return false;
		}
	})
	return cell;
}

function Gem(colNum, rowNum){
	this.colNum = colNum;
	this.rowNum = rowNum;

	this.show = function() {
		this.x = this.colNum;
		this.y = this.rowNum;
		//stroke(255);

		//todo:
		//replace this with background image
		//doFill ? fill(0, 102, 102) : noFill();
		//noFill();
		//fill(0, 102, 102)
		image(rock, this.x, this.y);
		//rect(this.x, this.y, w, w);
	}
}

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

		//todo:
		//replace this with background image
		doFill ? fill(0, 102, 102) : noFill();
		//noFill();
		rect(this.x, this.y, w, w);
	}
}