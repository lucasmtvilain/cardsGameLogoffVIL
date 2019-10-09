import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native'

class ContaireSetting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <View style={ styles.container }>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../assets/images/avatar.jpg')}
                />
                <Text style={ styles.textStyle }>
                    Pseudo
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        backgroundColor: 'pink',

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize:40,
    }

});

export default ContaireSetting