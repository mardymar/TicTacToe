var turn = 'X';
var board = [];

for(var i = 0; i < 3; i++) {
  board.push([]);
  for(var j = 0; j < 3; j++) {
    board[i].push('');
  }
}

$( document ).ready(function() {
  $("#00").click(function(){
    $("#00").text(turn);
    flipTurn();
  });
  $("#01").click(function(){
    $("#01").text(turn);
    flipTurn();
  });
  $("#02").click(function(){
    $("#02").text(turn);
    flipTurn();
  });
  $("#10").click(function(){
    $("#10").text(turn);
    flipTurn();
  });
  $("#11").click(function(){
    $("#11").text(turn);
    flipTurn();
  });
  $("#12").click(function(){
    $("#12").text(turn);
    flipTurn();
  });
  $("#20").click(function(){
    $("#20").text(turn);
    flipTurn();
  });
  $("#21").click(function(){
    $("#21").text(turn);
    flipTurn();
  });
  $("#22").click(function(){
    $("#22").text(turn);
    flipTurn();
  });
});

var flipTurn = function() {
  turn = turn === 'X' ? 'O' : 'X';
};
