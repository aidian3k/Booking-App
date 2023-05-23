import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

const registerSlice: Slice = createSlice({
    name: 'register',
    initialState: {value: false},
    reducers: {
        setSuccessRegister: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        }
    }
});

export default registerSlice.reducer;
export const {setSuccessRegister} = registerSlice.actions;