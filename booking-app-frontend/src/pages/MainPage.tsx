import {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyList} from "../components/main-page/PropertyList";
import {useAuth} from "../hooks/useAuth";
import {SuccessSnackBar} from "../components/help-contact/SuccessSnackBar";
import {useAppSelector} from "../hooks/reduxHooks";
import {setSuccessLogout} from "../redux/slices/LogoutSlice";

export const MainPage: FC = () => {
    useAuth(false);
    const logout: boolean = useAppSelector(state => state.logout.value);

    return (
        <>
            <Navbar/>
            <PropertyList/>
            <SuccessSnackBar open={logout} message={"Successfully logged out!"} setOpen={setSuccessLogout}/>
            <Footer/>
        </>
    )
}