// Game.js
//
//

var _ = require('lodash');

var setup = function(name){
    var game = {
        player_name: name
    }
    return game;
}

var setupGoals = function(game, n){
    var goals = Array.apply(null, new Array(n)).map(function() { return false; });
    game.goals = goals;
    return game
}

var scoreGoal = function(game, num){
    game.goals[num]++;
    return game;
}

exports.run_test = function(){
    var game = setup("Kenny Luong");
    setupGoals(game, 5);
    console.log(game);
}
