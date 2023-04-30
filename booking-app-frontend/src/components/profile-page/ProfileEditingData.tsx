import React, {FC} from "react";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Email, Person, Person2, Phone} from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import {LoadingButton} from "@mui/lab";

export const ProfileEditingData: FC = () => {
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
    )
}