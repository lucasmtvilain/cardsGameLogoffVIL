import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

export default class ComponentDeck extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Image
                style={{width: 60, height: 60}}
                source={require('../assets/images/Cards/card_face_down.jpg')}
            />

        );
    }
}