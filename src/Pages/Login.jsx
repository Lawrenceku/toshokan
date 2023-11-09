import splash from '/src/assets/20231109_212319.jpg'
import logo from '/src/assets/20231109_212410.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login(){
return(
    <section className='flex flex-col items-center'>
        <div className='w-80  h-80 flex justify-center'>
            <img src={splash} alt="" />

        </div>
        <TextField className='mb-4' id="standard-basic" label="UserName" variant="standard" />
        <TextField className='m-4'  id="standard-basic" type='email' label="email address" variant="standard" />
        <TextField className='m-4'  id="standard-basic" type='password' label="password" variant="standard" />
       
        <Button className='rounded w-full md:w-1/4  text-white bg-[#001f3f] m-8'>    Login</Button>
        <p className=''>No account?</p>
        <Button id='up'  className='rounded w-full md:w-1/4 border-2  text-[#001f3f] border-[#001f3f]'>    Sign Up</Button>
        
    </section>
)
}