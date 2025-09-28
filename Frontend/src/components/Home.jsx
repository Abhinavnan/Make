import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, Button  } from '@mui/material';
import AnimatePage from "./Animation/AnimatePage";

const Home = () => {
    const names = ['YouTube', 'useRef Test','useReducer Test', 'Upload Image', 'MultiSelect in Search', 
                   'GSAP Animation', 'Three JS', 'Regular Expression'];   
    const links = ['/youtube','/useref','/usereducer','/imageupload', '/multiselect', '/gsap', '/threejs', '/regex'];

    return(
        <AnimatePage>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw',
                    flexDirection: 'column' }}>
                <Typography variant="h2" sx={{mb: 3}}>welcome</Typography>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(5rem,  10rem))', 
                        gap: 2, maxWidth: '100%'}}>
                    {names.map((name, index)=>(
                        <Button variant="contained" key={name} component={Link} to={links[index]}>{name}</Button>
                    ))}
                </Box>
            </Box>
        </AnimatePage>
    );
} 

export default Home;