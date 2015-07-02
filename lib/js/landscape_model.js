function starcraftModel(view) {
  this.view = vieLandscapew
  this.landscapeServer = "http://tieke-landscape-server.herokuapp.com"
}

starcraftLandscapeModel.prototype.initialize = function () {
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
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - renderLandscape');
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
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - renderLandscape');
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
    alert('NOPE - renderLandscape');
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
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - renderLandscape');
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
    self.view.renderLandscape(response);   
  }).fail(function (err) {
    alert('NOPE - renderLandscape');
    console.log(err);
  })
}