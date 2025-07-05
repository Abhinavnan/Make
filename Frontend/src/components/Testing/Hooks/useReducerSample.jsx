import React from "react";
import { Typography, Box, Button, TextField  } from '@mui/material';
import { useReducer } from "react";
import { useState } from "react";

const actions = { increment: 'increment', decrement: 'decrement', add: 'add', delete: 'delete', toogle: 'toogle'}

function reducer(state, action){
    switch(action.type){
        case actions.increment:
            return {count: state.count + 1};
        case actions.decrement:
            return {count: state.count - 1};
        default:
            return state;
    }
}
 
function Todo(state, action) {
    const values = action.payload
    const todoArray = state.todoList;
    switch(action.type){
        case actions.add:
            return {...state,
                todoList: [...todoArray, {id: Date.now(), name: values.name, toogle: true}]}
        case actions.delete:
            return {...state,
                todoList: todoArray.filter((item) => item.id !== values.id)}
        default:
            return state;
    }
}

const UseReducerSample = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    const [todo, updateTodo] = useReducer(Todo, {todoList: []})
    const [input, setInput] = useState('')
    const todoList = todo.todoList;

    const increment  = () => {
        dispatch({type: actions.increment})
    }
    const decrement  = () => {
        dispatch({type: actions.decrement})
    }

    const handleAdd = () => {
        updateTodo({type: actions.add, payload: {name: input}})
    }
    const handleDelete = (id) => {
        updateTodo({type: actions.delete, payload: {id: id}})
    }
    
    
    return(
        <Box sx={{maxHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}}>
            <Typography variant="h2" sx={{my: 2}}>useReducer Example</Typography>
            <Box sx={{display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
                <Button variant="outlined" onClick={decrement}>-</Button>
                <Typography>{state.count}</Typography>
                <Button variant="outlined" onClick={increment}>+</Button>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center',}}>
                <Box sx={{display: 'flex', gap: 2}}>
                    <TextField value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <Button variant="contained" onClick={handleAdd}>Add</Button>
                </Box>
                { todoList.map((item)=>(
                    <Box key={item.id} sx={{display: 'flex', width: '100%', justifyContent: 'space-between'  }}>
                        <Typography variant="h5">&bull; {item.name}</Typography>
                        <Button variant="contained" color="error" onClick={()=>handleDelete(item.id)}>Delete</Button>
                    </Box>
                ))}
            </Box>
        </Box>       
    );
} 

export default UseReducerSample;