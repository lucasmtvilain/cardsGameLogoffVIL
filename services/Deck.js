//import Card from "./Card.js";
const Card = require('./Card.js').Card;

 module.exports.Deck = class {
    constructor() {
        this.deck = [];

        const suits = [0, 1, 2, 3]; //0 = Hearts, 1 = Spades, 2 = Clubs, 3 = Diamonds
        const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
        //0 = Ace, 1 = 2, [...], 12 = King
        //Image files : [#suit]_[#value].gif

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(new Card(suit, value));
            }
        }

        this.shuffle();
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            [deck[m], deck[i]] = [deck[i], deck[m]];
        }

        return this;
    }

    deal(){
        return this.deck.pop();
    }
}


