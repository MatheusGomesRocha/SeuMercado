import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';      /** Import para a TabBar Customizada */
import HomeStack from './HomeStack';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
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
            <AppTab.Screen name="homestack" component={HomeStack} />
            <AppTab.Screen name="search" component={SearchScreen} />
            <AppTab.Screen name="cart" component={CartScreen} />
            <AppTab.Screen name="favorites" component={FavoriteScreen} />
            <AppTab.Screen name="user" component={UserScreen} />
        </AppTab.Navigator>
    );
}