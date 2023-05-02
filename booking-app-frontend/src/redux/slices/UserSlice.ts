import {User} from "../../model/User";
import {createSlice, Draft, PayloadAction, Slice} from "@reduxjs/toolkit";

const initialUserState:{value: User} = {value: {email: '', surname: '', name: '', phoneNumber: '', creationDate: new Date(), password: ''}};

export const userSlice: Slice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        login: (state: Draft<{value: User}>, action: PayloadAction<User>) => {
            state.value = action.payload;
        }
    }
});

export default userSlice.reducer;
export const {login} = userSlice.actions;