import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import FilterScreen from '../screens/FilterScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserDataScreen from '../screens/UserDataScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}} />
            <HomeStack.Screen name="filter" component={FilterScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#fff'}} />
            <HomeStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#fff'}}/>
            <HomeStack.Screen name="login" component={LoginScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#000'}}/>
            <HomeStack.Screen name="signup" component={SignUpScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#000'}}/>
            <HomeStack.Screen name="userdata" component={UserDataScreen} options={{headerTintColor: '#000', title: 'Meus dados', headerTitleAlign: 'center', headerStyle: {height: 70}}} />
        </HomeStack.Navigator>
    );
}