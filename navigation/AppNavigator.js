import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
//import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import Game from '../screens/Game';


const MainNavigator = createStackNavigator({
    Home:{screen:HomeScreen},
    Game:{screen:Game},
});

export default createAppContainer(
    MainNavigator
);