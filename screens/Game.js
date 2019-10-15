import React from "react";
import {StyleSheet, View, Text, Image, PanResponder} from "react-native";
import ComponantPlayer from '../Containers/ComponantPlayer';
import ComponentHand from '../Containers/ComponentHand';
// CL
import ComponentCard from '../Containers/ComponentCard';
import ComponentDeck from '../Containers/ComponentDeck';
// End CL

const Player = require('../services/Player').Player;
// CL
const Deck = require('../services/Deck').Deck;
const Hand = require('../services/Hand').Hand;
// End CL

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: new Player(1, "PannacaTarte", "><", "")
            // CL
            , currentDeck: new Deck()
            // End CL
        };
    }

    render() {
        this.test();
        let animatedDeck;
        if (this.state.currentDeck.getAmountCards() > 0) {
            animatedDeck = <ComponentCard/>;
        }

        return(
            <View style = {styles.container}>
                <View style = {styles.players}>
                    <ComponantPlayer/>

                </View>
                <View style = {styles.game}>
                    <View style = {styles.deck}>
                        <Text>
                            {/* CL */}
                            Nb cartes : {this.state.currentDeck.getAmountCards()}
                            {/* End CL */}
                        </Text>
                        {/* CL */}
                        {/*deck*/}
                        {animatedDeck}
                        {/* End CL */}
                    </View>

                    <View style = {styles.pickaxe}>
                        <Text>
                            Pickaxe
                        </Text>
                    </View>
                </View>

                <View style = {styles.hand}>
                    <ComponentHand playerHandJSON = {JSON.stringify(this.state.player.getHand().getCards())} />
                </View>
            </View>
        );
    }

    test() {
        var card1 = this.state.currentDeck.deal();
        var card2 = this.state.currentDeck.deal();
        var card3 = this.state.currentDeck.deal();

        this.state.player.getHand().addCard(card1);
        this.state.player.getHand().addCard(card2);
        this.state.player.getHand().addCard(card3);
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:40,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    players: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        backgroundColor: '#212121',
    },
    game: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        //backgroundColor: 'purple',
    },
    deck: {
        flex: 2,
        flexDirection: 'column',
        alignContent:'center',
        //backgroundColor: 'brown',
    },
    pickaxe: {
        flex: 9,
        flexDirection: 'row',
        alignContent:'center',
        //backgroundColor: 'red',
    },
    hand: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        alignItems:'center',
        //backgroundColor: 'blue',
    },
});