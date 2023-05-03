import React, {FC} from "react";
import {User} from "../../model/User";
import {useAppSelector} from "../../hooks/reduxHooks";

export const ProfilePageHeading: FC = () => {
    const user: User = useAppSelector(state => state.user.value);

    return (
        <>
            <h1 className="font-extrabold text-transparent md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center hover:scale-105 transition-all font-serif">
                Welcome back!
            </h1>
            <h1 className="md:text-3xl text-lg font-serif font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300 text-center">Currently logged in as {user.name}</h1>
        </>
    )
}