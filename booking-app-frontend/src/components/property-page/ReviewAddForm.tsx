import React, {FC, useEffect, useState} from "react";
import {UserIconSvg} from "../../assets/UserIconSvg";
import {AbstractPopUpWindow} from "../help-contact/AbstractPopUpWindow";
import {InputAdornment, TextField} from "@mui/material";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Rating from "@mui/material/Rating";
import {Add} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {authConnector, connector} from "../../utils/axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {User} from "../../model/User";
import {initialUserState} from "../../redux/slices/UserSlice";

export const ReviewAddForm: FC<{reviewAdd: boolean, setReviewAdd: React.Dispatch<boolean>, clientId: number, propertyId: number, hostId: number}> = (props) => {
    const {reviewAdd, setReviewAdd} = props;
    const [value, setValue] = React.useState<number | null>(2);
    const [content, setContent] = useState<string>('');
    const [host, setHost] = useState<User>(initialUserState.value);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    const fetchHostData = async () => {
        authConnector(localStorage.getItem('access_token')).get(`/api/v1/user/${props.hostId}`)
            .then(response => setHost(response.data));
    }

    useEffect(() => {
        fetchHostData();
    }, []);

    async function createReview() {
        const newReview = {content: content, rating: value, owner: host.name, date: new Date()};

        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));

            await connector.post(`/api/v1/review/user/${props.hostId}`, newReview);
            setLoading(false);
            props.setReviewAdd(false);

            navigate(`/profile/bookings`);
            window.location.reload();
        } catch(error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AbstractPopUpWindow isOpen={reviewAdd} onClose={() => setReviewAdd(false)}>
            <h2 className={'font-serif font-semibold text-center text-xl'}>Adding new review about {host.name}</h2>
            <div>
                <TextField
                    value={'Adrian'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<UserIconSvg/>}
                            </InputAdornment>
                        )
                    }}
                    variant="standard"
                    fullWidth={true}
                    margin="normal"
                    helperText={'Here goes your name from the registration'}
                />
                <TextField
                    helperText={'Place here your feelings about the host'}
                    fullWidth={true}
                    variant={'standard'}
                    margin={'normal'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<RateReviewIcon/>}
                            </InputAdornment>
                        ),
                    }}
                    multiline
                    rows={3}
                    onChange={(event: any) => setContent(event.target.value)}
                />

                <p className={'font-serif text-base font-semibold text-black text-center'}>Place your rating about {'Adrian'}</p>
                <div className={'flex justify-center'}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        size={'large'}
                    />
                </div>
                <div className={'flex justify-center mt-2'}>
                    <LoadingButton loading={loading} variant="contained" color="success" fullWidth={true} startIcon={<Add/>} onClick={() => createReview()}>
                        <p className={'font-serif text-center text-white font-semibold text-lg'}>Add review</p>
                    </LoadingButton>
                </div>
            </div>
        </AbstractPopUpWindow>
    )
}