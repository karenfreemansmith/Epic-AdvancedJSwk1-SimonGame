var Simon = require('./../js/simone.js').game;

//UI
$(document).ready (function() {
  var thisTurn = 1;
  var totalTurns = 3;
  var guess = 0;
  var guesses = 0;
  var game = new Simon(totalTurns);
  var turnArray=[];

  $('#start').submit(function() {
    game.initialize();
    takeTurn();
    $('button#startbutton').attr("disabled", "enabled");
    event.preventDefault();
  });
  function takeTurn() {
    guess=0;
    guesses = 0;
    turnArray=game.thisTurn(thisTurn);
    var i=0;
    myVar=setInterval(function (){
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
          $('div.4').css("background", "#99d6ff");
          window.setTimeout(function() {
            $('div.4').css("background", "blue");
          }, 300);
        } else {
          //show error - should never get here
          console.log("invalid number in array");
        }
      i++;
      if(i>=turnArray.length) {
        clearInterval(myVar);
      }
    }, 500);
  }

  $('div.1').click(function(){
    guess=1;
    window.setTimeout(function() {
      $('div.1').css("background", "#9E0000");
    }, 300);
    if(turnArray[guesses]==guess) {
    } else {
      endGame();
    }
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.2').click(function(){
    guess=2;
    window.setTimeout(function() {
      $('div.2').css("background", "goldenrod");
    }, 300);
    if(turnArray[guesses]==guess) {
    } else {
      endGame();
    }
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.3').click(function(){
    guess=3;
    window.setTimeout(function() {
      $('div.3').css("background", "green");
    }, 300);
    if(turnArray[guesses]==guess) {
    } else {
      endGame();
    }
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
  $('div.4').click(function(){
    guess=4;
    window.setTimeout(function() {
      $('div.4').css("background", "blue");
    }, 300);
    if(turnArray[guesses]==guess) {
    } else {
      endGame();
    }
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });

  if(thisTurn>=totalTurns) {
    endGame();
  }

  function endGame() {
    if(thisTurn>=totalTurns) {
      alert("CONGRATULATIONS, YOU WIN!!!");
    } else {
      alert("WRONG...YOU LOSE!!!! Better go to art school and learn your colors!");
    }
    location.reload();
  }
});
