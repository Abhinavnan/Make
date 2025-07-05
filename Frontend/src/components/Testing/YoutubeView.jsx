import React from "react";
import { Typography, Box, Button, TextField  } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router-dom";

const YoutubeView = () => {
    const [link, setLink] = useState('');
    const baseUrl = 'https://www.youtube.com/embed/';
    const videoId = link.replace('https://www.youtube.com/watch?v=', '') 
    const url = baseUrl.concat(videoId);
    return(
        <Box sx={{width: '100vw', display: 'flex',justifyContent: 'center', 
                height: '100vh', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                <TextField value={link} onChange={e => setLink(e.target.value) } sx={{mr: 2}} />
                <Button variant="contained" component={Link} to={url} target="_blank">
                    Play Video
                </Button>
            </Box>
            <iframe loading="lazy" title="Recent Videos" 
            data-src={baseUrl}  allow="accelerometer; autoplay; encrypted-media; 
            gyroscope; picture-in-picture" allowFullScreen width="500" height="300" 
            src={baseUrl}></iframe>
        </Box>
    );
} 

export default YoutubeView;