import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {MainPageProperty} from "../../components/main-page/MainListPropertyInformation";

const propertySlice: Slice = createSlice({
    name: 'properties',
    initialState: {value: []},
    reducers: {
        setMainProperties: (state, action: PayloadAction<MainPageProperty[]>) => {
            state.value = action.payload;
        }
    }
});

export default propertySlice.reducer;
export const {setMainProperties} = propertySlice.actions;