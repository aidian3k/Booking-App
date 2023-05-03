import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

const authSlice: Slice = createSlice({
    name: 'auth',
    initialState: {value: false},
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export default authSlice.reducer;
export const {setLoggedIn} = authSlice.actions;