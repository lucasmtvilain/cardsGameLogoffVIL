import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import ComponantPlayer from '../Containers/ComponantPlayer';
// CL
import ComponentCard from '../Containers/ComponentCard';
import ComponentDeck from '../Containers/ComponentDeck';
// End CL

const Player = require('../services/Player').Player;
// CL
const Deck = require('../services/Deck').Deck;
// End CL

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player : new Player(1, "PannacaTarte","><","")
            // CL
            , currentDeck : new Deck()
            // End CL
        };
    }

    render() {
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
                        <View style = {styles.deckCards}>
                            <Image
                                style={{flex:1, width: 100}}
                                source={require('../assets/images/Cards/card_face_down.jpg')}
                            />
                        </View>

                        {/* End CL */}
                    </View>

                    <View style = {styles.pickaxe}>
                        <Text>
                            Pickaxe
                        </Text>
                    </View>
                </View>

                <View style = {styles.hand}>
                    <Text>
                        Hand
                    </Text>
                </View>
            </View>
        );
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
        backgroundColor: 'pink',
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
    deckCards: {
        flex: 1,
        flexDirection: 'row',
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
        backgroundColor: 'blue',
    },
});