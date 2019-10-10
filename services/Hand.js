const Card = require('./Card.js').Card;
const Deck = require('./Deck.js').Deck;

module.exports.Hand = class {

    constructor() {
        this.nbCards = 0;
        this.cards = new Array();
    }

    addCard(card) {
        this.cards.push(card);
        this.nbCards++;
    }

    removeCard(card) {
        this.cards.splice(this.cards.indexOf(card), 1);
        this.nbCards--;
    }

    getAmountCard() {
        return this.nbCards;
    }

    getCards() {
        return this.cards;
    }
}


