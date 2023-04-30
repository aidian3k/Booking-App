import React, {FC} from "react";
import Rating from "@mui/material/Rating";
import {Review} from "../reviews/Review";

export const ProfileStatistics: FC = () => {
    return (
        <div className={''}>
            <h1 className="font-serif font-semibold text-3xl text-center mt-4">Statistics and reviews:</h1>

            <div className={'grid md:grid-cols-3 justify-items-center mt-2'}>
                <p className="text-base font-bold text-gray-800 tracking-wide">Booked properties: 5</p>
                <p className="text-base font-bold text-gray-800 tracking-wide">Currently owned properties: 3</p>
                <p className="text-base font-bold text-gray-800 tracking-wide">Written reviews: 5</p>
            </div>

            <div className={'flex gap-2 justify-center items-center mt-2'}>
                <p className="font-serif font-semibold text-xl text-center">Average review:</p>
                <Rating name="size-small" defaultValue={4} size="large" readOnly={true}/>
            </div>

            <div className={'grid justify-items-center md:grid-cols-4 grid-cols-1 gap-3 p-2'}>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
            </div>
        </div>
    )
}