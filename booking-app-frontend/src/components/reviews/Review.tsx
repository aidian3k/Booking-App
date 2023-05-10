import React, {FC} from "react";
import {StarSvg} from "../../assets/StarSvg";
import {ReviewModel} from "../../model/Review";

export const Review: FC<{review: ReviewModel}> = (props) => {
    return (
        <div className={'border border-1 rounded-2xl p-2'}>
            <div className={'flex gap-1 justify-center'}>
                <div className={'flex gap-1 items-center'}>
                    <StarSvg/>
                    <p className={'text-serif text-sm'}>5,0</p>
                </div>
                <p className={'text-base font-serif '}>{props.review.owner} {props.review.date.toDateString()}</p>
            </div>
            <p className={'text-base font-serif '}>As a frequent Airbnb user, I can confidently say that my
                experience with my recent host was nothing short of exceptional. From the moment I made the
                booking, the host went above and beyond to ensure that my stay was comfortable and
                enjoyable.</p>
        </div>
    )
}