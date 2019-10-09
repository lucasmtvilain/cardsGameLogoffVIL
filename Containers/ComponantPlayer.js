import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

class ComponantPlayer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Pseudo: 'PannacoTarte',
            NbCards : '5'
        };
    }

    render() {
        return (

            <View style={ styles.container }>
                <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={require('../assets/images/avatar.jpg')}
                    />
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
        backgroundColor: 'blue',
    },
    textStyle: {
        marginBottom:2,
        marginLeft:5,
        fontWeight: 'bold',
        fontSize:15,
    }

});

export default ComponantPlayer