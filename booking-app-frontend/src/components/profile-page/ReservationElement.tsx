import React, {FC, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ProfilePageBooking} from "../../model/ProfilePageBooking";
import {MyBookingInfoElement} from "../my-bookings/MyBookingInfoElement";
import {DateRange} from "@mui/icons-material";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import Person2Icon from "@mui/icons-material/Person2";
import {BookingDeletingPopUp} from "../my-bookings/BookingDeletingPopUp";
import {ClientInformationPopUp} from "./ClientInformationPopUp";

export const ReservationElement: FC<{bookingInfo: ProfilePageBooking}> = (props) => {
    const {bookingInfo} = props;
    const navigate: NavigateFunction = useNavigate();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [isCheckingClient, setIsCheckingClient] = useState<boolean>(false);

    return (
        <>
            <div className={'w-full bg-gray-500 hover:scale-105 transition-all cursor-pointer border-1 outline'}>
                <div className={'flex gap-2 md:p-4 p-2'}>
                    <div className={'md:block flex items-center rounded-2xl w-52'} onClick={() => navigate(`/accommodation/${bookingInfo.propertyId}`)}>
                        <img className={'rounded-2xl object-cover'} alt={'image'}
                             src={`data:image/png;base64,${bookingInfo.photo.data}`}/>
                    </div>

                    <div className={'w-4/5 bg-red p-1 max-h-44 overflow-hidden'}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white" onClick={() => navigate(`/accommodation/${bookingInfo.propertyId}`)}>{bookingInfo.title}</h5>
                        <div className={'flex flex-col gap-2'} onClick={() => navigate(`/accommodation/${bookingInfo.propertyId}`)}>
                            <MyBookingInfoElement icon={<DateRange color={'secondary'}/>} textElement={`Date: ${new Date(bookingInfo.checkIn).toLocaleDateString()} -- ${new Date(bookingInfo.checkOut).toLocaleDateString()}`}/>
                            <MyBookingInfoElement icon={<PriceCheckIcon color={'secondary'}/>} textElement={`Total price: ${bookingInfo.totalPrice}$`}/>
                            <MyBookingInfoElement icon={<Person2Icon color={'secondary'}/>} textElement={`Guests: ${bookingInfo.numberOfGuests}`}/>
                        </div>

                        <button className={'cursor-pointer bg-green-400 transition-all hover:bg-green-600 rounded-full p-2 mt-1 w-full'} onClick={() => setIsCheckingClient(true)}>
                            <p className={'font-serif text-white'}>Check client info</p>
                        </button>
                    </div>
                </div>

                <div className={'flex gap-2 justify-center py-2 md:px-2'}>
                    <button className={'cursor-pointer bg-red-500 hover:scale-105 transition-all hover:bg-red-700 rounded-full p-2 mt-1 w-full'}
                    onClick={() => setIsDeleting(true)}
                    >
                        <p className={'font-serif text-white '}>Cancel reservation</p>
                    </button>
                </div>
            </div>

            <BookingDeletingPopUp isDeleting={isDeleting} setIsDeleting={setIsDeleting} bookingInfo={bookingInfo}/>
            <ClientInformationPopUp isCheckingClient={isCheckingClient} setIsCheckingClient={setIsCheckingClient} userId={bookingInfo.clientId}/>
        </>
    )
}