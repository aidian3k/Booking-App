import React, {FC} from "react";
import {Navbar} from "../navbar/Navbar";
import {Footer} from "../footer/Footer";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Email, Person, Person2, Phone} from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import Rating from '@mui/material/Rating';
import {LoadingButton} from "@mui/lab";
import {Review} from "../reviews/Review";

export const ProfilePage: FC = () => {
    return (
        <>
            <Navbar/>
            <div className={'p-4'}>
                <h1 className="font-extrabold text-transparent md:text-6xl text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center hover:scale-105 transition-all font-serif">
                    Welcome back!
                </h1>
                <h1 className="md:text-3xl text-lg font-serif font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300 text-center">Currently logged in as Adrian</h1>

                <div className={'flex justify-center'}>
                    <div className={'md:w-1/2 w-full flex flex-col gap-2'}>
                        <h1 className="font-serif font-semibold text-3xl text-center">Your information:</h1>
                        <TextField
                            placeholder={'user@rentify.com'}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    {<Email/>}
                                </InputAdornment>),
                            }}
                            variant="outlined"
                            type={'email'}
                            fullWidth={true}
                            margin="normal"
                            label={'E-MAIL'}
                        />

                        <div className={'flex gap-2 flex-row justify-center'}>
                            <TextField
                                placeholder={'Adrian'}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        {<Person/>}
                                    </InputAdornment>),
                                }}
                                variant="outlined"
                                type={'text'}
                                margin="normal"
                                label={'Imię'}
                            />

                            <TextField
                                placeholder={'Kowalski'}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        {<Person2/>}
                                    </InputAdornment>),
                                }}
                                variant="outlined"
                                type={'text'}
                                margin="normal"
                                label={'Nazwisko'}
                            />
                        </div>

                        <div className={'flex justify-center'}>
                            <TextField
                                placeholder={'+48 728221253'}
                                InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        {<Phone/>}
                                    </InputAdornment>),
                                }}
                                variant="outlined"
                                type={'text'}
                                margin="normal"
                                label={'Numer telefonu'}
                            />
                        </div>

                        <TextField
                            placeholder={'Wpisz swoje hasło'}
                            InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    {<LockIcon/>}
                                </InputAdornment>), endAdornment: (<InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>)
                            }}
                            variant="outlined"
                            fullWidth={true}
                            margin="normal"
                            type={"password"}
                            label={'Hasło'}
                        />
                        <div className={'mt-2 flex justify-center'}>
                            <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}>
                                <p className={'font-serif font-semibold text-xl'}>Edit data</p>
                            </LoadingButton>
                        </div>
                    </div>
                </div>

                <div className={''}>
                    <h1 className="font-serif font-semibold text-3xl text-center mt-4">Statistics and reviews:</h1>

                    <div className={'grid md:grid-cols-3 justify-items-center mt-2'}>
                        <p className="text-base font-bold text-gray-800 tracking-wide">Booked properties: 5</p>
                        <p className="text-base font-bold text-gray-800 tracking-wide">Currently owned properties: 3</p>
                        <p className="text-base font-bold text-gray-800 tracking-wide">Written reviews: 5</p>
                    </div>

                    <div className={'flex gap-2 justify-center items-center mt-2'}>
                        <p className="font-serif font-semibold text-xl text-center">Average review:</p>
                        <Rating name="size-small" defaultValue={4} size="large" readOnly={true}/>
                    </div>

                    <div className={'grid justify-items-center md:grid-cols-4 grid-cols-1 gap-3 p-2'}>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                        <Review/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
