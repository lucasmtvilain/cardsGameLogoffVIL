import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'
import Emoji from 'react-native-emoji';
const Player = require('../services/Player').Player;
const StorePlayer = require('../services/StorePlayer').StorePlayer;

class ComponantPlayer extends React.Component {

    constructor(props) {
        super(props);

        // Si pas de profile joueurs
        const joueur = new Player(0, "Non Connecter","tomato","");
        let storePlayer = new StorePlayer();

        this.state = {
            Pseudo: joueur.getUsername(),
            NbCards : '5',
            Player :joueur,
            filter: joueur.getEmoji(),
        };

        storePlayer._storeGetPlayer().then(result=>{
            let newPlayer = new Player(0, "Non Connecter","tomato","");

            newPlayer.convertFromJson(JSON.parse(result));

            this.setState({Player : newPlayer})
            this.setState({Pseudo:newPlayer.getUsername()})
            this.setState({filter: newPlayer.getEmoji()});
        });
    }

    render() {
        return (

            <View style={ styles.container }>
                <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                    <Emoji name={this.state.filter || "tomato"} style={{fontSize: 30}} />
                    <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                        <Text style={ styles.textStyle }>
                            {this.state.Pseudo}
                        </Text>
                        <Text style={ styles.textStyle }>
                            {this.state.NbCards}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {

        height: 50,
        backgroundColor: '#b6b6b6',
        borderColor:'#212121',
        borderWidth: 3,
        borderRadius:7
    },
    textStyle: {
        marginBottom:2,
        marginLeft:5,
        fontWeight: 'bold',
        fontSize:15,
    }

});

export default ComponantPlayer