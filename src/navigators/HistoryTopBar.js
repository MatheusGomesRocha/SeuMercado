import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderFinishScreen from '../screens/OrderFinishScreen';
import OrderCurrentScreen from '../screens/OrderCurrentScreen';
import {Dimensions} from 'react-native';

const TopTab = createMaterialTopTabNavigator();
const width = Dimensions.get('window').width;

export default () => {
  return (
    <TopTab.Navigator
        tabBarOptions={{
            style: {height: 90, justifyContent: 'center', elevation: 0},
            labelStyle: {fontSize: 16, textTransform: null},
            activeTintColor: '#ea1d2c',
            inactiveTintColor: '#ccc',
            tabStyle: { width: width / 2 },
            indicatorStyle: {backgroundColor: '#ea1d2c', height: 3, width: width / 2},
        }}
    >
      <TopTab.Screen name="current" component={OrderCurrentScreen} options={{tabBarLabel: 'Em andamento'}}/>
      <TopTab.Screen name="finish" component={OrderFinishScreen} options={{tabBarLabel: 'Finalizado'}} />
    </TopTab.Navigator>
  );
}