import {useLayoutEffect} from "react";
import {useAppDispatch} from "./reduxHooks";
import {authConnector} from "../utils/axios";
import {login} from "../redux/slices/UserSlice";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../model/ApiErrorObject";
import {setLoggedIn} from "../redux/slices/AuthSlice";

export function useAuth() {
    console.debug('on');
    const dispatch = useAppDispatch();
    const refreshToken = localStorage.getItem('refresh_token') as string | null;

    const handleAuthorization = async () => {
        try {
            if (refreshToken == null) {
                await dispatch(setLoggedIn(false));
                return;
            }

            await authConnector(refreshToken).post('/api/v1/auth/refresh-token').then(response => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                dispatch(login(response.data.user));
                dispatch(setLoggedIn(true));
            });
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;
            console.log(errorData);
        }
    }

    useLayoutEffect(() => {
        handleAuthorization();
    }, []);
}