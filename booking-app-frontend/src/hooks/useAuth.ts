import {useEffect, useState} from "react";
import {useAppDispatch} from "./reduxHooks";
import {authConnector} from "../utils/axios";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../model/ApiErrorObject";
import {setLoggedIn} from "../redux/slices/AuthSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {login} from "../redux/slices/UserSlice";
import {NavigateFunction, useNavigate} from "react-router-dom";

export function useAuth(isNavigating: boolean) {
    const dispatch: ThunkDispatch<any, any, any> = useAppDispatch();
    const refreshToken = localStorage.getItem("refresh_token") as string | null;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate: NavigateFunction = useNavigate();

    const handleAuthorization = async () => {
        try {
            if (refreshToken == null) {
                await dispatch(setLoggedIn(false));
                setIsLoading(false);

                if (isNavigating) {
                    navigate('/authorization')
                }

                return;
            }

            const response = await authConnector(refreshToken).post(
                "/api/v1/auth/refresh-token"
            );

            await localStorage.setItem("access_token", response.data.access_token);
            await localStorage.setItem("refresh_token", response.data.refresh_token);
            dispatch(login(response.data.user));
            dispatch(setLoggedIn(true));

            await new Promise(resolve => setTimeout(resolve, 500));
            setIsLoading(false);
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch(setLoggedIn(false));
            setIsLoading(false);

            if (isNavigating) {
                navigate('/authorization')
            }
        }
    };

    useEffect(() => {
        handleAuthorization();
    }, []);

    return isLoading;
}