import React, {FC} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const NavbarDirections: FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={'flex gap-5 justify-center md:mt-4 mt-2 transition-all mb-4'}>
            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile')}>
                <div className={'flex gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className={'text-white font-semibold font-serif text-lg'}>My profile</p>
                </div>
            </button>

            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile/bookings')}>
                <div className={'flex gap-2 items-center justify-center'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <p className={'text-white font-semibold font-serif text-lg'}>My bookings</p>
                </div>
            </button>

            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile/accommodations')}>
                <div className={'flex gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                        <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                        <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
                    </svg>
                    <p className={'text-white font-semibold font-serif text-lg'}>My accommodations</p>
                </div>
            </button>
        </div>
    )
}