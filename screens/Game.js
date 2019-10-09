import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.players}>
                    <Text>
                        Players
                    </Text>
                </View>
                <View style = {styles.game}>
                    <View style = {styles.deck}>
                        <Text>
                            Deck
                        </Text>
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
        backgroundColor: 'purple',
    },
    deck: {
        flex: 2,
        flexDirection: 'row',
        alignContent:'center',
        backgroundColor: 'brown',
    },
    pickaxe: {
        flex: 9,
        flexDirection: 'row',
        alignContent:'center',
        backgroundColor: 'red',
    },
    hand: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        backgroundColor: 'blue',
    },
});