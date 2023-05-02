import React, {FC} from "react";
import {FormControl, FormHelperText, InputAdornment, TextField} from "@mui/material";

export const LoginInput: FC<any> = (props) => {
    return (
        <FormControl fullWidth={true} variant={'standard'} margin={'normal'}>
            <TextField
                placeholder={props.placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {props.icon}
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                type={'email'}
                fullWidth={true}
                margin="normal"
                onChange={(event) => props.onChange(event.target.value)}
            />
            <FormHelperText>{props.formHelper}</FormHelperText>
        </FormControl>
    )
}