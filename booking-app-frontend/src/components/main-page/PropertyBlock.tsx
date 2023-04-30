import {FC} from "react";
import {MainListPropertyImage} from "./MainListPropertyImage";
import {MainListPropertyInformation} from "./MainListPropertyInformation";

export const PropertyBlock: FC = () => {
    return (
        <div className={'flex flex-col items-center cursor-pointer hover:scale-105 transition-all'}>
            <MainListPropertyImage/>
            <MainListPropertyInformation/>
        </div>
    )
}