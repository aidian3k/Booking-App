import React, {FC, useState} from "react";
import {authConnector} from "../../utils/axios";
import {FilterAbstractPopUpWindow} from "../filter/PopUpAbstractWindow";
import {Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import {ProfilePageBooking} from "../../model/ProfilePageBooking";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../../model/ApiErrorObject";
import {LoadingButton} from "@mui/lab";

export const BookingDeletingPopUp: FC<{isDeleting: boolean, setIsDeleting: any, bookingInfo: ProfilePageBooking}> = (props) => {
    const [loading, setLoading] = useState<boolean>(false);

    async function handleCancelReservation() {
        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            await authConnector(localStorage.getItem('access_token'))
                .delete(`/api/v1/booking/${props.bookingInfo.bookingId}`);

            setLoading(false);
            await window.location.reload();
        } catch(error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;
        } finally {
            setLoading(false)
        }
    }

    return (
        <FilterAbstractPopUpWindow isOpen={props.isDeleting} onClose={() => props.setIsDeleting(false)}>
            <div className={'flex gap-2'}>
                <button className={'rounded-full bg-gray-300 p-1 hover:bg-red-300 hover:scale-105 transition-all self-center mb-1'}
                        onClick={() => props.setIsDeleting(false)}
                >
                    <Close/>
                </button>
                <p className={'font-serif font-semibold text-2xl text-center '}>Deleting Booking:</p>
            </div>

            <div>
                <p className={'font-serif font-semibold text-lg'}>You wish to delete the following booking:</p>
                <p className={'font-serif text-center font-semibold'}>Title of property: {props.bookingInfo.title}</p>
                <p className={'font-serif text-center font-semibold'}>CheckIn Date: {new Date(props.bookingInfo.checkIn).toLocaleDateString()}</p>
                <p className={'font-serif text-center font-semibold'}>CheckOut Date: {new Date(props.bookingInfo.checkOut).toLocaleDateString()}</p>
                <p className={'font-serif text-center font-semibold'}>Number of guests: {props.bookingInfo.numberOfGuests}</p>
            </div>

            <p className={'text-center font-semibold text-red-500'}>Remember that deleting booking is irreversible!</p>
            <div className={'flex gap-2 mt-2'}>
                <Button variant="contained" color="success" sx={{width: 1 / 2}}
                        onClick={() => props.setIsDeleting(false)}
                >
                    Close
                </Button>

                <LoadingButton loading={loading} variant="contained" color="error" sx={{width: 1 / 2}} onClick={() => handleCancelReservation()}>
                    Delete
                </LoadingButton>
            </div>
        </FilterAbstractPopUpWindow>
    )
}