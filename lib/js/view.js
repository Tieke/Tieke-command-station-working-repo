$(document).ready(function () {

  function StarcraftView() {
  };

  StarcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  StarcraftView.prototype.renderBotsTable = function(botArry) {
    var html = createBotTableHtml(botArry)
    $('#bots-table-container').append(html);
  };






var starcraftView = new StarcraftView();
starcraftView.renderLandscape(testGridData);
starcraftView.renderBotsTable(testBotsData);



});