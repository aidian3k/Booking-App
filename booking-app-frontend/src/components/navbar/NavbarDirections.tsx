import React, {FC} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {HouseIcon} from "../../assets/HouseIcon";
import {DotsIcon} from "../../assets/DotsIcon";
import {ProfileIcon} from "../../assets/ProfileIcon";

export const NavbarDirections: FC = () => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <div className={'flex gap-5 justify-center md:mt-4 mt-2 transition-all mb-4'}>
            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile')}>
                <div className={'flex gap-2'}>
                    <ProfileIcon/>
                    <p className={'text-white font-semibold font-serif text-lg'}>My profile</p>
                </div>
            </button>

            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile/bookings')}>
                <div className={'flex gap-2 items-center justify-center'}>
                    <DotsIcon/>
                    <p className={'text-white font-semibold font-serif text-lg'}>My bookings</p>
                </div>
            </button>

            <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'} onClick={() => navigate('/profile/accommodations')}>
                <div className={'flex gap-2'}>
                    <HouseIcon/>
                    <p className={'text-white font-semibold font-serif text-lg'}>My accommodations</p>
                </div>
            </button>
        </div>
    )
}