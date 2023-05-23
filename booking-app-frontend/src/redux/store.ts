import {configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/UserSlice';
import authReducer from './slices/AuthSlice';
import propertiesReducer from './slices/PropertiesSlice';
import registerReducer from './slices/RegisterSlice'
import loginReducer from './slices/LoginSlice'
import logoutReducer from './slices/LogoutSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        properties: propertiesReducer,
        register: registerReducer,
        login: loginReducer,
        logout: logoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch