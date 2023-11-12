import splash from '/src/assets/20231110_072135.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import '/src/assets/login.css'
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef} from 'react';

export  function Login(){
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    
   function login(){
    navigate('/home')
   }
   function SignUp(){
    navigate('/SignUp')
   }

return(
    <section className='flex flex-col p-10 items-center overflow-hidden'>
        <Alert className='w-full md:w-80 absolute top-0' severity="error">There was an error with connection!</Alert>
        <div className='w-80  h-80 flex justify-center'>
            <img src={splash} alt="" />
        </div>
        <TextField required className='mb-4 w-full md:w-80' id="standard-basic" label="UserName" variant="standard" />
        <TextField required className='m-4 w-full md:w-80'  id="standard-basic" type='password' label="password" variant="standard" />
        <Button onClick={login}  type='submit' className='rounded-full w-full md:w-80 p-2 font-medium text-white bg-[#001f3f] mt-8 mb-4'>    Login</Button>
        <p className=''>No account?</p>
        <Button onClick={SignUp} id='up'  className='rounded-full w-full md:w-80 border-2 p-2 font-medium text-[#001f3f] border-[#001f3f] '>    Sign Up</Button>
         
    </section>
)
}

export  function SignUp(){
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    
   function login(){
    navigate('/login')
   }
   function SignUp(){
    navigate('/home')
   }

return(
    <section className='flex flex-col p-10 items-center overflow-hidden'>
        <Alert className='w-full md:w-80 absolute top-0' severity="error">There was an error with connection!</Alert>
        <div className='w-80  h-80 flex justify-center'>
            <img src={splash} alt="" />
        </div>
        <TextField required className='mb-4 w-full md:w-80' id="standard-basic" label="Email address" variant="standard" />
        <TextField required className='mb-4 w-full md:w-80' id="standard-basic" label="Create password" variant="standard" />
        <TextField required className='mb-4 w-full md:w-80'  id="standard-basic" type=' password' label="Confirm password" variant="standard" />
        <Button onClick={SignUp}  type='submit' className='rounded-full w-full md:w-80 p-2 font-medium text-white bg-[#001f3f] mt-8 mb-4'>    Sign Up</Button>
        <p className=''>Already have an account?</p>
        <Button onClick={login} id='up'  className='rounded-full w-full md:w-80 border-2 p-2 font-medium text-[#001f3f] border-[#001f3f] '>    Login</Button>
         
    </section>
)
}