import {FC} from "react";
import {MainListPropertyImage} from "./MainListPropertyImage";
import {MainListPropertyInformation, MainPageProperty} from "./MainListPropertyInformation";

export const PropertyBlock: FC<{property: MainPageProperty}> = (props) => {
    return (
        <div className={'flex flex-col items-center cursor-pointer hover:scale-105 transition-all'}>
            <MainListPropertyImage photo={props.property.photo}/>
            <MainListPropertyInformation property={props.property}/>
        </div>
    )
}