import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import AppTab from './AppTab';

const Preload = createStackNavigator();

export default () => {
    return(
        <Preload.Navigator
            initialRouteName="preload"
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerTintColor: '#fff',
            }}
        >
            <Preload.Screen name="preload" component={PreloadScreen} />
            <Preload.Screen name="apptab" component={AppTab} />        
        </Preload.Navigator>
    );
}