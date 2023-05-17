import React, {FC, useEffect, useState} from "react";
import {StarSvg} from "../../assets/StarSvg";
import {Property} from "../../model/Property";
import {authConnector, connector} from "../../utils/axios";
import {Booking} from "../../model/Booking";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {User} from "../../model/User";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../../model/ApiErrorObject";

export const BookingCard: FC<{ property: Property, hostId: number }> = (props) => {
    const [checkIn, setCheckIn] = useState<Date>(new Date());
    const [checkOut, setCheckOut] = useState<Date>(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
    const [propertyRating, setPropertyRating] = useState<number>(2);
    const navigate: NavigateFunction = useNavigate();
    const loggedIn: boolean = useAppSelector(state => state.auth.value);
    const user: User = useAppSelector(state => state.user.value);
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        if (props.hostId === -1) {
            return;
        }

        connector.get(`http://localhost:8080/api/v1/user/statistics/stars/${props.hostId}`)
            .then(response => {
                setPropertyRating(response.data);
            });
    }, []);

    const {property} = props;

    function getDateSubtractionInDays(firstDate: Date, secondDate: Date) {
        return Math.floor((firstDate.getTime() - secondDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    function calculateFinalPrice(): number {
        const numberOfDays = getDateSubtractionInDays(checkOut, checkIn);

        return property.price * numberOfDays * numberOfGuests;
    }

    function getCleaningFee(): number {
        const numberOfDays: number = getDateSubtractionInDays(checkOut, checkIn);

        return property.cleaningFee * numberOfDays;
    }

    function changeNumberOfGuests(event: any) {
        if (event.target.value <= 0) {
            setNumberOfGuests(1);
        } else {
            setNumberOfGuests(event.target.value);
        }
    }

    async function processCheckout() {
        const newBooking: Booking = {checkIn: checkIn,
            checkOut: checkOut,
            numberOfGuests: numberOfGuests,
            totalPrice: getCleaningFee() + calculateFinalPrice()};

        if (!loggedIn) {
            await setIsLoggedIn(true);
            return;
        }

        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            await authConnector(localStorage.getItem('access_token')).post(`/api/v1/booking/user/${user.id}/property/${property.id}`, newBooking);

            navigate('/profile/bookings');
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;
            console.log(axiosError);
        } finally {
            setLoading(false);
        }

        return;
    }

    function changeCheckoutDate(checkoutDate: Date) {
        if (checkoutDate.getTime() > checkIn.getTime()) {
            setCheckOut(checkoutDate);
        }
    }

    function changeCheckInDate(checkIn: Date) {
        if (checkIn.getTime() < checkIn.getTime()) {
            setCheckIn(checkIn);
        }
    }

    return (
        <div className={'flex justify-center items-center'}>
            <div className={'bg-white shadow shadow-gray-300 p-4 rounded-2xl'}>
                <div className={'flex justify-between'}>
                    <p className={'font-serif text-2xl'}>{`${property.price}$ / per night`}</p>
                    <div className={'flex gap-1 items-center'}>
                        <StarSvg/>
                        <p className={'text-serif text-sm'}>{propertyRating},0</p>
                    </div>
                </div>

                <div className={'border rounded-2xl mt-4'}>
                    <div className={'flex'}>
                        <div className={'py-3 px-4 border-r'}>
                            <label>Check in:</label>
                            <input type={'date'} onChange={(event: any) => changeCheckInDate(new Date(event.target.value))}/>
                        </div>

                        <div className={'py-3 px-4'}>
                            <label>Check out:</label>
                            <input type={'date'}
                                   onChange={(event: any) => changeCheckoutDate(new Date(event.target.value))}/>
                        </div>
                    </div>

                    <div className={'py-3 px-4 border-t flex flex-col items-centers text-center'}>
                        <p>Number of guests:</p>
                        <input type={'number'} value={numberOfGuests}
                               onChange={(event: any) => changeNumberOfGuests(event)}
                               className={'border rounded-xl text-center'}/>
                    </div>
                </div>

                <button
                    className={'w-full bg-red-500 mt-2 rounded-2xl p-2 hover:scale-105 cursor-pointer transition-all'}
                    onClick={() => processCheckout()}
                >
                    <p className={'text-lg text-white font-serif font-semibold'}>{!loading ? 'Book this place' : 'Loading...'}</p>
                </button>

                <div className={'flex flex-col gap-2'}>
                    <div className={'mt-2'}>
                        <p className={'text-serif text-center text-sm'}>The payment has not been processed
                            yet</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>${`${property.price} `}
                            x {getDateSubtractionInDays(checkOut, checkIn)} days x {numberOfGuests} guests</p>
                        <p className={'text-serif text-base'}>{calculateFinalPrice()} $</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>Cleaning fee</p>
                        <p className={'text-serif text-base'}>{getCleaningFee()} $</p>
                    </div>

                    <div className={'w-full border border-gray-200 border-1 my-2'}></div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-lg font-semibold'}>Total price:</p>
                        <p className={'text-serif text-base'}>{calculateFinalPrice() + getCleaningFee()} $</p>
                    </div>
                </div>
            </div>
        </div>
    )
}