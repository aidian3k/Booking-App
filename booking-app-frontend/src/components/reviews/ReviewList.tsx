import React, {FC} from "react";
import {Review} from "./Review";

export const ReviewList: FC = () => {
    return (
        <div className={'grid justify-items-center md:grid-cols-4 grid-cols-1 gap-3 p-2'}>
            <Review review={{owner: 'Adrian', date: new Date(), content: 'aaaaaa', rating: 5}}/>
            <Review review={{owner: 'Adrian', date: new Date(), content: 'aaaaaa', rating: 5}}/>
            <Review review={{owner: 'Adrian', date: new Date(), content: 'aaaaaa', rating: 5}}/>
            <Review review={{owner: 'Adrian', date: new Date(), content: 'aaaaaa', rating: 5}}/>
        </div>
    )
}