import React, {FC, useState} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Email, Person, Person2, Phone} from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import {LoadingButton} from "@mui/lab";
import {User} from "../../model/User";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {RegisterError} from "../../model/RegisterError";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {emailRegex, nameRegex, phoneRegex, surnameRegex} from "../../constans/AuthRegex";

export const ProfileEditingData: FC = () => {
    const user: User = useAppSelector(state => state.user.value);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>(user.email);
    const [name, setName] = useState<string>(user.name);
    const [surname, setSurname] = useState<string>(user.surname);
    const [phoneNumber, setPhone] = useState<string>(user.phoneNumber);
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    debugger

    const [error, setError] = useState<RegisterError>({
        surname: false,
        internal: false,
        phone: false,
        name: false,
        password: false,
        checkBox: false,
        email: false
    });
    const dispatch: ThunkDispatch<any, any, any> = useAppDispatch();

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    async function checkRegistrationData() {
        if (!nameRegex.test(name)) {
            await setError({...error, internal: true, name: true});
        }

        if (!surnameRegex.test(surname)) {
            await setError({...error, internal: true, surname: true});
        }

        if (!phoneRegex.test(phoneNumber)) {
            await setError({...error, internal: true, phone: true});
        }

        if (!emailRegex.test(email)) {
            await setError({...error, internal: true, email: true});
        }
    }

    return (
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
                    defaultValue={user.email}
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
                        label={'Name'}
                        defaultValue={user.name}
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
                        defaultValue={user.surname}
                        label={'Surname'}
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
                        label={'Phone number'}
                        defaultValue={user.phoneNumber}
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
                    label={'Password'}
                />
                <div className={'mt-2 flex justify-center'}>
                    <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}>
                        <p className={'font-serif font-semibold text-xl'}>Edit data</p>
                    </LoadingButton>
                </div>
            </div>
        </div>
    )
}