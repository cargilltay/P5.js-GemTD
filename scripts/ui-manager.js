function UIManager() {
	this.init = function() {
		this.initChancePanels();
	}

	this.initChancePanels = function() {
		$('#current-chances .panel-body').append(this.generateChanceHTML())
		$('#next-chances .panel-body').append(this.generateChanceHTML())
		this.updateChancePanel($('#current-chances'), 0);
		this.updateChancePanel($('#next-chances'), 0);
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

	this.updateChancePanel = function(panel, currentUpgrade) {
		panel.find('.chipped-percent .percent').text(qualityLevels["chipped"] + '%');
		panel.find('.flawed-percent .percent').text(qualityLevels["flawed"] + '%');
		panel.find('.normal-percent .percent').text(qualityLevels["normal"] + '%');
		panel.find('.flawless-percent .percent').text(qualityLevels["flawless"] + '%');
		panel.find('.perfect-percent .percent').text(qualityLevels["perfect"] + '%');
	}
}