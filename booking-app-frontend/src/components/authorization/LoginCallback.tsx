import {FC, useEffect} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Cookies from 'universal-cookie';
import {login} from "../../redux/slices/UserSlice";
import {setLoggedIn} from "../../redux/slices/AuthSlice";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {User} from "../../model/User";

export const LoginCallback: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const dispatch: ThunkDispatch<any, any, any> = useDispatch();

    function getCookieValue(cookieName: string) {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }
        return "";
    }

    useEffect(() => {
        const cookies = new Cookies();
        const accessToken = cookies.get('token');
        const refreshToken = cookies.get('refreshToken');
        const cookieValue = cookies.get("user");
        const decodedString = atob(cookieValue);
        const deserializedObject = JSON.parse(decodedString);
        const user: User = {name: deserializedObject.attributes.given_name
            , creationDate: new Date()
            , id: deserializedObject.id
            , surname: deserializedObject.attributes.family_name
            , email: deserializedObject.attributes.email
            , phoneNumber: '777777777'
        };

        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);

        dispatch(login(user));
        dispatch(setLoggedIn(true));
        navigate("/");
    }, []);

    return (
        <div className="flex justify-center items-center h-screen bg-blue-500">
            <h1 className="text-4xl font-bold text-white">Authenticating...</h1>
        </div>
    );
}