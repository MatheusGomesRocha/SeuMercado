import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import FilterScreen from '../screens/FilterScreen';
import LoginScreen from '../screens/LoginScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator
            screenOptions={{headerTitle: null, headerTintColor: '#333', headerTransparent: true}}
        >
            <HomeStack.Screen name="apptab" component={AppTab} />
            <HomeStack.Screen name="filter" component={FilterScreen}/>
            <HomeStack.Screen name="login" component={LoginScreen} />
        </HomeStack.Navigator>
    );
}