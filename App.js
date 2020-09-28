import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';
import AppTab from './src/navigators/AppTab';
import Preload from './src/navigators/PreloadStack';


function Bar() {      /** Barra de status do aparelho */
  /**
   * barStyle="" recebe a cor do conteúdo
   * backgroundColor="" recebe o background da barra de status (somente para android)
   * Cor amarelo queimado FFc491
   */
  return (
    <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
  );
}

function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <Preload/>
          <Bar/>
        </PersistGate>
      </NavigationContainer>
    </Provider>   
  );
}
export default App;
