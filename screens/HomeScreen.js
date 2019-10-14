import React from 'react'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
  Modal,
  StatusBar
} from 'react-native'

const Player = require('../services/Player').Player
const Game = require('../services/Game').Game
const StorePlayer = require('../services/StorePlayer').StorePlayer

import ContaireSetting from '../Containers/ContaireSetting'
import CreateGameComponant from '../Containers/CreateGameComponant'
import SelectGameComponent from '../Containers/SelectGameComponent'//

export default class HomeScreen extends React.Component {

  constructor (props) {
    super(props)

    let storePlayer = new StorePlayer()
    this.state = {
      player: new Player(0, '', '', ''),
      store: new StorePlayer(),
      modalVisible: false,
    }

    storePlayer._storeGetPlayer().then(result => {
      this.state.player.convertFromJson(JSON.parse(result))
    })

  }

  setModalVisible (visible) {
    this.setState({ modalVisible: visible })
  }

  render () {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.containerMilieuTitle}>
          <View style={styles.containerTitle}>
            <Text style={styles.textStyle}>
              TITRE
            </Text>
          </View>
        </View>
        <View style={styles.containerPseudo}>
          <ContaireSetting> </ContaireSetting>
        </View>
        <View style={styles.containerListeGames}>
          <ScrollView>
            <SelectGameComponent navigation={this.props.navigation}/>
          </ScrollView>
        </View>
        <View style={styles.containerButton}>
          <CreateGameComponant/>
        </View>

      </View>

    )
  }


}
HomeScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  containerMilieuTitle:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerTitle: {
    flex: 1,
    backgroundColor: '#212121'
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    color: '#FFFFFF'
  },
  containerPseudo: {
    flex: 1,
    alignItems: 'stretch',
  },
  containerListeGames: {
    flex: 3,
    backgroundColor: '#b6b6b6'
  },
  containerButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  }
})
