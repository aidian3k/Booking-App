import React, { FC } from "react"
import {Button} from "@mui/material";
import {Apple, Facebook, Google} from "@mui/icons-material";
export const Login: FC = () => {
    return (
        <div className="sm:w-1/2 w-screen h-screen bg-gray-200 sm:p-10 p-2 flex justify-center ">
            <div className={'sm:w-1/2 w-full flex-col'}>
                <div className={'flex gap-10 flex-row mb-2'}>
                    <p className="max-w-lg text-2xl font-arial font-bold leading-relaxed text-gray-900">Zarejestruj się</p>
                    <p className="max-w-lg text-2xl font-arial font-bold leading-relaxed text-gray-900">Zaloguj się</p>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <Button variant={'outlined'}  size={'medium'} fullWidth={true} startIcon={<Google/>} sx={{color: 'black', height: '50px', borderRadius: '10px'}}>
                        Zaloguj się przez Google
                    </Button>
                    <Button variant={'outlined'}  size={'medium'} fullWidth={true} startIcon={<Facebook/>} sx={{color: 'black', height: '50px', borderRadius: '10px'}}>
                        Zaloguj się przez Facebooka
                    </Button>
                    <Button variant={'outlined'}  size={'medium'} fullWidth={true} startIcon={<Apple/>} sx={{color: 'black', height: '50px', borderRadius: '10px'}}>
                        Zaloguj się przez Apple
                    </Button>
                </div>
            </div>
        </div>
    )
}