import {FC} from "react";
import { Login } from "../components/authorization/login/Login";
import { HeaderPhoto } from "../components/HeaderPhoto";

export const Authorization: FC = () => {
    return (
        <div className={'flex flex-row w-screen h-screen gap-0 '}>
            <HeaderPhoto/>
            <Login/>
        </div>
    )
}