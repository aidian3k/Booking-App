import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

const logoutSlice: Slice = createSlice({
    name: 'logout',
    initialState: {value: false},
    reducers: {
        setSuccessLogout: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export default logoutSlice.reducer;
export const {setSuccessLogout} = logoutSlice.actions;