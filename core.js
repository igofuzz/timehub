var mainState = {
  preload: function() {
    //Preloaded Assets
  },
  create: function() {
    //Here be the actual game
  },
  update: function() {
    //Here we update the game at 60fps
  },

};

//Initialise the game and start our state
var game = new Phaser.Game(500, 200);
game.state.add('main', mainState);
game.state.start('main');