import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/UserSlice';
import authReducer from './slices/AuthSlice';
import propertiesReducer from './slices/PropertiesSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        properties: propertiesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch