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
