module.exports.Player = class {

    constructor(connexionId, username,emoji,joinAt) {
        this.connexionId =connexionId;
        this.username = username ;
        this.emoji = emoji ;
        this.joinAt = joinAt ;
        this.GameId = null;
    }

    getConnexionId() {
        return this.connexionId;
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