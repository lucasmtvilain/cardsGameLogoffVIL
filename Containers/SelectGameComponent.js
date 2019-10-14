import React from "react";
import { SearchBar } from 'react-native-elements';
const Game = require('../services/Game').Game;
import { Text,ScrollView, View,Button,KeyboardAvoidingView} from 'react-native';
const Player = require('../services/Player').Player;
const StorePlayer = require('../services/StorePlayer').StorePlayer;

export default class SelectGameComponent extends React.Component {


    constructor(props){
        super(props);



        let game1 = new Game(0, "Game 1",4,"","Player1");
        let game2 = new Game(1, "Game 2",3,"","Player2");
        let game3 = new Game(2, "Game 3",5,"","Player3");
        let game4 = new Game(3, "Partie",5,"","Player3");
        let game5 = new Game(4, "Game 4",3,"","Player2");
        let game6 = new Game(5, "Game 5",5,"","Player3");
        let game7 = new Game(6, "Partie 2",5,"","Player3");

         let listGame = new Array();
        listGame.push(game1);
        listGame.push(game2);
        listGame.push(game3);
        listGame.push(game4);
        listGame.push(game5);
        listGame.push(game6);
        listGame.push(game7);



        this.state = {
            search: '',
            player : new Player(0, "","",""),
            listGame:listGame,
            store : new StorePlayer(),
            navigation : this.props.navigation,
        };

        let storePlayer = new StorePlayer();
        storePlayer._storeGetPlayer().then(result=>{
            this.state.player.convertFromJson(JSON.parse(result));
        });

    }

    _SelectGame(index){
        this.state.player.setGameId(JSON.parse(index));
        this.state.store._storeRegister(this.state.player);// enregistrement du contacte modifier
        this.state.navigation.navigate('Game');
    }




    updateSearch = search => {
        this.setState({ search });
    };

    _AfficheGame(){


        return this.state.listGame.map((item,keyId) =>  {
            if(item.GameName.includes(this.state.search)){
                return(<View key={keyId}>
                    <Button title = {item.GameName} onPress={() => this._SelectGame(item.gameId)} styles = {{backgroundColor: '#cdcdcd'}}/>
                    </View>)
            }
        })
    }


    render() {
        const { search } = this.state;

        return (
            <View>
                <KeyboardAvoidingView>
            <SearchBar
                placeholder="Select your game"
                onChangeText={this.updateSearch}
                value={search}
            />
            <ScrollView>
                {this._AfficheGame()}
            </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


