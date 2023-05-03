import React, {FC} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export const NavbarNotLoggedInfo: FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={'flex md:flex-row flex-col md:gap-5 gap-2 justify-center md:mt-4 mt-2 transition-all mb-4 items-center px-2'}>
            <h2 className="text-xl font-serif font-bold leading-7 bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text sm:truncate sm:tracking-tight text-center">Welcome! Please sign in to access all the features</h2>
            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/authorization')}>
                <div className={'flex gap-2'}>
                    <LoginIcon sx={{ color: 'white' }}/>
                    <p className={'text-white font-semibold font-serif text-lg'}>Login</p>
                </div>
            </button>
        </div>
    )
}