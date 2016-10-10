//UI
$(document).ready (function() {
  var thisTurn = 1;
  var game = new Simon(8);
  $('#start').submit(function() {
    Simon.initialize();
    event.preventDefault();
  });
  //start turn
  //show sequence from current array
  //listen for clicks until number == array length
  //next turn
  // --OR--
  //click is wrong color
  //end of game
  $('.red').onClick(function(){

  });
  $('.yellow').onClick(function(){

  });
  $('.green').onClick(function(){

  });
  $('.blue').onClick(function(){

  });
});

//Logic

function Simon (turns) {
  this.turns = turns;
  this.colors = [];
};

Simon.prototype.initialize() = function () {
  for(var i=0; i<this.turns; i++) {
    this.colors[i]=Math.floor((Math.random() * 4) + 1);
  }
});

Simon.prototype.turn(thisTurn) = function() {
  return this.colors.slice(thisTurn);
}
