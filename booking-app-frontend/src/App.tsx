import React, {useEffect, useState} from 'react';
import {Select, TextField} from "@mui/material";
function App() {
    const [userName, setUserName] = useState<string>('');
    localStorage.setItem('token', 'ab');

    useEffect(() => {
        const token: string | null = localStorage.getItem('token'); //TODO JWT TOKEN
        console.log(token);

    },[])

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div className={'flex items-center justify-center'}>
                <TextField id="outlined-basic" label="Username" variant="outlined" sx={
                    {width: 300, height: 300}
                } onChange={(event) => (setUserName(event.target.value))}/>
                {userName}
            </div>
        </>
    )
}

export default App;
