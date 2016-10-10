//UI
$(document).ready (function() {
  var thisTurn = 1;
  var guess = 0;
  var guesses = 0;
  var game = new Simon(8);
  var turnArray[];

  $('#start').submit(function() {
    Simon.initialize();
    takeTurn();
    event.preventDefault();
  });
  //start turn
  function takeTurn() {
    turnArray[]=Simon.turn(thisTurn);
    //show sequence from current array
    for(var i=0; i<turnArray.length(); i++){
      if(turnArray[i]==1) {
        //show bright red
      } else if (turnArray[i]==2) {
        //show bright yellow
      } else if (turnArray[i]==3) {
        //show bright green
      } else if (turnArray[i]==4) {
        //show bright blue
      } else {
        //show error - should never get here
        console.log("invalid number in array");
      }
    }
  }


  //listen for clicks until number == array length
  $('.red').onClick(function(){
    guess=1;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      //get next turn
    }
  });
  $('.yellow').onClick(function(){
    guess=2;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      //get next turn
    }
  });
  $('.green').onClick(function(){
    guess=3;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      //get next turn
    }
  });
  $('.blue').onClick(function(){
    guess=4;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      //get next turn
    }
  });


  // --OR--
  //click is wrong color
  //end of game

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
