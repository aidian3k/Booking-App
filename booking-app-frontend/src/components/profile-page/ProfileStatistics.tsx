import React, {FC, useEffect, useState} from "react";
import Rating from "@mui/material/Rating";
import {ProfilePageStatistics} from "../../model/ProfilePageStatistics";
import {authConnector} from "../../utils/axios";
import {useAppSelector} from "../../hooks/reduxHooks";
import {User} from "../../model/User";

export const ProfileStatistics: FC = () => {
    const [profileStatistics, setProfileStatistics] = useState<ProfilePageStatistics>({averageReview: 0, writtenReviews: 0, bookedProperties: 0, currentlyOwnedProperties: 0});
    const user: User = useAppSelector(state => state.user.value);

    useEffect(() => {
        authConnector(localStorage.getItem('access_token')).get(`/api/v1/user/statistics/${user.id}`)
            .then(response => setProfileStatistics(response.data));
    }, []);

    return (
        <div className={''}>
            <h1 className="font-serif font-semibold text-3xl text-center mt-4">Statistics and reviews:</h1>

            <div className={'grid md:grid-cols-3 justify-items-center mt-2'}>
                <p className="text-base font-bold text-gray-800 tracking-wide">Booked properties: {profileStatistics.bookedProperties}</p>
                <p className="text-base font-bold text-gray-800 tracking-wide">Currently owned properties: {profileStatistics.currentlyOwnedProperties}</p>
                <p className="text-base font-bold text-gray-800 tracking-wide">Written reviews: {profileStatistics.writtenReviews}</p>
            </div>

            <div className={'flex gap-2 justify-center items-center mt-2'}>
                <p className="font-serif font-semibold text-xl text-center">Average review:</p>
                <Rating name="size-small" value={profileStatistics.averageReview} size="large" readOnly={true}/>
            </div>

            <div className={'grid justify-items-center md:grid-cols-4 grid-cols-1 gap-3 p-2'}>
            </div>
        </div>
    )
}