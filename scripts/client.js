var cols, rows;
var bg;
var rock;
var grid = [];
var w = 20;
var canvasWidth = 740;
var canvasHeight = 740;
var placeRock = false;
var roundInProgress = false;
var showGrid = true;

var uiManager = new UIManager();
var curQualities = new QualityManager();
var nextQualities = new QualityManager();
var game = new Game();

function init() {
	nextQualities.updateQuality(game.gemQuality + 1);
	bindHandlers();
	setupUI();
}

function setupUI() {
	uiManager.init();
}

function bindHandlers() {
	$('#new-gem').on('click', function() {
		placeRock = true;
	})

	$('#show-grid input').on('change', function() {
		showGrid = this.checked;
	})

	$('#upgrade-chances').on('click', function(){
		//mvp --> future
		//reduce redundance of gemQuality

		//add if gold < price return;
		//update config quality
		game.gemQuality++;
		curQualities.updateQuality(game.gemQuality);
		nextQualities.updateQuality(game.gemQuality + 1);

		//update ui quality
		uiManager.updateChancePanel($('#current-chances'), game.gemQuality, curQualities);
		uiManager.updateChancePanel($('#next-chances'), game.gemQuality + 1, nextQualities);
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
	populateGrid();

	//populate minions
	populateMinions();
}

function draw() {
	background(bg);


	if (placeRock) {
		image(rock, mouseX, mouseY);
	}

	//show grid
	if (showGrid) {
		for (var i = 0; i < grid.length; i++) {
			grid[i].show();
		}
	}

	//show gems
	for (var i = 0; i < game.gems.length; i++) {
		game.gems[i].show();
		game.gems[i].fireProjectiles();
	}

	//show monsters
	//if (roundInProgress) {
	moveMinions()
		//}
}

function populateMinions() {
	var offset = 0;
	for (var i = 0; i < game.numMinions; i++) {
		var m = new Minion(offset);
		game.minions.push(m);
		offset -= 40;
	}
}

function populateGrid() {
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			var fill = false;
			$(checkPoints).each(function() {
				var point = this;
				var continueOn = false;
				$(point).each(function() {
					var c = this;
					if (c[0] == i && c[1] == j) {
						fill = true;
						continueOn = true;
						return false;
					}
				})
				if (continueOn) {
					return false;
				}
			})
			var cell = new Cell(i, j, fill);
			grid.push(cell)
		}
	}
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
			game.gems.push(newGem)
			closest.isBlocked = true;
			placeRock = false;
		}
	}
}

function moveMinions() {
	var minionNum = 0;
	$(game.minions).each(function() {
		if(this.isDead){
			console.log("dead")
			game.minions.splice(minionNum, 1)
			return;
		}
		this.show();
		this.updatePosition();
		minionNum++;
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