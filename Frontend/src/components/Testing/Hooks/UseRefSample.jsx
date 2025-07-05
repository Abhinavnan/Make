import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Button, TextField  } from '@mui/material';
import { h1 } from "framer-motion/client";

const UseRefSample = () => {
    const refrence = useRef(0);
    const textRef = useRef();
    const prevRef = useRef();
    const [name, setName] = useState('');
    useEffect(()=>{
        refrence.current = refrence.current + 1;
    })

    useEffect(()=>{
        prevRef.current = name;
    },[name]);

    return(
        <Box sx={{width : '100vw', maxHeight: '100vw'}}>
            <Typography variant="h2">userRef usage</Typography>
            <Box sx={{width: '100vw', display: 'flex',justifyContent: 'center', 
                     height: '80vh',alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                    <TextField inputRef={textRef} value={name} onChange={e=>setName(e.target.value)}></TextField>
                    <Button variant="contained" onClick={()=>textRef.current.focus()} sx={{ml: 3}}>
                        Focus on text field
                    </Button>
                </Box>
                <Typography variant="h6">Render {refrence.current} times</Typography>
                <Typography>Note: React will render 2 times initially</Typography>
                <Typography variant="h5">Previous name: {prevRef.current}</Typography>
            </Box>
        </Box>
    );
} 

export default UseRefSample;