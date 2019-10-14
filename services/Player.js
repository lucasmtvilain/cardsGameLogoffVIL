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

    convertFromJson(Json){
        this.connexionId =Json.connexionId;
        this.username = Json.username ;
        this.emoji = Json.emoji ;
        this.joinAt = Json.joinAt ;
        this.GameId = Json.GameId;
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

    getHand() {
        return this.hand;
    }
    setEmoji(emoji){
        this.emoji = emoji;
    }
    setGameId(index){
        this.GameId = index;
    }
    setUserName(name){
        this.username = name;
    }

}