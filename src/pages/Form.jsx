import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { BASE_URL } from '../utilis/constants';
import swal from 'sweetalert';

const Form = () => {
    const [userData, setUserData]= useState({
        name:"",
        surname: "",
        password: "",
    })

    const onHandleChange = (e)=>{
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    
    const onHandleClick = ()=>{
        axios.post(`${BASE_URL}/create-data`, userData).then((res)=>{
            if(res.status===201){
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    button: "Welcome!",
                  })
            }
        })
    }
    const {name, surname, password} = userData;

  return (
    <div className='container'>
        <div className="form-box">
            <div className="form">
                <h1>REGISTER</h1>
            <TextField id="filled-basic" label="Name" variant="filled" onChange={onHandleChange} name="name" />
            <TextField id="filled-basic" label="Surname" variant="filled" onChange={onHandleChange} name="surname" />
            <TextField id="filled-basic" label="Password" variant="filled" type="password" onChange={onHandleChange} name="password" />
            <Button variant="outlined" onClick={onHandleClick} disabled={(userData.name == "" || userData.surname == "" || userData.password.length <= 8)} >register</Button>
            </div>
        </div>      
    </div>
  )
}

export default Form;
