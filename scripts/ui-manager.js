function UIManager() {
	this.showGrid = true;
	this.placeRock = false;

	this.init = function() {
		this.controlMenuButtons(true);
		this.initChancePanels();
		this.showGameMenu();
		this.bindEventHandlers();
	}

	this.controlMenuButtons = function(disabled) {
		$('#menu-buttons button').prop("disabled", disabled);
	}

	this.showGameMenu = function() {

	}

	this.bindEventHandlers = function() {
		var _this = this;
		$('#new-gem').on('click', function() {
			_this.placeRock = true;
		})

		$('#show-grid input').on('change', function() {
			_this.showGrid = this.checked;
		})

		$('#game-menu-options a').on('click', function() {
			$('#game-menu').hide()
			uiManager.controlMenuButtons(false)
			game.hasBegun = true;
		})

		$('#upgrade-chances').on('click', function() {
			//mvp --> future
			//reduce redundance of gemQuality

			//add if gold < price return;
			//update config quality
			game.gemQuality++;
			curQualities.updateQuality(game.gemQuality);
			nextQualities.updateQuality(game.gemQuality + 1);
			var curCost = upgradeCosts[game.gemQuality];
			var nexCost = upgradeCosts[game.gemQuality - 1]

			//update ui quality
			uiManager.updateChancePanel($('#current-chances'), game.gemQuality, curQualities, curCost);
			uiManager.updateChancePanel($('#next-chances'), game.gemQuality + 1, nextQualities, nexCost);
		})
	}

	this.initChancePanels = function() {
		$('#current-chances .panel-body').append(this.generateChanceHTML())
		$('#next-chances .panel-body').append(this.generateChanceHTML())
		this.updateChancePanel($('#current-chances'), 0, curQualities, null);
		this.updateChancePanel($('#next-chances'), 0, nextQualities, upgradeCosts[0]);
	}

	this.generateChanceHTML = function() {
		var chanceHTML = '<div class="gem-percents">' +
			'<ul>' +
			'<li class="chipped-percent">Chipped: <span class="percent"></span></li>' +
			'<li class="flawed-percent">Flawed: <span class="percent"></span></li>' +
			'<li class="normal-percent">Normal: <span class="percent"></span></li>' +
			'<li class="flawless-percent">Flawless: <span class="percent"></span></li>' +
			'<li class="perfect-percent">Perfect: <span class="percent"></span></li>' +
			'</ul>' +
			'<div>';
		return chanceHTML;
	}

	this.updateChancePanel = function(panel, currentUpgrade, qualityType, cost) {
		if (panel.attr('id') == "next-chances") {
			if (cost) {
				panel.find('.panel-title .cost').text(cost + 'g');
			}
			if (currentUpgrade == 9) {
				panel.find('.panel-body').prepend('<h6 class="error-text">MAX CHANCES!</h6>');
			}
		}

		//test
		panel.find('.chipped-percent .percent').text(qualityType.qualities["chipped"] + '%');
		panel.find('.flawed-percent .percent').text(qualityType.qualities["flawed"] + '%');
		panel.find('.normal-percent .percent').text(qualityType.qualities["normal"] + '%');
		panel.find('.flawless-percent .percent').text(qualityType.qualities["flawless"] + '%');
		panel.find('.perfect-percent .percent').text(qualityType.qualities["perfect"] + '%');
	}
}