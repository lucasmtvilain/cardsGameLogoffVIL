import React from 'react'
import {View, Text, StyleSheet,TextInput} from 'react-native'
const Player = require('../services/Player').Player;
import Menu, { MenuItem } from "react-native-material-menu";
import Emoji from 'react-native-emoji';
const StorePlayer = require('../services/StorePlayer').StorePlayer;

class ContaireSetting extends React.Component {

    constructor(props) {
        super(props);

        // Si pas de profile joueurs
        const joueur = new Player(0, "Non Connecter","tomato","");

        let storePlayer = new StorePlayer();

        this.state = {
            Player :joueur,
            filter: joueur.getEmoji(),
            store : new StorePlayer(),
            name: ''
        };

        storePlayer._storeGetPlayer().then(result=>{
            let newPlayer = new Player(0, "Non Connecter","tomato","");
            newPlayer.convertFromJson(JSON.parse(result));
            this.setState({Player : newPlayer})
            this.setState({name:newPlayer.getUsername()})
            this.setState({filter: newPlayer.getEmoji()});
        });
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    sort = filter => {

        this.setState({ filter }); // recuperation du filtre
        let emoji = JSON.stringify(filter);//transformation json
        this.state.Player.setEmoji(JSON.parse(emoji)); //modification du player
        this.state.store._storeRegister(this.state.Player);// enregistrement du contacte modifier
        this._menu.hide();// masquer le menu

        console.log(this.state.Player);
    };

    _changeName = (name)=>{
        this.state.Player.setUserName(name);
        this.setState({name:name});
        this.state.store._storeRegister(this.state.Player);
    }

    showMenu = () => {
        this._menu.show();
    };


    render() {
        return (

            <View style={ styles.container }>
                <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>

                        <Menu
                            style={{maxWidth: 70}}
                            ref={this.setMenuRef}
                            button={
                                <Emoji onPress={this.showMenu} name={this.state.filter || "tomato"} style={{fontSize: 30}} />
                            }
                        >
                            <MenuFilterItem  onPress={this.sort} filter="rabbit">
                                <Emoji  name="rabbit" style={{fontSize: 30}} />
                            </MenuFilterItem>


                            <MenuFilterItem onPress={this.sort} filter="cat">
                                <Emoji  name="cat" style={{fontSize: 30}} />
                            </MenuFilterItem>

                            <MenuFilterItem onPress={this.sort} filter="dog">
                                <Emoji  name="dog" style={{fontSize: 30}} />
                            </MenuFilterItem>
                            <MenuFilterItem onPress={this.sort} filter="turkey">
                                <Emoji  name="turkey" style={{fontSize: 30}} />
                            </MenuFilterItem>

                        </Menu>


                        <Text style={ styles.textStyle }>
                            {//this.state.Player.getUsername()
                                 }
                        </Text>

                        <TextInput style={styles.textStyle }
                                   onChangeText={text => this._changeName(text)}
                                   value={this.state.name}
                        />
                    </View>
                </View>
            </View>
        )
    };
}

class MenuFilterItem extends React.PureComponent {
    onPress = () => {
        this.props.onPress(this.props.filter);
    };

    render() {
        return <MenuItem onPress={this.onPress}>{this.props.children}</MenuItem>;
    }
}

const setPlayer = function (player){this.setState({ value: event.target.value })};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#212121',
        borderColor:'#b6b6b6',
        borderWidth: 3,
        borderRadius:7

    },
    textStyle: {
        marginBottom:10,
        marginLeft:20,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:40,
        color: '#FFFFFF'
    }

});

export default ContaireSetting