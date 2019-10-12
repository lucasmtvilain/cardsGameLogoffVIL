import React from "react";
import { SearchBar } from 'react-native-elements';
const Game = require('../services/Game').Game;
import {Image, Text, View,} from 'react-native';

export default class SelectGameComponent extends React.Component {

    constructor(props){
        super(props);



        let game1 = new Game(0, "Game 1",4,"","Player1");
        let game2 = new Game(1, "Game 2",3,"","Player2");
        let game3 = new Game(2, "Game 3",5,"","Player3");
        let game4 = new Game(3, "Partie",5,"","Player3");

         let listGame = new Array();
        listGame.push(game1);
        listGame.push(game2);
        listGame.push(game3);
        listGame.push(game4);


        this.state = {
            search: '',
            listGame:listGame,
        };

    }




    updateSearch = search => {
        this.setState({ search });
    };

    _AfficheGame(){
        return this.state.listGame.map((item,keyId) =>  {
            if(item.GameName.includes(this.state.search)){
                return(<View key={keyId}><Text style={{height: 50, backgroundColor: 'red'}}>{item.GameName}</Text></View>)
            }
        })
    }


    render() {
        const { search } = this.state;

        return (
            <View>
            <SearchBar
                placeholder="Select your game"
                onChangeText={this.updateSearch}
                value={search}
            />
                {this._AfficheGame()}
            </View>
        );
    }
}


