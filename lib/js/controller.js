function starcraftController() {
	this.starcraftView = new starcraftView();
	this.starcraftLandscapeModel = new starcraftLandscapeModel(this.starcraftView);
	this.starcraftBotsModel = new starcraftBotsModel(this.starcraftView);
}

starcraftController.prototype.createBot = function () {
	this.starcraftBotsModel.postCreateNewBot();
}

starcraftController.prototype.feedBot = function (botId, food_amount) {
	food = {"food_amount" : food_amount}
	this.starcraftBotsModel.postBotFeed(botId, food);
}

starcraftController.prototype.deployBotToMine = function (botData, cellCoordinates) {
	postData = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y'],
		'bot_mining_xp' : botData['bot_mining_xp']}
	this.starcraftLandscapeModel.postMineCell(postData);

	coordinates = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y']}
	this.starcraftBotsModel.postMineCell(botData["bot_id"], coordinates)
}

starcraftController.prototype.deployBotToHarvest = function (botData, cellCoordinates) {
	postData = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y'],
		'bot_harvesting_xp' : botData['bot_harvesting_xp']}
	this.starcraftLandscapeModel.postHarvestCell(postData);

	coordinates = {
		'x_coordinate' : cellCoordinates['x'],
		'y_coordinate' : cellCoordinates['y']}
	this.starcraftBotsModel.postHarvestCell(botData["bot_id"], coordinates)
}