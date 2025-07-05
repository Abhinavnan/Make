import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Typography, Box, Button, AppBar  } from '@mui/material';

const GsapAnimation = () => {

    useGSAP(()=>{
        {/* 
        gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce'})
        gsap.from('.heading', {duration: 1, opacity: 0, delay: 1})
        gsap.from('.stagger', {duration: 1, opacity: 0, delay: 1, stagger: 0.7})
        gsap.from('.left', {duration: 1, delay: 1.2, x: '-100%', ease: "elastic.out"})
        gsap.from('.right', {duration: 2, delay: 1.4, x: '-100vw', ease: "power2.in", borderRadius: 1})
        gsap.to('.footer', {duration: 2, delay: 1.6, y: 0, ease: 'elastic',})
        gsap.fromTo('button', {opacity: 0, scale: 0, rotation: 750}, 
                    {duration: 1, delay: 2, opacity: 1, scale: 1, rotation: 0})
        */}
        const obj = {x: 0}                    
        gsap.to(obj, {duration: 2, x: 100, onUpdate: ()=> {if(obj.x === 100){console.log('destination arrived')}}}) 
        // alternative method everything animate one after another, no need for delay
        const timeline = gsap.timeline({defaults: {duration: 1}})
        timeline.from('.header', { y: '-100%', ease: 'bounce'})
                .to('.header', {boxShadow: '-1px -3px 20px 0px #9a2dd5', duration: 0.1}) 
                .from('.heading', { opacity: 0,})
                .from('.stagger', { opacity: 0, stagger: 0.7})
                .from('.left', { x: '-100%', ease: "elastic.out"}, 1) //add relative delay ant the end
                .from('.right', {x: '-100vw', ease: "power2.in", borderRadius: 1}, '<.5') // 0.5 dealy than previous
                .to('.footer', { y: 0, ease: 'elastic',})
                .fromTo('button', {opacity: 0, scale: 0, rotation: 750}, { opacity: 1, scale: 1, rotation: 0})
                .to('.box',{overflowY: 'auto'})
        const button = document.querySelector('button');
        button.addEventListener('click',()=>{
            timeline.timeScale(3)        
                    .reverse()                    
        })  // when button clicks revers animation 3 times              
    },)

    return(
        <Box className='box' sx={{display: 'flex', flexDirection: 'column', height: '100vh', overflowY: "hidden"}}>
            <AppBar className="header" 
                sx={{backgroundColor: '#9624d3f5', pt: 1, boxShadow: "none",}}>
                <Typography variant="h2" className="heading"
                    sx={{color: '#d1fff7', fontFamily: '"Playpen Sans Deva", cursive', fontWeight: 600,
                        fontSize: {xs:'3rem', sm: '3.75rem'}, fontOpticalSizing: "auto", fontStyle: "normal"}}>
                    GSAP Animation
                </Typography>
            </AppBar>
            <Box sx={{mt: {xs: 9, sm: 11}, display: 'flex', justifyContent: 'center', gap: 3}}>
                <Typography className="stagger" variant="h6">&#9679; Stagger</Typography>
                <Typography className="stagger" variant="h6">&#9679; Stagger</Typography>
                <Typography className="stagger" variant="h6">&#9679; Stagger</Typography>                
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',}}>
                <Box className='left' 
                    sx={{height: '20rem', width: '3rem', backgroundColor: 'purple', borderBottomRightRadius: 4 ,
                         borderTopRightRadius: 4}}/>
                    <Button variant="contained" >Reverse Rotaion</Button>
                <Box className='right' 
                    sx={{height: '20rem', width: '3rem', backgroundColor: 'purple', borderTopLeftRadius: 4, 
                         borderBottomLeftRadius: 4}}/>
            </Box>
            <Box className='footer'
             sx={{ backgroundColor: '#9624d3f5', width: '100vw', transform: 'translateY(100%)', flexGrow: 0.2,
                m: 'auto', mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h3" sx={{my: 1, color: '#d1fff7',  fontFamily: '"Kadwa", serif', fontWeight: 700,
                    fontStyle: "normal"}}>
                    Footer to animation
                </Typography>
            </Box>
        </Box>
    );

} 

export default GsapAnimation;