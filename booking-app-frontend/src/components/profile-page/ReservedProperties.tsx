import React, {FC, useEffect, useState} from "react";
import {ReservationElement} from "./ReservationElement";
import {useAuth} from "../../hooks/useAuth";
import {User} from "../../model/User";
import {useAppSelector} from "../../hooks/reduxHooks";
import {ProfilePageBooking} from "../../model/ProfilePageBooking";
import {authConnector} from "../../utils/axios";

export const ReservedProperties: FC = () => {
    const isLoading = useAuth(true);
    const user: User = useAppSelector(state => state.user.value);
    const [bookingsData, setBookingsData] = useState<ProfilePageBooking[]>([]);

    const fetchBookingData = async () => {
        await authConnector(localStorage.getItem('access_token'))
            .get(`api/v1/booking/profile/property/reservation/user/${user.id}`)
            .then(response => {
                setBookingsData(response.data);
            });

        return;
    }

    useEffect(() => {
        fetchBookingData();
    }, [isLoading]);

    const bookingsJsx: JSX.Element[] = bookingsData.map(booking => {
        return <ReservationElement bookingInfo={booking}/>
    });

    return (
        <div>
            <h1 className="font-serif font-semibold text-3xl text-center mt-4 mb-2">Reserved properties:</h1>
            {bookingsJsx.length === 0 ?
                <p className={'font-serif text-3xl mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold'}>You have no reserved properties :(</p> :
                <div className={'grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 mb-4'}>
                    {bookingsJsx}
                </div>
            }
        </div>
    )
}