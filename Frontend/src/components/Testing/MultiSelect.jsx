import React, { useEffect, useState } from "react";
import { Typography, Box, Button, Autocomplete, TextField  } from '@mui/material';

const SkillList = ['java', 'python', 'react', 'JS', 'NodeJS', 'html', 'AWS']
const MultiSelect = () => {
    const [skills, setSkills] = useState([]);
    const handleChange = (event, value) => {
      console.log(value)
      setSkills(value);
    }

    useEffect(()=>{
        //dispatch(updatePersonalDetails(skills: skills));
    },[skills])
    

    return(
        <Box sx={{width: '100vw', display: 'flex',justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Box sx={{width: '20rem',}}>
                <Autocomplete
                multiple
                id="tags-standard"
                onChange={handleChange}
                options={SkillList}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Favorites"
                    value={skills}
                />
                )}
            />
        </Box>
      </Box>

    );
} 

export default MultiSelect;