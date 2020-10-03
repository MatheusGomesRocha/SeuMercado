import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import FilterScreen from '../screens/FilterScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator
            screenOptions={{headerTitle: null, headerTransparent: true}}
        >
            <HomeStack.Screen name="apptab" component={AppTab}/>
            <HomeStack.Screen name="filter" component={FilterScreen} options={{headerTintColor: '#fff'}} />
            <HomeStack.Screen name="product" component={ProductScreen} options={{headerTintColor: '#fff'}}/>
            <HomeStack.Screen name="login" component={LoginScreen} options={{headerTintColor: '#000'}}/>
            <HomeStack.Screen name="signup" component={SignUpScreen} options={{headerTintColor: '#000'}}/>
        </HomeStack.Navigator>
    );
}