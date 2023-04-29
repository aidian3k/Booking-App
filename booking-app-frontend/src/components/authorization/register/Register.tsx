import React, {FC} from "react"
import {IconicButton} from "../login/IconicButton";
import {Email, Facebook, Google, Person, Person2, Phone, Visibility, VisibilityOff} from "@mui/icons-material";
import {Checkbox, FormControlLabel, IconButton, InputAdornment, TextField} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {LoadingButton} from "@mui/lab";
import {RegisterInformation} from "./RegisterInformation";

export const Register: FC<any> = (props) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={'flex flex-col gap-2 mb-4'}>
                <IconicButton text={'Register via Google'} icon={<Google/>}/>
                <IconicButton text={'Register via Facebook'} icon={<Facebook/>}/>
            </div>

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
                    label={'Name'}
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
                />
            </div>

            <TextField
                placeholder={'Type in your password'}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        {<LockIcon/>}
                    </InputAdornment>), endAdornment: (<InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>)
                }}
                variant="outlined"
                fullWidth={true}
                margin="normal"
                type={"password"}
                label={'Password'}
            />

            <FormControlLabel
                control={<Checkbox color={'success'}/>}
                label={<RegisterInformation/>}
            />

            <div className={'mt-2 flex justify-center'}>
                <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}>
                    <p className={'font-serif font-semibold text-xl'}>Register</p>
                </LoadingButton>
            </div>

            <div className={'flex text-center justify-center mt-4 border-2 border-gray-500 p-2 border-double gap-1'}>
                <p className={'text-base font-serif'}>Already have an account?</p>
                <button className={'text-base font-serif text-cyan-600'} onClick={() => props.setIsLogging(!props.logging)}>Login</button>
            </div>
        </>
    )
}