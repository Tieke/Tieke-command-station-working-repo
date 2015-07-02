function starcraftLandscapeModel(view) {
  this.view = view
  this.landscapeServer = "http://tieke-landscape-server.herokuapp.com"
  this.getLandscape();
}

starcraftLandscapeModel.prototype.getLandscape = function() {
  var self = this
  var endpoint = "/cells"
    $.ajax({
    type: "GET",
    url : self.landscapeServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    console.log(response);
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - getLandscape');
    console.log(err);
  })
}

starcraftLandscapeModel.prototype.postMineCell = function(post_data) {
  var self = this
  var endpoint = "/mine"
    $.ajax({
    type: "POST",
    url : self.landscapeServer + endpoint,
    data : post_data
  }).done(function (response) {
    console.log('YUS!');
    self.view.postMineCell(response);   
  }).fail(function (err) {
    alert('NOPE - postMineCell');
    console.log(err);
  })
}

starcraftLandscapeModel.prototype.postHarvestCell = function(post_data) {
  var self = this
  var endpoint = "/harvest"
    $.ajax({
    type: "POST",
    url : self.landscapeServer + endpoint,
    data : post_data
  }).done(function (response) {
    console.log('YUS!');
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - postHarvestCell');
    console.log(err);
  })
}

starcraftLandscapeModel.prototype.postLandscapeRestart = function() {
  var self = this
  var endpoint = "/restart"
    $.ajax({
    type: "POST",
    url : self.landscapeServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.postLandscapeRestart(response);   
  }).fail(function (err) {
    alert('NOPE - postLandscapeRestart');
    console.log(err);
  })
}

starcraftLandscapeModel.prototype.getCellInfomation = function(cell_coordinates) {
  var self = this
  var endpoint = "/cells/" + cell_coordinates[0] + "/" + cell_coordinates[1]
    $.ajax({
    type: "GET",
    url : self.landscapeServer + endpoint
  }).done(function (response) {
    console.log('YUS!');
    self.view.getCellInfomation(response);   
  }).fail(function (err) {
    alert('NOPE - getCellInfomation');
    console.log(err);
  })
}