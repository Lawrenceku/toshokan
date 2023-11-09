import splash from '/src/assets/20231109_212319.jpg'
import logo from '/src/assets/20231109_212410.png'
import Button from '@mui/material/Button';

export default function Onboarding(){
   return(
    <section className='flex flex-col items-center'>
        <div className=' h-auto flex items-center justify-center w- mt-10'>
        <img className='w-80' src='https://img.freepik.com/free-vector/new-employee-concept-illustration_114360-8899.jpg?w=740&t=st=1699564473~exp=1699565073~hmac=dd1bde6877ff6bfecdc417d4f9e9f742eb915b2963a139e179691b8b18f01de4' alt="" />
        </div>
        <h1 className='font-bold text-3xl mt-16'>Welcome</h1>
        <p className=' p-4  pb-8'>Welcome to Toshokan, your gateway to a world of literary wonders! We're thrilled to have you on board. </p>
        <Button  className='font-medium text-white bg-[#001f3f] rounded py-2 px-6' variant="contained">Next</Button>
    </section>

   )
}