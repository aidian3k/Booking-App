import {Navbar} from "../navbar/Navbar";
import {Footer} from "../footer/Footer";
import {Button, Checkbox, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {ImageUploader} from "./UploadForm";
import React, {FC} from "react";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PetsIcon from "@mui/icons-material/Pets";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import WorkIcon from "@mui/icons-material/Work";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

export const AccommodationForm: FC = () => {
    return (
        <div>
            <Navbar/>
            <p className={'text-center md:text-3xl text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text'}>Creating new property!</p>
            <p className={'md:text-sm text-xs font-serif font-semibold text-center bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text mb-2'}>
                Type in the information of the
                property</p>

            <div className={'flex flex-col gap-2 mx-4 shadow'}>
                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Title</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>Text for you property should be catchy!</p>
                </div>
                <TextField label={'Title of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           //helperText={'You should place proper title here!'}
                           size={'small'}
                />

                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Address</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>Place here the address of the place</p>
                </div>

                <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                    <TextField label={'Country of the place'}
                               placeholder={'Country for example: England'}
                        //helperText={'You should place proper title here!'}
                               size={'small'}
                    />
                    <TextField label={'City of the place'}
                               placeholder={'Example street: Bumming'}
                        //helperText={'You should place proper title here!'}
                               size={'small'}
                    />
                </div>
                <TextField label={'Street of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                    //helperText={'You should place proper title here!'}
                           size={'small'}
                />

                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Photos</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>The more photos, the better it is!</p>
                </div>

                <div className={'grid grid-cols-4 gap-2'}>
                    <TextField label={'Add photo using link'}
                               placeholder={'Place here link to photo!'}
                        //helperText={'You should place proper title here!'}
                               size={'small'}
                               className={'col-span-3'}
                    />

                    <Button variant="contained" endIcon={<SendIcon />} color={'secondary'}>
                        <p className={'font-serif md:text-xl text-xs text-white-300'}>SEND</p>
                    </Button>
                </div>

                <p className={'text-xl text-black font-bold font-serif text-center'}>Or upload it from your device!</p>
                <ImageUploader/>

                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Description</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>Description is the most important!</p>
                </div>

                <TextField
                    label="Description of the place"
                    placeholder={'Example description: This a good house!'}
                    multiline
                    rows={3}
                />

                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Perks</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>Select all the perks of your place!</p>
                </div>

                <div className={'grid md:grid-cols-4 grid-cols-2 gap-2'}>
                    <PerksInformation name={'Wi-fi'} icon={<NetworkWifiIcon/>}/>
                    <PerksInformation name={'Place to work'} icon={<WorkIcon/>}/>
                    <PerksInformation name={'Pool'} icon={<PoolIcon/>}/>
                    <PerksInformation name={'Allowed animals'} icon={<PetsIcon/>}/>
                    <PerksInformation name={'Kitchen'} icon={<KitchenIcon/>}/>
                    <PerksInformation name={'Air-conditioning'} icon={<AcUnitIcon/>}/>
                    <PerksInformation name={'Gas-meter'} icon={<GasMeterIcon/>}/>
                    <PerksInformation name={'Washing-machine'} icon={<LocalLaundryServiceIcon/>}/>
                </div>

                <div>
                    <p className={'text-2xl text-black font-bold font-serif'}>Extra info</p>
                    <p className={'text-xs text-gray-500 font-semibold font-serif'}>Place here house rules etc.</p>
                </div>

                <TextField
                    label="Extra info about the place"
                    placeholder={'Example: do not do it'}
                    multiline
                    rows={2}
                />

                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full hover:scale-105 transition-all">
                    <p className={'text-xl font-serif text-white font-semibold'}>Create a place!</p>
                </button>
            </div>

            <Footer/>
        </div>
    )
}

export const PerksInformation: FC<any> = (props) => {
    return (
        <div className="border-solid border-2 border-sky-500 rounded-full flex justify-center gap-1 items-center">
            <Checkbox color="success" size={'small'}/>
            {props.icon}
            <p className={'font-serif text-gray-700 truncate'}>{props.name}</p>
        </div>
    )
}
