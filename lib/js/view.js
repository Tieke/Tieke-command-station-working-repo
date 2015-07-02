// $(document).ready(function () {

  function starcraftView() {
  };

  starcraftView.prototype.renderLandscape = function(cellArray) {
    var html = createLandscapeHtml(cellArray)
    $('#landscape-container').append(html);
  };


  starcraftView.prototype.renderBotsTable = function(first_argument) {
    // body...
  };







// var starcraftView = new StarcraftView();
// starcraftView.renderLandscape(testGridData);



// });