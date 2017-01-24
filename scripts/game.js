var cols, rows;
var bg;
var minionImg;
var rock;
var grid = [];
var gems = [];
var minions = [];
var w = 20;
var canvasWidth = 740;
var canvasHeight = 740;
var placeRock = false;
var roundInProgress = false;
var qualityLevel = 1;
var difficulty;
var level;
var lives;
var gold;
var time;
var score;

var qualityLevels {
	"chipped": 100,
	"flawed": 0,
	"normal": 0,
	"flawless": 0,
	"perfect": 0
}

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

function init() {
	bindHandlers();
}

function bindHandlers() {
	$('#new-gem').on('click', function() {
		placeRock = true;
		//$('#my-canvas').css( 'cursor', 'url(assets/rock_converted.png), auto' );
	})
}

function setup() {
	bg = loadImage("assets/background.png");
	minionImg = loadImage("assets/minion.png");
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
	//need node.js
	background(bg);


	if (placeRock) {
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

	//show monsters
	if (roundInProgress) {
		for (var i = 0; i < minions.length; i++) {
			minions[i].show();
		}
	}
}

function mouseClicked() {
	//return if not in canvas
	if (mouseX > canvasWidth || mouseX < 0 || mouseY > canvasHeight || mouseY < 0) {
		return;
	}
	if (placeRock) {
		var closest = closestCell(mouseX, mouseY);
		if (!closest.isBlocked) {
			gems.push(new Gem(closest.x, closest.y))
			closest.isBlocked = true;
			placeRock = false;
		}
	}
}

function moveMinion() {
	$(minions).each(function() {
		this.show();
		this.updatePosition();
	})
}

function updateQuality(level) {
	var chipped = 0;
	var flawed = 0;
	var normal = 0;
	var flawless = 0;
	var perfect = 0;

	switch (level) {
		case 2:
			//20g
			chipped = 70;
			flawed = 30;
			break;
		case 3:
			//50
			chipped = 60;
			flawed = 30;
			normal = 10;
			break;
		case 4:
			//80
			chipped = 50;
			flawed = 30;
			normal = 20;
			break;
		case 5:
			//110
			chipped = 50;
			flawed = 30;
			normal = 20;
			flawless = 10;
			break;
		case 6:
			//140
			chipped = 30;
			flawed = 30;
			normal = 30;
			flawless = 10;
			break;
		case 7:
			//170
			chipped = 20;
			flawed = 30;
			normal = 30;
			flawless = 20;
			break;
		case 8:
			//200g
			chipped = 10;
			flawed = 30;
			normal = 30;
			flawless = 30;
			break;
		case 9:
			//230g
			flawed = 30;
			normal = 30;
			flawless = 30;
			perfect = 10;
			break;
	}
	qualityLevels.chipped = chipped;
	qualityLevels.flawed = flawed;
	qualityLevels.normal = normal;
	qualityLevels.flawless = flawless;
	qualityLevels.perfect = perfect;
}

function closestCell(x, y) {
	var cell = null;
	$(grid).each(function() {
		var modx = x - (x % 20);
		var mody = y - (y % 20);
		if (this.x == modx && this.y == mody) {
			cell = this;
			return false;
		}
	})
	return cell;
}