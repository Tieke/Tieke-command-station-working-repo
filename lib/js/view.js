$(document).ready(function () {

  function StarcraftView() {
  };

  StarcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  StarcraftView.prototype.renderBotsTable = function(first_argument) {
    // body...
  };







// var starcraftView = new StarcraftView();
// starcraftView.renderLandscape(testGridData);



});