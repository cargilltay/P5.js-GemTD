var cols, rows;
var bg;
var rock;
var grid = [];
var gems = [];
var minions = [];
var w = 20;
var numMinions = 10;
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

var uiManager = new UIManager();
var curQualities = new QualityManager();
var nextQualities = new QualityManager();


function init() {
	nextQualities.updateQuality(2);
	bindHandlers();
	setupUI();
}

function setupUI() {
	uiManager.init();
}

function bindHandlers() {
	$('#new-gem').on('click', function() {
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
			$(checkPoints).each(function() {
				var point = this;
				var fill = false;
				$(point).each(function() {
					var c = this;
					if (c[0] == i && c[1] == j) {
						fill = true;
						return false;
					}
				})
				var cell = new Cell(i, j, fill);
				grid.push(cell)
			})
		}
	}

	//add minions
	var offset = 0;
	for (var i = 0; i < numMinions; i++) {
		var m = new Minion(offset);
		minions.push(m);
		offset -= 40;
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
	//if (roundInProgress) {
	moveMinions()
		//}
}

function mouseClicked() {
	//return if not in canvas
	if (mouseX > canvasWidth || mouseX < 0 || mouseY > canvasHeight || mouseY < 0) {
		return;
	}

	//place rock (random gem)
	if (placeRock) {
		var closest = closestCell(mouseX, mouseY);
		if (!closest.isBlocked) {
			var newGem = new Gem(closest.x, closest.y);
			newGem.init();
			gems.push(newGem)
			closest.isBlocked = true;
			placeRock = false;
		}
	}
}

function moveMinions() {
	$(minions).each(function() {
		this.show();
		this.updatePosition();
	})
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