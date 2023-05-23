import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

const loginSlice: Slice = createSlice({
    name: 'login',
    initialState: {value: false},
    reducers: {
        setSuccessLogin: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export default loginSlice.reducer;
export const {setSuccessLogin} = loginSlice.actions;