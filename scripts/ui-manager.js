function UIManager() {
	this.init = function() {
		this.initChancePanels();
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