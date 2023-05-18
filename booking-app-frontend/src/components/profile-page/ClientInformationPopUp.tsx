import React, {FC, useEffect, useState} from "react";
import {FilterAbstractPopUpWindow} from "../filter/PopUpAbstractWindow";
import {Button} from "@mui/material";
import {Close} from "@mui/icons-material";
import {MyBookingInfoElementBlack} from "../my-bookings/MyBookingInfoElement";
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {User} from "../../model/User";
import {initialUserState} from "../../redux/slices/UserSlice";
import {authConnector} from "../../utils/axios";

export const ClientInformationPopUp: FC<{isCheckingClient: boolean, setIsCheckingClient: any, userId: number}> = (props) => {
    const [user, setUser] = useState<User>(initialUserState.value);

    useEffect(() => {
        authConnector(localStorage.getItem('access_token'))
            .get(`/api/v1/user/${props.userId}`)
            .then(response => setUser(response.data));
    }, []);

    return (
        <FilterAbstractPopUpWindow isOpen={props.isCheckingClient} onClose={() => props.setIsCheckingClient(false)}>
            <div className={'flex gap-2'}>
                <button className={'rounded-full bg-gray-300 p-1 hover:bg-red-300 hover:scale-105 transition-all self-center mb-1'}
                        onClick={() => props.setIsCheckingClient(false)}
                >
                    <Close/>
                </button>
                <p className={'font-serif font-semibold text-2xl text-center '}>Showing client information:</p>
            </div>

            <div className={'flex justify-center'}>
                <div className={'p-2'}>
                    <MyBookingInfoElementBlack icon={<BadgeIcon color={'secondary'}/>} textElement={`Name: ${user.name}`}/>
                    <MyBookingInfoElementBlack icon={<BadgeIcon color={'secondary'}/>} textElement={`Surname: ${user.surname}`}/>
                    <MyBookingInfoElementBlack icon={<ContactPhoneIcon color={'secondary'}/>} textElement={`Phone Number: ${user.phoneNumber}`}/>
                    <MyBookingInfoElementBlack icon={<AlternateEmailIcon color={'secondary'}/>} textElement={`Email: ${user.email}`}/>
                    <MyBookingInfoElementBlack icon={<DateRangeIcon color={'secondary'}/>} textElement={`Creation date: ${new Date(user.creationDate).toLocaleDateString()}`}/>
                </div>
            </div>

            <Button variant="contained" color="error" fullWidth={true} onClick={() => props.setIsCheckingClient(false)}>
                Close
            </Button>
        </FilterAbstractPopUpWindow>
    )
}