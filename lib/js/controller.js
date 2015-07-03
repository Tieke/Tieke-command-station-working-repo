function starcraftController() {
	this.starcraftView = new starcraftView();
	this.starcraftLandscapeModel = new starcraftLandscapeModel(this.starcraftView);
	this.starcraftBotsModel = new starcraftBotsModel(this.starcraftView);
}

starcraftController.prototype.createBot = function () {
	this.starcraftBotsModel.postCreateNewBot();
}

starcraftController.prototype.feedBot = function (botId) {
	food = {"food_amount" : 1}
	this.starcraftBotsModel.postBotFeed(botId, food);
	this.starcraftBotsModel.getStockpile();
}

starcraftController.prototype.deployBotToMine = function (botData, cellCoordinates) {
	postData = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1],
		'bot_mining_xp' : botData['bot_mining_xp']}
	this.starcraftLandscapeModel.postMineCell(postData);
	coordinates = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1]}
	this.starcraftBotsModel.postMineCell(botData["bot_id"], coordinates)
	this.starcraftBotsModel.getStockpile();

}

starcraftController.prototype.deployBotToHarvest = function (botData, cellCoordinates) {
	postData = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1],
		'bot_harvesting_xp' : botData['bot_harvesting_xp']}
	this.starcraftLandscapeModel.postHarvestCell(postData);

	coordinates = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1]}
	this.starcraftBotsModel.postHarvestCell(botData["bot_id"], coordinates)
	this.starcraftBotsModel.getStockpile();

}