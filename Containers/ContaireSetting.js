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
                <View style={{flexDirection: 'column', justifyContent: 'center',}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                        <Image
                            style={{width: 50, height: 50}}
                            source={require('../assets/images/avatar.jpg')}
                        />
                        <Text style={ styles.textStyle }>
                            Pseudo
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'pink',

    },
    textStyle: {
        marginBottom:10,
        marginLeft:20,
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:40,
    }

});

export default ContaireSetting