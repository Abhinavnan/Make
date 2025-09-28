import React, { useState } from 'react';
import { Typography, Box, Button, TextField  } from '@mui/material';
import Validator from './validator';
import { p } from 'framer-motion/client';

const RegularExpression = () => {
    const [formData, setFormData] = useState({
        email: {value: '', error: false, helperText: ''} , 
        password: {value: '', error: false, helperText: ''}
    });
    const { email, password } = formData;
    const isArray = Array.isArray(password.helperText);
    const handleChange = (event) => {
        const {name, value} = event.target;
        const {error, helperText} = Validator(name, value);
        setFormData((prevState) =>({...prevState, [name]: {value, error, helperText}}));
    }

    return (
        <Box sx={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h2" sx={{color: 'black', mb: 2}}>Regular Expression</Typography>
            <TextField type='email' label='Email' name='email'  value={email.value} onChange={handleChange}
                error={email.error} helperText={email.helperText} sx={{width: '50%'}}/>
            <Box sx={{width: '50%', flexDirection: 'column', display: 'flex', }}>
                <TextField  label='Password' name='password' value={password.value} onChange={handleChange} 
                    error={password.error} fullWidth />
                {isArray && password.helperText.map((message, index) => 
                    (<Typography variant="caption" key={index} sx={{color: '#d32f2f', alignSelf: 'flex-start', ml: 1}}>
                        {message}
                    </Typography>))}
            </Box>
        </Box>
    )
}

export default RegularExpression;
