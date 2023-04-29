import React, {FC} from "react"
import {Button, FormControl, FormHelperText, IconButton, InputAdornment, TextField} from "@mui/material";
import {AccountCircle, Apple, Facebook, Google, Visibility, VisibilityOff} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import {IconicButton} from "./IconicButton";
import {LoginInput} from "./LoginInput";
import {LoadingButton} from "@mui/lab";
import {LoginInformation} from "./LoginInformation";
import {RememberPassword} from "./RememberPassword";

export const Login: FC<any> = (props) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div className={'flex flex-col gap-2 mb-4'}>
                <IconicButton text={'Login using Google'} icon={<Google/>}/>
                <IconicButton text={'Login using Facebook'} icon={<Facebook/>}/>
                <IconicButton text={'Login using Apple'} icon={<Apple/>}/>
            </div>


            <LoginInput icon={<AccountCircle/>} placeholder={'Type in your e-mail'} formHelper={'E-MAIL'}/>
            <FormControl fullWidth={true} variant={'standard'} margin={'normal'}>
                <TextField
                    placeholder={'Type in your password'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<LockIcon/>}
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    variant="standard"
                    fullWidth={true}
                    margin="normal"
                    type={"password"}
                />
                <FormHelperText>{'Password'}</FormHelperText>
            </FormControl>

            <LoginInformation/>

            <div className={'mt-2 flex justify-center'}>
                <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}>
                    <p className={'font-serif font-semibold text-xl'}>Login</p>
                </LoadingButton>
            </div>

            <RememberPassword/>

            <div className={'mt-2'}>
                <Button variant="outlined" fullWidth={true} sx={{height: '40px', marginTop: '4px'}} className={'flex gap-1'}>
                    <p className={'text-serif text-sm text-black'}>Are you new in Rentify?</p>
                    <button className={'text-serif text-[#00BFFF]'} onClick={() => props.setIsLogging(!props.logging)}>
                        <button> Create an account</button>
                    </button>
                </Button>
            </div>
        </>
    )
}