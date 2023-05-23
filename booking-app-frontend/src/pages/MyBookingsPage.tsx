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
import {NavigateFunction, useNavigate} from "react-router-dom";
import {HistoryBookingElement} from "../components/my-bookings/HistoryBookingElement";
import {NothingHere} from "../components/my-bookings/NothingHere";

export const MyBookingsPage: FC = () => {
    const isLoading = useAuth(true);
    const user: User = useAppSelector(state => state.user.value);
    const [currentBookings, setCurrentBookings] = useState<ProfilePageBooking[]>([]);
    const [historyBookings, setHistoryBookings] = useState<ProfilePageBooking[]>([]);
    const navigate: NavigateFunction = useNavigate();

    const fetchBookingData = async () => {
        await authConnector(localStorage.getItem('access_token'))
            .get(`/api/v1/booking/profile/user/${user.id}`)
            .then(response => {
                debugger
                setCurrentBookings(response.data.currentBookings);
                setHistoryBookings(response.data.historyBookings);
            });

        return;
    }

    useEffect(() => {
        fetchBookingData();
    }, [isLoading]);

    const currentBookingsJsx: JSX.Element[] = currentBookings.map(booking => {
        return <MyBookingElement bookingInfo={booking}/>
    });

    const historyBookingsJsx: JSX.Element[] = historyBookings.map(booking => {
        return <HistoryBookingElement bookingInfo={booking}/>
    });

    if (isLoading) {
        return <LoadingPage/>
    } else {
        return (
            <>
                <Navbar/>

                    <div className={'w-full md:flex md:justify-between justify-center md:p-4 p-2'}>
                        <div className={'flex flex-col  items-center md:w-1/2 w-full gap-2'}>
                            <h1 className={'mb-2'}>
                                <span className="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone text-4xl font-serif font-semibold">
                                    Current bookings
                                </span>
                            </h1>
                            {currentBookingsJsx.length !== 0 ? currentBookingsJsx : <NothingHere onClick={() => navigate('/')} buttonText={'Explore properties!'}/>}
                        </div>

                        <div className={'border border-indigo-500 bg-orange-400 outline-1 w-1 md:block hidden mx-2'}/>

                        <div className={'flex flex-col  items-center md:w-1/2 w-full gap-2'}>
                            <h1 className={'mb-2'}>
                                <span className="bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone text-4xl font-serif font-semibold mt-2">
                                    Booking history
                                </span>
                            </h1>
                            {historyBookingsJsx.length !== 0 ? historyBookingsJsx : <NothingHere onClick={() => navigate('/')} buttonText={'You do not have any history!'}/>}
                        </div>
                    </div>
                <Footer/>
            </>
        )
    }
}