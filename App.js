import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';
import AppTab from './src/navigators/AppTab';
import Preload from './src/navigators/PreloadStack';
import MainStack from './src/navigators/MainStack';
import {StatusBar} from 'react-native';

function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <MainStack/>
	        <StatusBar barStyle="dark-content" background-color="#fff"/>
        </PersistGate>
      </NavigationContainer>
    </Provider>   
  );
}
export default App;
