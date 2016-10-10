(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Simon = require('./../js/simone.js').game;

//UI
$(document).ready (function() {
  var thisTurn = 1;
  var totalTurns = 8;
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
  //start turn
  function takeTurn() {
    guess=0;
    guesses = 0;
    if(thisTurn>totalTurns) {
      //end game
      $('button#startbutton').removeAttr("disabled");
    }
    turnArray=game.thisTurn(thisTurn);
    //show sequence from current array
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


  //listen for clicks until number == array length
  $('div.1').click(function(){

    guess=1;
    if(turnArray[guesses]==guess) {
      // alert("Correct :)");
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
    if(turnArray[guesses]==guess) {
      //alert("Correct :)");
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
    if(turnArray[guesses]==guess) {
      //alert("Correct :)");
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
    if(turnArray[guesses]==guess) {
      //alert("Correct :)");
    } else {
      endGame();
    }
    guesses++;
    if(guesses==thisTurn) {
      thisTurn++;
      takeTurn();
    }
  });
});

function endGame() {
  alert("WRONG...YOU LOSE!!!! Better go to art school and learn your colors!");
  location.reload();
}

},{"./../js/simone.js":2}],2:[function(require,module,exports){
//Logic

function Simon (turns) {
  this.turns = turns;
  this.colors = [];
}

Simon.prototype.initialize = function () {
  for(var i=0; i<this.turns; i++) {
    this.colors[i]=Math.floor((Math.random() * 4) + 1);
  }
};

Simon.prototype.thisTurn = function(thisTurn) {
  return this.colors.slice(0,thisTurn);
};

exports.game = Simon;

},{}]},{},[1]);
