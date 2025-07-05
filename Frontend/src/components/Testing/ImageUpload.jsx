import React, { useState } from "react";
import { Typography, Box, Button  } from '@mui/material';
import { Link } from "react-router-dom";

const ImageUpload = () => {
    const url = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const [image, setImage] = useState(url);
    const [pdf, setPdf] = useState();
    const [fileName, setFileName] = useState('');

    const handleChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            if (result) {
                setImage(result)
            }
      }
    }

    const handlePdf = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);
        const reader = new FileReader();        
        reader.onload = () => {
            const result = reader.result;
            if (result) {
                setPdf(result)
            }
        }
        reader.readAsDataURL(file);
    }

    const viewPdf = () =>{
        const newWindow = window.open();
        newWindow.document.write (
            `<iframe src='${pdf}' width="100%" height="100%" style="border: none;"></iframe>`
        )
    }
    
  
    return(
        <Box sx={{width: '100vw', display: 'flex',justifyContent: 'center', flexDirection: 'column',
                height: '100vh', alignItems: 'center', gap: 3 }}>
            <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                <Box component='img' src={image} 
                    sx={{width: '10rem', height: '10rem', objectFit: 'contain', mr: 2}} />
                <Button component="label" variant="contained">Upload Image
                    <input type="file" hidden accept='image/*' onChange={handleChange}></input>
                </Button>
            </Box>
            <Box>
                <Button onClick={viewPdf} target="_blank" >View PDF</Button>
                <Button href={pdf} target="_blank" rel="noopener noreferrer" download={fileName}>Download PDF</Button>
                <Button component="label" variant="contained">Upload PDF
                    <input type="file" hidden accept='application/pdf' onChange={handlePdf}></input>
                </Button>
            </Box>
        </Box>
    );
} 

export default ImageUpload;