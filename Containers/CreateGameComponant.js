import React, {Component} from "react";
import {Alert, Button, Modal, Text, TouchableHighlight, View,TextInput} from "react-native";
const Game = require('../services/Game').Game;
const Player = require('../services/Player').Player;
const StorePlayer = require('../services/StorePlayer').StorePlayer;

export default class CreateGameComponant extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
            nomGame : "",
            nbPlayer:1,
            player : new Player(0, "","",""),
        });

        let storePlayer = new StorePlayer();
        storePlayer._storeGetPlayer().then(result=>{
            this.state.player.convertFromJson(JSON.parse(result));
        });
    }

    render() {
        return (
            <View style={{backgroundColor:"red"}}>
                <Modal
                    styles = {{backgroundColor : '#1DE2EA'}}
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22,backgroundColor : '#1DE2EA'}}>
                        <View>
                            <TextInput style={{backgroundColor : '#B3B3B3'}}
                                       placeholder='Game Name'
                                       onChangeText={text => this.setState({nomGame : text})}

                            />
                            <TextInput style={{backgroundColor : '#B3B3B3'}}
                                       placeholder='Game Name'
                                       keyboardType='number-pad'
                                       onChangeText={text => this.setState({nbPlayer : text})}

                            />

                            <Button title={'Create'}
                                onPress={() => {
                                    let game1 = new Game(0, this.state.nomGame,this.state.nbPlayer,"",this.state.player);

                                    console.log('name : '+game1.GameName+"\n nombre:"+game1.maxPlayer)
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                            </Button>
                        </View>
                    </View>
                </Modal>
                <Button
                    title="Create"
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                />
            </View>
        );
    }
}