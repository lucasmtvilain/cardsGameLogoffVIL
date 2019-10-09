import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
//import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';


const MainNavigator = createStackNavigator({
    Home:{screen:HomeScreen},
    Game:{screen:LinksScreen},

});

export default createAppContainer(
    MainNavigator
);