import React, {FC} from "react";
import {ProfilePageHeading} from "../components/profile-page/ProfilePageHeading";
import {ProfileEditingData} from "../components/profile-page/ProfileEditingData";
import {ProfileStatistics} from "../components/profile-page/ProfileStatistics";
import {Footer} from "../components/footer/Footer";
import {Navbar} from "../components/navbar/Navbar";
import {ReservedProperties} from "../components/profile-page/ReservedProperties";
import {useAuth} from "../hooks/useAuth";
import LoadingPage from "./LoadingPage";

export const ProfilePage: FC = () => {
    const isLoading = useAuth(true);

    if (isLoading) {
        return <LoadingPage/>
    } else {
        return (
            <>
                <Navbar/>
                <div className={'p-4'}>
                    <ProfilePageHeading/>
                    <ProfileStatistics/>
                    <ReservedProperties/>
                    <ProfileEditingData/>
                </div>
                <Footer/>
            </>
        )
    }
}
