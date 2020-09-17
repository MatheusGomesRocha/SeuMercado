import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={HomeScreen} />
            <HomeStack.Screen name="filter" component={FilterScreen} />
        </HomeStack.Navigator>
    );
}