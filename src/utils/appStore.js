import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import sessionStorage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer= combineReducers({
    
        user: userReducer,
        movies:movieReducer
    
})

const persisConfig={
    key: "root",
    storage:sessionStorage
}

const persistedReducer=persistReducer(persisConfig,rootReducer)

const store = configureStore({
    reducer:persistedReducer
})

const persistor= persistStore(store)

export  {store,persistor}