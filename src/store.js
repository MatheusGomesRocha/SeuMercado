import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import Reducers from './reducers';

const pReducer = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
}, Reducers);

export const store = createStore(pReducer);
export const persistor = persistStore(store)