import React, {FC} from "react";
import {Button} from "@mui/material";
import {NavigateFunction, redirect, useNavigate} from "react-router-dom";

export const IconicButton: FC<any> = (props) => {
    return (
        <Button
            variant={'outlined'}
            size={'medium'}
            fullWidth={true}
            startIcon={props.icon}
            onClick={() => window.location.replace("http://localhost:8080/oauth2/authorization/google")}
            sx={{color: 'black', height: '50px', borderRadius: '10px'}}>
            {props.text}
        </Button>
    )
}