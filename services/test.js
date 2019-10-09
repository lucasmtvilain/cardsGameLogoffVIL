const Deck = require('./Deck.js').Deck;
//import Deck from "./Deck.js";

var deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);
deck1.deal();
console.log(deck1.deck);