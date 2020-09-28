import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import FilterScreen from '../screens/FilterScreen';
import PrevLoginScreen from '../screens/PrevLoginScreen';
import LoginScreen from '../screens/LoginScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="home" component={HomeScreen} />
            <HomeStack.Screen name="filter" component={FilterScreen} />
            <HomeStack.Screen name="prevlogin" component={PrevLoginScreen} />
            <HomeStack.Screen name="login" component={LoginScreen} />
        </HomeStack.Navigator>
    );
}