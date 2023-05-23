import React, {FC, useState} from "react";
import { Login } from "../components/authorization/login/Login";
import { HeaderPhoto } from "../components/authorization/HeaderPhoto";
import {Register} from "../components/authorization/register/Register";
import {SuccessSnackBar} from "../components/help-contact/SuccessSnackBar";
import {useAppSelector} from "../hooks/reduxHooks";
import {setSuccessRegister} from "../redux/slices/RegisterSlice";
import {setSuccessLogin} from "../redux/slices/LoginSlice";

export const AuthorizationPage: FC = () => {
    const [isLogging, setIsLogging] = useState<boolean>(true);
    const register: boolean = useAppSelector(state => state.register.value);
    const login: boolean = useAppSelector(state => state.login.value);

    return (
        <div className={'flex flex-row w-screen h-screen gap-0 '}>
            <HeaderPhoto/>
            <div className="sm:w-1/2 w-screen h-screen bg-gray-200 sm:p-10 p-2 flex justify-center overflow-y-scroll">
                <div className={'sm:w-4/5 w-full flex-col'}>
                    <div className={'flex justify-between flex-row mb-4'}>
                        <button className="max-w-lg text-2xl font-arial font-bold leading-relaxed" style={{color: isLogging ? 'black' : 'yellow'}} onClick={() => setIsLogging(!isLogging)}>Register</button>
                        <button className="max-w-lg text-2xl font-arial font-bold leading-relaxed" style={{color: isLogging ? 'yellow' : 'black'}} onClick={() => setIsLogging(!isLogging)}>Login</button>
                    </div>

                    {isLogging ? <Login setIsLogging={setIsLogging} logging={isLogging}/> : <Register setIsLogging={setIsLogging} logging={isLogging}/>}

                    <div className={'w-full h-7'}>
                    </div>
                </div>
            </div>

            <SuccessSnackBar open={register} message={'Successfully registered! Now Login!'} setOpen={setSuccessRegister}/>
            <SuccessSnackBar open={login} message={'Successfully logged in!'} setOpen={setSuccessLogin}/>
        </div>
    )
}