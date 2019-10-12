import React from 'react';
import Emoji from 'react-native-emoji';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

const Player = require('../services/Player').Player;
const Game = require('../services/Game').Game;
const StorePlayer = require('../services/StorePlayer').StorePlayer;

import ContaireSetting from '../Containers/ContaireSetting';
import SelectGameComponent from '../Containers/SelectGameComponent';


export default class HomeScreen extends React.Component{

  constructor(props) {
    super(props);

    let storePlayer = new StorePlayer();
    this.state = { player : new Player(0, "","",""),
      store : new StorePlayer(),
    };

    storePlayer._storeGetPlayer().then(result=>{
      this.state.player.convertFromJson(JSON.parse(result));
    });

  }

  render(){
    const {navigate} = this.props.navigation;


    return (
        <View style={ styles.container }>
          <View style={styles.containerTitle} >
            <Text style={styles.textStyle}>
              TITRE
            </Text>
          </View>
          <View style={styles.containerPseudo} >
            <ContaireSetting> </ContaireSetting>
          </View>
          <View style={styles.containerListeGames}>
            <ScrollView>
              <SelectGameComponent/>
            </ScrollView>
          </View>
          <View style={styles.containerButton}>
            <Button
                title="JOUER"
                onPress={() => navigate('Game')}
            />
          </View>

        </View>

    );
  }



  _renderGames() {
    return initialArr.map((item) => {
      return (
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
            <Text>
              {item.text}
            </Text>
          </View>
      );
    });
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  containerTitle: {
    flex: 1,
    backgroundColor: 'powderblue'
  }  ,
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:40,
  } ,
  containerPseudo: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'red'
  },
  containerListeGames: {
    flex:3,
    backgroundColor: 'steelblue'
  },
  containerButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:30,
  }
});
