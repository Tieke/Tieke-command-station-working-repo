function starcraftBotsModel(view) {
  this.view = view
  this.botServer = "http://tieke-bot-server.herokuapp.com"
  this.getBotsTable();
  this.getStockpile();
}

starcraftBotsModel.prototype.postStockpile = function() {
  var self = this
  var endpoint = "/stockpile"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!- postStockpile');
    self.view.renderStockpile(response);
  }).fail(function (err) {
    alert('NOPE - postStockpile');
    console.log(err);
  })
}

starcraftBotsModel.prototype.getStockpile = function() {
  var self = this
  var endpoint = "/stockpile"
    $.ajax({
    type: "GET",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!- getStockpile');
    console.log("getStockpile: ", response)
    self.view.renderStockpile(response);
  }).fail(function (err) {
    alert('NOPE - getStockpile');
    console.log(err);
  })
}

starcraftBotsModel.prototype.getBotsTable = function() {
  var self = this
  var endpoint = "/bots"
    $.ajax({
    type: "GET",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!- getBotsTable');
    self.view.renderBotsTable(response);
  }).fail(function (err) {
    alert('NOPE - getBotsTable ');
    console.log(err);
  })
}

starcraftBotsModel.prototype.getBotInformation = function(bot_information) {
  var self = this
  var endpoint = "/bots/" + bot_information[0]
    $.ajax({
    type: "GET",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!- getBotInformation');
    self.view.renderBotInformation(response);
  }).fail(function (err) {
    alert('NOPE - getBotInformation');
    console.log(err);
  })
}

starcraftBotsModel.prototype.postCreateNewBot = function() {
  var self = this
  var endpoint = "/bots"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!- postCreateNewBot');
    self.view.createNewBot(response);
  }).fail(function (err) {
    alert('NOPE - postCreateNewBot');
    console.log(err);
  })
}

starcraftBotsModel.prototype.postMineCell = function(botId, coordinates) {
  console.log(coordinates)
  var self = this
  var endpoint = "/bots/" + botId + "/mine"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint,
    data : coordinates
  }).done(function (response) {
    console.log('YUS!- postMineCell');
    console.log("bot server response: ", response)
    self.view.updateBotsTableRow(response);
  }).fail(function (err) {
    alert('NOPE - postMineCell');
    console.log(err);
  })
}

starcraftBotsModel.prototype.postHarvestCell = function(botId, coordinates) {
  var self = this
  var endpoint = "/bots/" + botId + "/harvest"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint,
    data : coordinates
  }).done(function (response) {
    console.log('YUS!- postHarvestCell');
    self.view.updateBotsTableRow(response);
  }).fail(function (err) {
    alert('NOPE - postHarvestCell');
    console.log(err);
  })
}

starcraftBotsModel.prototype.postBotFeed = function(botId, food_amount) {
  var self = this
  var endpoint = "/bots/" + botId + "/feed"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint,
    data : food_amount
  }).done(function (response) {
    console.log('YUS!- postBotFeed');
    self.view.updateBotsTableRow(response[0]);
  }).fail(function (err) {
    alert('NOPE - postBotFeed');
    console.log(err);
  })
}