import React, {FC, useState} from "react";
import {LoginInput} from "../authorization/login/LoginInput";
import {UserIconSvg} from "../../assets/UserIconSvg";
import {AbstractPopUpWindow} from "../help-contact/AbstractPopUpWindow";
import {InputAdornment, TextField} from "@mui/material";
import RateReviewIcon from '@mui/icons-material/RateReview';
import Rating from "@mui/material/Rating";
import {Add} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {ReviewModel} from "../../model/Review";
import {connector} from "../../utils/axios";

export const ReviewAddForm: FC<{reviewAdd: boolean, setReviewAdd: React.Dispatch<boolean>, userName: string, userId: number}> = (props) => {
    const {reviewAdd, setReviewAdd} = props;
    const [whoWrites, setWhoWrites] = useState<string>('');
    const [value, setValue] = React.useState<number | null>(2);
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function createReview() {
        const newReview: ReviewModel = {content: content, rating: value, owner: whoWrites, date: new Date()};

        try {
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 2000));

            await connector.post(`/api/v1/review/user/${props.userId}`, newReview);
            setLoading(false);
            props.setReviewAdd(false);
        } catch(error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AbstractPopUpWindow isOpen={reviewAdd} onClose={() => setReviewAdd(false)}>
            <h2 className={'font-serif font-semibold text-center text-xl'}>Adding new review about {props.userName}</h2>
            <div>
                <LoginInput icon={<UserIconSvg/>} onChange={setWhoWrites}
                            placeholder={'Jacob'} formHelper={'Place here your name or nickname'}/>
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

                <p className={'font-serif text-base font-semibold text-black text-center'}>Place your rating about {props.userName}</p>
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