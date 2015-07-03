function starcraftController() {
	this.starcraftView = new starcraftView();
	this.starcraftLandscapeModel = new starcraftLandscapeModel(this.starcraftView);
	this.starcraftBotsModel = new starcraftBotsModel(this.starcraftView);
}


starcraftController.prototype.newStockpile = function () {
	this.starcraftBotsModel.postStockpile();
}

starcraftController.prototype.createBot = function () {
	var self = this
	this.starcraftBotsModel.postCreateNewBot();
	setTimeout(function() {self.starcraftBotsModel.getStockpile();}, 700);
}

starcraftController.prototype.feedBot = function (botId) {
	var self = this
	food = {"food_amount" : 1}
	this.starcraftBotsModel.postBotFeed(botId, food);
	setTimeout(function() {self.starcraftBotsModel.getStockpile();}, 700);
}

starcraftController.prototype.deployBotToMine = function (botData, cellCoordinates) {
	var self = this
	postData = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1],
		'bot_mining_xp' : botData['bot_mining_xp']}
	this.starcraftLandscapeModel.postMineCell(postData);
	coordinates = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1]}
	this.starcraftBotsModel.postMineCell(botData["bot_id"], coordinates)
	setTimeout(function() {self.starcraftBotsModel.getStockpile();}, 700);

}

starcraftController.prototype.deployBotToHarvest = function (botData, cellCoordinates) {
	var self = this
	postData = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1],
		'bot_harvesting_xp' : botData['bot_harvesting_xp']}
	this.starcraftLandscapeModel.postHarvestCell(postData);

	coordinates = {
		'x' : cellCoordinates[0],
		'y' : cellCoordinates[1]}
	this.starcraftBotsModel.postHarvestCell(botData["bot_id"], coordinates)
	setTimeout(function() {self.starcraftBotsModel.getStockpile();}, 700);

}