import React, {FC, useState} from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import {NavigateFunction, useNavigate} from "react-router-dom";
import {authConnector} from "../../../utils/axios";
import {initialUserState, login} from "../../../redux/slices/UserSlice";
import {setLoggedIn} from "../../../redux/slices/AuthSlice";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../../../model/ApiErrorObject";
import {useAppDispatch} from "../../../hooks/reduxHooks";

export const LoggedInItems: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    async function logoutUser() {
        try {
            setLoading(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            await authConnector(localStorage.getItem('access_token')).get('/api/v1/auth/logout').then(() => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                dispatch(login(initialUserState));
                dispatch(setLoggedIn(false));
            });

            setLoading(false);

            navigate('/');
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;

            await new Promise(resolve => setTimeout(resolve, 2000));

            dispatch(setLoggedIn(true));
            console.log(errorData);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <button className={'flex gap-4 hover:bg-gray-100 bg-white w-full'} onClick={() => logoutUser()}>
                {<LogoutIcon/>}
                <p className={'font-serif text-base text-gray-500'}>{loading ? 'Loading...' : 'Logout'}</p>
            </button>
            <div className={'w-full border border-1 border-gray-500 mt-1'}/>
        </>
    )
}