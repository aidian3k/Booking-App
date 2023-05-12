import React, {FC} from "react";
import {StarSvg} from "../../assets/StarSvg";
import {ReviewModel} from "../../model/Review";

export const Review: FC<{review: ReviewModel}> = (props) => {
    return (
        <div className={'border border-1 rounded-2xl p-2'}>
            <div className={'flex gap-1 justify-center'}>
                <div className={'flex gap-1 items-center'}>
                    <StarSvg/>
                    <p className={'text-serif text-sm'}>{props.review.rating},0</p>
                </div>
                <p className={'text-base font-serif '}>{props.review.owner} {new Date(props.review.date).toLocaleDateString()}</p>
            </div>
            <p className={'text-base font-serif '}>{props.review.content}</p>
        </div>
    )
}