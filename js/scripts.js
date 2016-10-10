//UI
$(document).ready (function() {
  var thisTurn = 1;
  var guess = 0;
  var guesses = 0;
  var game = new Simon(8);
  var turnArray=[];

  $('#start').submit(function() {
    // $('div.4').css("background", "#09A0F7");
    game.initialize();
    takeTurn();
    event.preventDefault();
  });
  //start turn
  function takeTurn() {
    turnArray=game.thisTurn(thisTurn);
    //show sequence from current array
    for(var i=0; i<turnArray.length; i++){
      if(turnArray[i]==1) {
        $('div.1').css("background", "#FD1704");
        window.setTimeout(function() {
					$('div.1').css("background", "#9E0000");
				}, 300);
      } else if (turnArray[i]==2) {
        $('div.2').css("background", "yellow");
        window.setTimeout(function() {
          $('div.2').css("background", "goldenrod");
        }, 300);
      } else if (turnArray[i]==3) {
        $('div.3').css("background", "#67F704");
        window.setTimeout(function() {
          $('div.3').css("background", "green");
        }, 300);
      } else if (turnArray[i]==4) {
        $('div.4').css("background", "#09A0F7");
        window.setTimeout(function() {
          $('div.4').css("background", "blue");
        }, 300);
      } else {
        //show error - should never get here
        console.log("invalid number in array");
      }
    }
  }


  //listen for clicks until number == array length
  $('div.1').click(function(){
    guess=1;
    // needs to see if the guess is right
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.2').click(function(){
    guess=2;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.3').click(function(){
    guess=3;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.4').click(function(){
    guess=4;
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
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

Simon.prototype.initialize = function () {
  for(var i=0; i<this.turns; i++) {
    this.colors[i]=Math.floor((Math.random() * 4) + 1);
  }
};

Simon.prototype.thisTurn = function(thisTurn) {
  return this.colors.slice(0,thisTurn);
}
