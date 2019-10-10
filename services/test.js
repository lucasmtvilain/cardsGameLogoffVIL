const Card = require('./Card.js').Card;
const Deck = require('./Deck.js').Deck;
const Player = require('./Player.js').Player;
const Hand = require('./Hand.js').Hand;

var player1 = new Player(0, "aa", "^^", 0);
var deck1 = new Deck();

var card = deck1.deal();

player1.getHand().addCard(card);

//console.log(player1.getHand());

/*for (var key in player1.getHand()) {
    // skip loop if the property is from prototype
    if (!player1.getHand().hasOwnProperty(key)) continue;

    var obj = validation_messages[key];
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) continue;

        // your code
        alert(prop + " = " + obj[prop]);
    }
}*/

