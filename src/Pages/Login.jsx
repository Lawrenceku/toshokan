import splash from '/src/assets/20231110_072135.jpg'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import '/src/assets/login.css'
import { useState, useEffect, useRef} from 'react';

export default function Login(){
    const [alert, setAlert] = useState(false)
    
   

return(
    <section className='flex flex-col items-center overflow-hidden'>
        <Alert className='w-full md:w-80 absolute top-0' severity="error">There was an error with connection!</Alert>
        <div className='w-80  h-80 flex justify-center'>
            <img src={splash} alt="" />
        </div>
        <TextField required className='mb-4 w-full md:w-80' id="standard-basic" label="UserName" variant="standard" />
        <TextField required className='m-4 w-full md:w-80'  id="standard-basic" type='password' label="password" variant="standard" />
        <Button  type='submit' className='rounded-full w-full md:w-80 p-2 font-medium text-white bg-[#001f3f] mt-8 mb-4'>    Login</Button>
        <p className=''>No account?</p>
        <Button id='up'  className='rounded-full w-full md:w-80 border-2 p-2 font-medium text-[#001f3f] border-[#001f3f] '>    Sign Up</Button>
         
    </section>
)
}