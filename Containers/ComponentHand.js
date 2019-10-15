import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import ComponentDeck from "./ComponentDeck";

const Hand = require('../services/Hand.js').Hand;
const Card = require('../services/Card.js').Card;

const cardImages = new Map();

cardImages.set("0_0" , require("../assets/images/Cards/0_0.jpg") ) ;
cardImages.set("0_1" , require("../assets/images/Cards/0_1.jpg") ) ;
cardImages.set("0_2" , require("../assets/images/Cards/0_2.jpg") ) ;
cardImages.set("0_3" , require("../assets/images/Cards/0_3.jpg") ) ;
cardImages.set("0_4" , require("../assets/images/Cards/0_4.jpg") ) ;
cardImages.set("0_5" , require("../assets/images/Cards/0_5.jpg") ) ;
cardImages.set("0_6" , require("../assets/images/Cards/0_6.jpg") ) ;
cardImages.set("0_7" , require("../assets/images/Cards/0_7.jpg") ) ;
cardImages.set("0_8" , require("../assets/images/Cards/0_8.jpg") ) ;
cardImages.set("0_9" , require("../assets/images/Cards/0_9.jpg") ) ;
cardImages.set("0_10" , require("../assets/images/Cards/0_10.jpg")) ;
cardImages.set("0_11" , require("../assets/images/Cards/0_11.jpg")) ;
cardImages.set("0_12" , require("../assets/images/Cards/0_12.jpg"))  ;
cardImages.set("1_0" , require("../assets/images/Cards/1_0.jpg") )  ;
cardImages.set("1_1" , require("../assets/images/Cards/1_1.jpg") )  ;
cardImages.set("1_2" , require("../assets/images/Cards/1_2.jpg") )  ;
cardImages.set("1_3" , require("../assets/images/Cards/1_3.jpg") )  ;
cardImages.set("1_4" , require("../assets/images/Cards/1_4.jpg") )  ;
cardImages.set("1_5" , require("../assets/images/Cards/1_5.jpg") )  ;
cardImages.set("1_6" , require("../assets/images/Cards/1_6.jpg") )  ;
cardImages.set("1_7" , require("../assets/images/Cards/1_7.jpg") )  ;
cardImages.set("1_8" , require("../assets/images/Cards/1_8.jpg") )  ;
cardImages.set("1_9" , require("../assets/images/Cards/1_9.jpg") ) ;
cardImages.set("1_10" , require("../assets/images/Cards/1_10.jpg")) ;
cardImages.set("1_11" , require("../assets/images/Cards/1_11.jpg")) ;
cardImages.set("1_12" , require("../assets/images/Cards/1_12.jpg"))   ;
cardImages.set("2_0" , require("../assets/images/Cards/2_0.jpg") )   ;
cardImages.set("2_1" , require("../assets/images/Cards/2_1.jpg") )   ;
cardImages.set("2_2" , require("../assets/images/Cards/2_2.jpg") )   ;
cardImages.set("2_3" , require("../assets/images/Cards/2_3.jpg") )   ;
cardImages.set("2_4" , require("../assets/images/Cards/2_4.jpg") )   ;
cardImages.set("2_5" , require("../assets/images/Cards/2_5.jpg") )   ;
cardImages.set("2_6" , require("../assets/images/Cards/2_6.jpg") )   ;
cardImages.set("2_7" , require("../assets/images/Cards/2_7.jpg") )   ;
cardImages.set("2_8" , require("../assets/images/Cards/2_8.jpg") )   ;
cardImages.set("2_9" , require("../assets/images/Cards/2_9.jpg") ) ;
cardImages.set("2_10" , require("../assets/images/Cards/2_10.jpg")) ;
cardImages.set("2_11" , require("../assets/images/Cards/2_11.jpg")) ;
cardImages.set("2_12" , require("../assets/images/Cards/2_12.jpg"))    ;
cardImages.set("3_0" , require("../assets/images/Cards/3_0.jpg") )    ;
cardImages.set("3_1" , require("../assets/images/Cards/3_1.jpg") )    ;
cardImages.set("3_2" , require("../assets/images/Cards/3_2.jpg") )    ;
cardImages.set("3_3" , require("../assets/images/Cards/3_3.jpg") )    ;
cardImages.set("3_4" , require("../assets/images/Cards/3_4.jpg") )    ;
cardImages.set("3_5" , require("../assets/images/Cards/3_5.jpg") )    ;
cardImages.set("3_6" , require("../assets/images/Cards/3_6.jpg") )    ;
cardImages.set("3_7" , require("../assets/images/Cards/3_7.jpg") )    ;
cardImages.set("3_8" , require("../assets/images/Cards/3_8.jpg") ) ;
cardImages.set("3_9" , require("../assets/images/Cards/3_9.jpg") ) ;
cardImages.set("3_10" , require("../assets/images/Cards/3_10.jpg")) ;
cardImages.set("3_11" , require("../assets/images/Cards/3_11.jpg")) ;
cardImages.set("3_12" , require("../assets/images/Cards/3_12.jpg")) ;

export default class ComponentHand extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerHand: JSON.parse(this.props.playerHandJSON),
        };
        console.log(this.state.playerHand);
    }

    render() {
        return(
            <View style = {styles.container}>
                {this.state.playerHand.map((item, key) => {
                    console.log(item);
                    let cardToRender = item.suit + "_" + item.value;
                    let cardPath = cardImages.get(cardToRender);

                    return (
                        <Image key={key}
                            source={cardPath}
                        />
                    );

                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: '#b6b6b6',
        borderColor:'#FFFFFF',
        borderWidth: 3,
        borderRadius:7
    },
});

