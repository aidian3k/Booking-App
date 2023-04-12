import React, { FC } from "react"
import {Button, FormControl, FormHelperText, IconButton, InputAdornment, TextField} from "@mui/material";
import {AccountCircle, Apple, Facebook, Google, Visibility, VisibilityOff} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import {IconicButton} from "./IconicButton";
import {LoginInput} from "./LoginInput";
import {LoadingButton} from "@mui/lab";
export const Login: FC = () => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="sm:w-1/2 w-screen h-screen bg-gray-200 sm:p-10 p-2 flex justify-center overflow-y-scroll">
            <div className={'sm:w-4/5 w-full flex-col'}>
                <div className={'flex justify-between flex-row mb-4'}>
                    <button className="max-w-lg text-2xl font-arial font-bold leading-relaxed text-gray-900">Zarejestruj się</button>
                    <button className="max-w-lg text-2xl font-arial font-bold leading-relaxed text-gray-900">Zaloguj się</button>
                </div>

                <div className={'flex flex-col gap-2 mb-4'}>
                    <IconicButton text={'Zaloguj się przez Google'} icon={<Google />}/>
                    <IconicButton text={'Zaloguj się przez Facebooka'} icon={<Facebook/>}/>
                    <IconicButton text={'Zaloguj się przez Apple'} icon={<Apple/>}/>
                </div>


                <LoginInput icon={<AccountCircle />} placeholder={'Wpisz swój adres e-mail'} formHelper={'E-MAIL'}/>
                <FormControl fullWidth={true} variant={'standard'} margin={'normal'}>
                    <TextField
                        placeholder={'Wpisz swoje hasło'}
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
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        variant="standard"
                        fullWidth={true}
                        margin="normal"
                        type={"password"}
                    />
                    <FormHelperText>{'HASŁO'}</FormHelperText>
                </FormControl>

                <div className={'text-center m-0'}>
                    <span className={'text-xs '}>Klikając zaloguj się akceptujesz
                        <span className={'font-semibold'}> Warunki korzystania z usługi </span>
                    </span>

                    <span className={'text-xs font-serif'}>
                        oraz  <span className={'font-semibold'}> politykę prywatności</span> Rentify
                    </span>
                </div>

                <div className={'mt-2 flex justify-center'}>
                    <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}>
                        <p className={'font-serif font-semibold text-xl'}>Zaloguj się</p>
                    </LoadingButton>
                </div>

                <div className={'md:flex flex-col md:flex-row md:justify-between p-2 justify-center items-center'}>
                    <div className={'md:w-1/2 w-full md:text-base text-center'}>
                        <p className={'text-xs font-serif'}>
                            Pamiętaj, aby wylogować się z urządzeń, z których mogą korzystać inne osoby!
                        </p>
                    </div>

                    <p className={'text-xs font-serif text-[#00BFFF] hover:text-yellow flex justify-center'}>
                        <button>Nie pamiętasz hasła?</button>
                    </p>
                </div>

                <div className={'md:mt-4 mt-2'}>
                    <Button variant="outlined" fullWidth={true} sx={{height: '40px', marginTop: '4px'}}>
                        <p className={'text-serif text-sm text-black'}>Jesteś nowy w Rentify?</p>
                        <p className={'text-serif text-[#00BFFF]'}><button> Stwórz konto</button></p>
                    </Button>
                </div>

                <div className={'w-full h-5'}>
                </div>
            </div>
        </div>
    )
}