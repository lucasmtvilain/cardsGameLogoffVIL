import React from "react";
import {StyleSheet, View, Text, Image, PanResponder, Animated} from "react-native";

export default class ComponentCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDraggable: true,
            dropAreaValues: null,
            pan: new Animated.ValueXY(),
            opacity: new Animated.Value(1)
        };
    }

    componentWillMount() {
        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                    x: this._val.x,
                    y:this._val.y
                })
                this.state.pan.setValue({ x:0, y:0})
            },
            onPanResponderMove: Animated.event([
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
            ]),

            onPanResponderRelease: (e, gesture) => {
                if (this.isDropArea(gesture)) {
                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(() =>
                        this.setState({
                            showDraggable: false
                        })
                    );
                } else {
                    Animated.spring(this.state.pan, {
                        toValue: { x: 0, y: 0 },
                        friction: 5
                    }).start();
                }
            }
        });
    }

    isDropArea(gesture) {
        console.log(gesture.moveY);
        return gesture.moveY > 600;
    }

    render() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return(
            <Animated.View {...this.panResponder.panHandlers} style = {[panStyle, styles.deckCards]}>
                <Image
                    style={{ alignSelf: 'stretch'}}
                    source={require('../assets/images/Cards/card_face_down.jpg')}
                />
            </Animated.View>

        );
    }
}

const styles = StyleSheet.create({
    deckCards: {
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        //backgroundColor: 'brown',
    },
});