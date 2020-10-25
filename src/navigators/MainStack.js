import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTab from './AppTab';
import FilterScreen from '../screens/FilterScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import UserDataScreen from '../screens/UserDataScreen';
import OrderDetailScreen from '../screens/OrderDetailScreen';
import ChatScreen from '../screens/ChatScreen';
import ChatOpenScreen from '../screens/ChatOpenScreen';
import ContactScreen from '../screens/ContactScreen';
import AdressScreen from '../screens/AdressScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const HomeStack = createStackNavigator();

export default () => {
    return(
        <HomeStack.Navigator screenOptions={{ headerTitleStyle: {textTransform: 'uppercase', fontSize: 18}}}>
            <HomeStack.Screen name="apptab" component={AppTab} options={{headerTitle: null, headerTransparent: true,}} />
            <HomeStack.Screen name="filter" component={FilterScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#fff'}} />
            <HomeStack.Screen name="product" component={ProductScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#fff'}}/>
            <HomeStack.Screen name="login" component={LoginScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#000'}}/>
            <HomeStack.Screen name="signup" component={SignUpScreen} options={{headerTitle: null, headerTransparent: true, headerTintColor: '#000'}}/>
            <HomeStack.Screen name="userdata" component={UserDataScreen} options={{headerTintColor: '#000', title: 'Meus dados', headerTitleAlign: 'center', headerStyle: {height: 70, elevation: 0}}} />
            <HomeStack.Screen name="details" component={OrderDetailScreen} options={{headerTintColor: '#000', title: 'Detalhes', headerTitleAlign: 'center', headerStyle: {height: 50, elevation: 0}}} />
            <HomeStack.Screen name="chat" component={ChatScreen} options={{headerTintColor: '#000', title: 'Conversas', headerTitleAlign: 'center', headerStyle: {height: 50, elevation: 0}}} />
            <HomeStack.Screen name="chatopen" component={ChatOpenScreen} options={{headerTintColor: '#000', title: null, headerTransparent: true}}/>
            <HomeStack.Screen name="contacts" component={ContactScreen} options={{headerTintColor: '#000', title: 'Contatos', headerTitleAlign: 'center', headerStyle: {height: 50, elevation: 0}}}/>
            <HomeStack.Screen name="adress" component={AdressScreen} options={{headerTintColor: '#000', title: 'Endereços', headerTitleAlign: 'center', headerStyle: {height: 60, elevation: 0}}}/>
            <HomeStack.Screen name="userprofile" component={UserProfileScreen} options={{headerTintColor: '#000', title: 'Meu Perfil', headerTitleAlign: 'center', headerStyle: {height: 60, elevation: 0}}}/>
            <HomeStack.Screen name="favorite" component={FavoriteScreen} options={{headerTintColor: '#000', title: 'Favoritos', headerTitleAlign: 'center', headerStyle: {height: 60, elevation: 0}}}/>
        </HomeStack.Navigator>
    );
}

  