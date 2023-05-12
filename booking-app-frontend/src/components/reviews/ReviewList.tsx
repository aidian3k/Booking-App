import React, {FC, useEffect, useState} from "react";
import {Review} from "./Review";
import {ReviewModel} from "../../model/Review";
import {connector} from "../../utils/axios";

export const ReviewList: FC<{hostId: number}> = (props) => {
    const [reviews, setReviews] = useState<ReviewModel[]>([]);

    debugger
    useEffect(() => {
        connector.get(`/api/v1/review/user/${props.hostId}`)
            .then(response => {
                if (response.data !== undefined) {
                    setReviews(response.data);
                }
            });
    }, [props.hostId]);


    return (
        reviews.length === 0 ?
                <p className={'text-center font-semibold text-lg'}>This host has no reviews yet!</p>
                :
                <div className={'grid justify-items-center md:grid-cols-4 grid-cols-1 gap-3 p-2'}>
                    {reviews.map(review => {
                        return <Review review={review}/>
                    })}
                </div>
    )
}