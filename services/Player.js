const Hand = require('./Hand.js').Hand;

module.exports.Player = class {

    constructor(connexionId, username,emoji,joinAt) {
        this.connexionId =connexionId;
        this.username = username ;
        this.emoji = emoji ;
        this.joinAt = joinAt ;
        this.hand = new Hand();
        this.GameId = null;
    }

    getConnexionId() {
        return this.connexionId;
    }
    getCardsNum(){
        return this.CardsNum;
    }

    getUsername() {
        return this.username;
    }

    getEmoji() {
        return this.emoji;
    }

    getJoinAt() {
        return this.joinAt;
    }

    getGameId(){
        return this.GameId;
    }
    setGameId(GameId){
        this.GameId = GameId;
    }

}