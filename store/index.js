import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer} from './slice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
  } from "redux-persist";  

const persistConfig = {
    key: "state",
    version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    todos: todoReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), 
})

export const persistor = persistStore(store)