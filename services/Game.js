const Player = require('./Player.js').Player;

module.exports.Game = class{

    constructor(gameId, GameName,maxPlayer,createAt,Player) {
        this.gameId;
        this.GameName = GameName;
        this.maxPlayer = maxPlayer;
        this.createAt = createAt;
        this.ListPlayer = [maxPlayer]; //Tableau de player égale au nb joueurs max

        //On ajoute le créateur à la partie
        this.ListPlayer.push(Player);
    }

    _addPlayer(player){
        this.ListPlayer.push(Player);
    }
}