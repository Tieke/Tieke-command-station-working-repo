function starcraftController() {
	this.starcraftView = new starcraftView();
	this.starcraftLandscapeModel = new starcraftLandscapeModel(this.starcraftView);
	this.starcraftBotsModel = new starcraftBotsModel(this.starcraftView);
}

starcraftController.prototype.createBot = function () {
	this.starcraftModel.generateBot();
}

starcraftController.prototype.feedBot = function (botId) {
	this.starcraftModel.feedBot();
}

starcraftController.prototype.deployBotToMine = function (botData, cellCoordinates) {
	postData = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y'],
		'bot_mining_xp' : botData['bot_mining_xp']
	}
	this.starcraftLandscapeModel.postMineCell(postData);
}

starcraftController.prototype.deployBotToHarvest = function (botId) {
	postData = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y'],
		'bot_harvesting_xp' : botData['bot_harvesting_xp']
	}
	this.starcraftLandscapeModel.postHarvestModel(postData);
}