function starcraftModel(view) {
  this.view = view
  this.landscapeServer = "http://tieke-landscape-server.herokuapp.com"
  this.botServer = "http://tieke-bot-server.herokuapp.com"
}

starcraftModel.prototype.postStockpile = function() {
  var self = this
  var endpoint = "/stockpile"
    $.ajax({
    type: "POST",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.renderStockpile(response);   
  }).fail(function (err) {
    alert('NOPE - postStockpile');
    console.log(err);
  })
}

starcraftModel.prototype.getLandscape = function() {
  var self = this
  var endpoint = "/cells"
    $.ajax({
    type: "GET",
    url : self.landscapeServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - renderLandscape');
    console.log(err);
  })
}

starcraftModel.prototype.getStockpile = function() {
  var self = this
  var endpoint = "/stockpile"
    $.ajax({
    type: "GET",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.renderStockpile(response);   
  }).fail(function (err) {
    alert('NOPE - renderStockpile');
    console.log(err);
  })
}

starcraftModel.prototype.getBotsTable = function() {
  var self = this
  var endpoint = "/bots"
    $.ajax({
    type: "GET",
    url : self.botServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.renderBotsTable(response);   
  }).fail(function (err) {
    alert('NOPE - renderBotsTable');
    console.log(err);
  })
}



