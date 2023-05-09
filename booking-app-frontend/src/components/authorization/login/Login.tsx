import React, {FC, useState} from "react"
import {Button, FormControl, FormHelperText, IconButton, InputAdornment, TextField} from "@mui/material";
import {AccountCircle, Apple, Facebook, Google, Visibility, VisibilityOff} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import {IconicButton} from "./IconicButton";
import {LoginInput} from "./LoginInput";
import {LoadingButton} from "@mui/lab";
import {LoginInformation} from "./LoginInformation";
import {RememberPassword} from "./RememberPassword";
import {RememberPasswordHelper} from "../../help-contact/RememberPasswordHelper";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../../../model/ApiErrorObject";
import {connector} from "../../../utils/axios";
import {login} from "../../../redux/slices/UserSlice";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {LoginRequest} from "../../../model/LoginRequest";
import {LoginError} from "../../help-contact/LoginError";

export const Login: FC<any> = (props) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [rememberPassword, setRememberPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLoginButton = async () => {
        try {
            const loginRequest: LoginRequest = {email: email, password: password};
            setLoading(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            await connector.post('/api/v1/auth/authenticate', loginRequest).then(response => {
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);
                dispatch(login(response.data.user));
            });

            setLoading(false);

            navigate('/profile');
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;

            await new Promise(resolve => setTimeout(resolve, 2000));

            if (errorData?.numberStatus === 406) {
                setError(true);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className={'flex flex-col gap-2 mb-4'}>
                <IconicButton text={'Login using Google'} icon={<Google/>}/>
                <IconicButton text={'Login using Facebook'} icon={<Facebook/>}/>
                <IconicButton text={'Login using Apple'} icon={<Apple/>}/>
            </div>


            <LoginInput
                icon={<AccountCircle/>}
                placeholder={'Type in your e-mail'}
                formHelper={'E-MAIL'}
                onChange={setEmail}
            />

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
                                    onClick={() => setShowPassword(!showPassword)}
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
                    onChange={(event) => setPassword(event.target.value)}
                    type={showPassword ? 'text' : 'password'}
                />

                <FormHelperText>{'Password'}</FormHelperText>
            </FormControl>

            <LoginInformation/>

            <div className={'mt-2 flex justify-center'}>
                <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}
                               loading={loading} onClick={() => handleLoginButton()}>
                    <p className={'font-serif font-semibold text-xl'}>Login</p>
                </LoadingButton>
            </div>

            <RememberPassword rememberPassword={rememberPassword} setRememberPassword={setRememberPassword}/>

            {rememberPassword && <RememberPasswordHelper isOpen={rememberPassword}
                                                         onClose={() => setRememberPassword(!rememberPassword)}/>}

            {error && <LoginError isOpen={error} onClose={() => setError(false)}/>}

            <div className={'mt-2'}>
                <Button variant="outlined" fullWidth={true} sx={{height: '40px', marginTop: '4px'}}
                        className={'flex gap-1'}>
                    <p className={'text-serif text-sm text-black'}>Are you new in Rentify?</p>
                    <button className={'text-serif text-[#00BFFF]'} onClick={() => props.setIsLogging(!props.logging)}>
                        <button> Create an account</button>
                    </button>
                </Button>
            </div>
        </>
    )
}