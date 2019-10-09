import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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

import ContaireSetting from '../Containers/ContaireSetting';

export default class HomeScreen extends React.Component{
  render(){

    const {navigate} = this.props.navigation;

    return (
        <View style={ styles.container }>
          <View style={{height: 50, backgroundColor: 'powderblue'}} >
            <Text style={styles.textStyle}>
              TITRE
            </Text>
          </View>
          <View style={styles.containerPseudo} >
            <ContaireSetting/>
          </View>
          <View style={{height: 100, backgroundColor: 'steelblue'}} />
          <Button
              title="Game"
              onPress={() => navigate('Game')}
          />

        </View>

    );
  }

}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  containerTitle: {
    height: 50,
    alignItems: 'stretch',
    backgroundColor: 'powderblue'
  }  ,
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:40,
    backgroundColor: 'powderblue'
  } ,
  containerPseudo: {
    height: 50,
    alignItems: 'stretch',
    backgroundColor: 'skyblue'
  }
});
