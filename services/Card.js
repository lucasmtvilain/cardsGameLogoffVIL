module.exports.Card = class {

    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    getSuit() {
        return this.suit;
    }

    getValue() {
        return this.value;
    }

}