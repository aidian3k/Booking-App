import React, {FC} from "react";

export const MainListPropertyImage: FC<{photo: any}> = (props) => {
    return (
        <img className={'rounded-2xl w-72 h-72'}
             src={`data:image/png;base64,${props.photo.data}`}
             alt="A sample image of a Fujifilm camera"
        />
    )
}