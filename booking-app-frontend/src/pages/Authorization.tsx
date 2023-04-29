import React, {FC, useState} from "react";
import { Login } from "../components/authorization/login/Login";
import { HeaderPhoto } from "../components/authorization/HeaderPhoto";
import {Register} from "../components/authorization/register/Register";

export const Authorization: FC = () => {
    const [isLogging, setIsLogging] = useState<boolean>(true);

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
        </div>
    )
}