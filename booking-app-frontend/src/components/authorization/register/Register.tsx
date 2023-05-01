import React, {FC, useState} from "react"
import {IconicButton} from "../login/IconicButton";
import {Email, Facebook, Google, Person, Person2, Phone, Visibility, VisibilityOff} from "@mui/icons-material";
import {Checkbox, FormControlLabel, IconButton, InputAdornment, TextField} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import {LoadingButton} from "@mui/lab";
import {RegisterInformation} from "./RegisterInformation";
import {RegisterError} from "../../../model/RegisterError";
import {emailRegex, nameRegex, phoneRegex, surnameRegex} from "../../../constans/AuthRegex";
import {User} from "../../../model/User";

export const Register: FC<any> = (props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [phoneNumber, setPhone] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<RegisterError>({
        surname: false,
        internal: false,
        phone: false,
        name: false,
        password: false,
        checkBox: false,
        email: false
    });

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    function checkRegistrationData() {
        if (!nameRegex.test(name)) {
            setError({...error, internal: true, name: true});
        }

        if (!surnameRegex.test(surname)) {
            setError({...error, internal: true, surname: true});
        }

        if (!phoneRegex.test(phoneNumber)) {
            setError({...error, internal: true, phone: true});
        }

        if(!emailRegex.test(email)) {
            setError({...error, internal: true, email: true});
        }
    }

    const registerUser = (): void => {
        checkRegistrationData();

        if (error.internal) {
            return;
        }

        const user: User = {email: email, name: name, password: password, surname: surname, phoneNumber: phoneNumber, creationDate: new Date()};
    }

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
                onChange={(event) => setEmail(event.target.value)}
                helperText={error.email ? 'Please provide a valid email address' : ''}
                error={error.email}
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
                    onChange={(event) => setName(event.target.value)}
                    helperText={error.name ? 'Please enter your first name.' : ''}
                    error={error.name}
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
                    onChange={(event) => setSurname(event.target.value)}
                    helperText={error.surname ? 'Please enter your last name' : ''}
                    error={error.surname}
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
                    onChange={(event) => setPhone(event.target.value)}
                    helperText={error.phone ? 'Please provide a valid phone number.' : ''}
                    error={error.phone}
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
                            onClick={() => setShowPassword(!showPassword)}
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
                onChange={(event) => setPassword(event.target.value)}
                helperText={error.password ? 'Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character' : ''}
                error={error.password}
            />

            <FormControlLabel
                control={<Checkbox color={'success'}/>}
                label={<RegisterInformation/>}
                onChange={() => setCheckbox(!checkbox)}
            />

            <div className={'mt-2 flex justify-center'}>
                <LoadingButton variant="contained" fullWidth={true} sx={{bgcolor: '#00BFFF', height: '50px'}}
                               loading={loading} onClick={() => registerUser()}>
                    <p className={'font-serif font-semibold text-xl'}>Register</p>
                </LoadingButton>
            </div>

            <div className={'flex text-center justify-center mt-4 border-2 border-gray-500 p-2 border-double gap-1'}>
                <p className={'text-base font-serif'}>Already have an account?</p>
                <button className={'text-base font-serif text-cyan-600'}
                        onClick={() => props.setIsLogging(!props.logging)}>Login
                </button>
            </div>
        </>
    )
}