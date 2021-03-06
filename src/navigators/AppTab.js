import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import HistoryTopBar from './HistoryTopBar';
import UserScreen from '../screens/UserScreen';

const AppTab = createBottomTabNavigator();

export default () => {
    return (
        <AppTab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        tabBarOption={{
            keyboardHidesTabBar: true
        }}
        >
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="search" component={SearchScreen} />
            <AppTab.Screen name="cart" component={CartScreen} />
            <AppTab.Screen name="order" component={HistoryTopBar} />
            <AppTab.Screen name="user" component={UserScreen} />
        </AppTab.Navigator>
    );
}