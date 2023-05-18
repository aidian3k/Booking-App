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

export const MyBookingsPage: FC = () => {
    const isLoading = useAuth(true);
    const user: User = useAppSelector(state => state.user.value);
    const [bookingsData, setBookingsData] = useState<ProfilePageBooking[]>([]);
    const navigate: NavigateFunction = useNavigate();

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

                {bookingsJsx.length === 0 ?
                    <div className={'flex flex-col items-center'}>
                        <p className={'font-serif text-4xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold mt-2'}>Nothing is here :(</p>
                        <button className={'cursor-pointer bg-green-400 transition-all hover:bg-green-600 rounded-full p-2'} onClick={() => navigate('/')}>
                            <p className={'font-serif text-white text-xl font-semibold'}>Find something for you!</p>
                        </button>
                    </div>

                    :

                <div className={'grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                    {bookingsJsx}
                </div>
                }

                <Footer/>
            </>
        )
    }
}