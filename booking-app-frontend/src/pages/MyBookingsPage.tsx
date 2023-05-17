import React, {FC, useEffect, useState} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {MyBookingElement} from "../components/my-bookings/MyBookingElement";
import {useAuth} from "../hooks/useAuth";
import LoadingPage from "./LoadingPage";
import {ProfilePageBooking} from "../model/ProfilePageBooking";
import {authConnector} from "../utils/axios";
import {User} from "../model/User";
import {useAppSelector} from "../hooks/reduxHooks";

export const MyBookingsPage: FC = () => {
    const isLoading = useAuth(true);
    const user: User = useAppSelector(state => state.user.value);
    const [bookingsData, setBookingsData] = useState<ProfilePageBooking[]>([]);

    const fetchBookingData = async () => {
        await authConnector(localStorage.getItem('access_token'))
            .get(`/api/v1/booking/profile/user/${user.id}`)
            .then(response => {
                setBookingsData(response.data);
            });
        return;
    }

    useEffect(() => {
        fetchBookingData();
    }, [isLoading]);

    const bookingsJsx: JSX.Element[] = bookingsData.map(booking => {
        return <MyBookingElement bookingInfo={booking}/>
    });

    if (isLoading) {
        return <LoadingPage/>
    } else {
        return (
            <>
                <Navbar/>

                <div className={'grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                    {bookingsJsx}
                </div>

                <Footer/>
            </>
        )
    }
}